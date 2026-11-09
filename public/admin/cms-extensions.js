/*
 * Cadillo Lab content editor: extensions for Decap CMS.
 *
 * index.html loads this file right after decap-cms.js. It adds:
 *   1. Live previews: the right half of the editor shows roughly how the Team,
 *      Publications and Join Us pages will look while you type.
 *      The look comes from preview.css in this folder.
 *   2. "Add a paper from its DOI" above each publications list (widget
 *      publication_list in config.yml); looks the paper up at Crossref / doi.org.
 *   3. Size notes under every picture (widget lab_image in config.yml): pixels,
 *      file size, and a yellow note when the picture is far from the recommendation.
 *   4. Pictures that are not on the live site yet (just uploaded, or only on the
 *      preview site) still show up in the previews and image fields, see pictureUrls.
 *
 * Written for the Decap version pinned in index.html, as plain browser JavaScript
 * (no build step). Decap provides the globals CMS, h (React.createElement) and
 * createClass. Every path is relative to this admin page, so the same files work at
 * /admin/ and /preview/admin/.
 *
 * After upgrading Decap, open each entry and check the previews, the DOI bar and the
 * size notes. Parts 2 and 3 wrap Decap's own list and image widgets (CMS.getWidget).
 */
(function () {
  'use strict';

  var CMS = window.CMS;
  var h = window.h;
  var createClass = window.createClass;
  if (!CMS || !h || !createClass) {
    console.error('cms-extensions.js: Decap CMS globals are missing; extensions not loaded.');
    return;
  }

  // The preview pane is an iframe; give it preview.css from this folder. The URL is
  // resolved against this page, so it is /admin/preview.css or /preview/admin/preview.css.
  CMS.registerPreviewStyle(new URL('preview.css', document.baseURI).href);

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  /** Immutable value from Decap -> plain JavaScript value. */
  function toJS(value) {
    return value && typeof value.toJS === 'function' ? value.toJS() : value;
  }

  /** The entry's data as a plain object. */
  function entryData(props) {
    return toJS(props.entry.get('data')) || {};
  }

  function asList(value) {
    return Array.isArray(value) ? value : [];
  }

  /** Group rows by a key, newest year first, like the Team page does. */
  function groupByYear(rows) {
    var groups = {};
    asList(rows).forEach(function (row) {
      var key = row && row.year !== undefined && row.year !== null ? String(row.year) : '';
      (groups[key] = groups[key] || []).push(row);
    });
    var lastYear = function (key) {
      var parts = key.split('-');
      return parseInt(parts[parts.length - 1], 10) || 0;
    };
    return Object.keys(groups)
      .sort(function (a, b) { return lastYear(b) - lastYear(a); })
      .map(function (key) { return { year: key, rows: groups[key] }; });
  }

  /** Small grey note shown only in the preview, never on the site. */
  function editorNote(text) {
    return h('p', { className: 'lab-note' }, text);
  }

  // ---------------------------------------------------------------------------
  // Where to load a picture from
  //
  // The JSON stores site addresses such as /images/team/x.jpg. Decap shows exactly that
  // address, which is the live site's copy. A picture that was just uploaded (it is
  // only saved on Publish) or that so far exists only on the preview site is not
  // there yet, so Decap's own thumbnail stays broken. pictureUrls lists the places to
  // try, in order: the file Decap holds in memory for a fresh upload, the live site,
  // any copy Decap loaded in this session, and the preview site (display_url in
  // config.yml).
  // ---------------------------------------------------------------------------

  var previewSiteRoot = '';
  fetch('config.yml', { cache: 'no-cache' })
    .then(function (response) { return response.ok ? response.text() : ''; })
    .then(function (text) {
      var match = /^display_url:\s*(\S+)\s*$/m.exec(text);
      if (match) previewSiteRoot = match[1].replace(/\/+$/, '');
    })
    .catch(function () {});

  /** Repository path of a site path: /images/team/x.jpg -> public/images/team/x.jpg */
  function repoPathFor(path, field) {
    var publicFolder = field && field.get && field.get('public_folder');
    var mediaFolder = field && field.get && field.get('media_folder');
    var repoPath = publicFolder && mediaFolder && path.indexOf(publicFolder) === 0
      ? mediaFolder + path.slice(publicFolder.length)
      : 'public' + path; // every picture of this site lives under public/
    return repoPath.replace(/^\/+/, '').replace(/\/+/g, '/');
  }

  function pictureUrls(props, path, field) {
    if (!path || typeof path !== 'string') return [];
    var repoPath = repoPathFor(path, field);
    var files = props.entry && props.entry.get('mediaFiles');
    var media = files && files.find(function (m) { return m && m.get && m.get('path') === repoPath; });
    var inMemory = media && (media.get('url') || media.get('displayURL'));
    inMemory = typeof inMemory === 'string' ? inMemory : '';
    var asset = props.getAsset(path, field);
    var site = asset ? String(asset) : '';
    var preview = previewSiteRoot && path.charAt(0) === '/' ? previewSiteRoot + path : '';
    var urls = media && media.get('draft') ? [inMemory, site, preview] : [site, inMemory, preview];
    return urls.filter(function (url, i) { return url && urls.indexOf(url) === i; });
  }

  /** An <img> that moves on to the next address when one fails to load. */
  var FallbackImage = createClass({
    getInitialState: function () {
      return { index: 0 };
    },
    componentDidUpdate: function (prevProps) {
      if (prevProps.urls.join('|') !== this.props.urls.join('|') && this.state.index !== 0) {
        this.setState({ index: 0 });
      }
    },
    render: function () {
      var self = this;
      var src = this.props.urls[this.state.index];
      if (!src) {
        return h('div', { className: 'lab-missing-image' },
          this.props.urls.length ? 'Picture not found' : this.props.emptyText);
      }
      return h('img', Object.assign({}, this.props.attrs, {
        src: src,
        onError: function () { self.setState({ index: self.state.index + 1 }); },
      }));
    },
  });

  function image(props, path, attrs, emptyText) {
    return h(FallbackImage, { urls: pictureUrls(props, path), attrs: attrs, emptyText: emptyText || 'No picture yet' });
  }

  // ---------------------------------------------------------------------------
  // Team page
  // ---------------------------------------------------------------------------

  function memberCard(props, member, size, onEnter, onLeave) {
    return h(
      'div',
      { className: 'lab-member', onMouseEnter: onEnter, onMouseLeave: onLeave, key: member.name },
      h('div', { className: 'lab-member-photo lab-member-photo-' + size },
        image(props, member.image, { alt: member.name || '' }, 'No photo')),
      h('p', { className: 'lab-member-name' }, member.name || '(name)'),
      h('p', { className: 'lab-member-role' }, member.role || '')
    );
  }

  var ResearcherGroup = createClass({
    getInitialState: function () {
      return { details: '' };
    },
    render: function () {
      var self = this;
      var p = this.props;
      var people = asList(p.people);
      var cards = people.map(function (member, index) {
        return h('div', { key: index }, memberCard(
          p.preview,
          member,
          p.size,
          p.hoverText ? function () { self.setState({ details: member.backContent || '' }); } : undefined,
          p.hoverText ? function () { self.setState({ details: '' }); } : undefined
        ));
      });
      return h(
        'section',
        { className: 'lab-team-group' },
        h('h2', null, p.title),
        people.length ? null : editorNote('Nobody in this list yet.'),
        h(
          'div',
          { className: 'lab-team-row' },
          h('div', { className: 'lab-team-grid lab-cols-' + p.columns }, cards),
          p.hoverText
            ? h('div', { className: 'lab-hover-box' }, this.state.details || p.hoverText)
            : null
        )
      );
    },
  });

  function alumniList(title, children) {
    return h('div', { className: 'lab-alumni-list' }, h('h3', null, title), children);
  }

  var TeamPreview = createClass({
    render: function () {
      var props = this.props;
      var data = entryData(props);
      var faculty = data.faculty || {};
      var alumni = data.alumni || {};
      return h(
        'div',
        { className: 'lab-page lab-team' },
        editorNote('Preview: roughly how the Team page will look. Hover over a photo to see the text visitors see.'),
        h('h2', { className: 'lab-page-title' }, 'Research Team'),
        h(
          'div',
          { className: 'lab-faculty' },
          image(props, faculty.image, { className: 'lab-faculty-photo', alt: 'Faculty' }, 'No photo'),
          h(
            'div',
            { className: 'lab-faculty-info' },
            h('h2', null, faculty.name),
            h('p', { className: 'lab-faculty-title' }, faculty.title),
            h('p', null, faculty.contact),
            h('div', { className: 'lab-faculty-education' },
              asList(faculty.education).map(function (line, i) { return h('p', { key: i }, line); })),
            h('div', { className: 'lab-faculty-bio' },
              asList(faculty.bio).map(function (para, i) { return h('p', { key: i }, para); }))
          )
        ),
        h(ResearcherGroup, {
          preview: props, title: 'Graduate Researchers', people: data.gradResearchers, columns: 2, size: 'large',
          hoverText: "Hover over a graduate researcher's image to see their details",
        }),
        h(ResearcherGroup, {
          preview: props, title: 'Postdoctoral Researchers', people: data.postdocResearchers, columns: 2, size: 'large',
          hoverText: "Hover over a postdoctoral researcher's image to see their details",
        }),
        h(ResearcherGroup, {
          preview: props, title: 'Undergraduate Researchers', people: data.undergraduateResearchers, columns: 3, size: 'small',
        }),
        h(
          'section',
          { className: 'lab-alumni' },
          h('h2', null, 'Alumni'),
          editorNote('On the site each list below is closed until a visitor clicks its title.'),
          alumniList('Graduates', asList(alumni.graduateAlumni).map(function (a, i) {
            return h('div', { className: 'lab-alumni-item', key: i }, h('strong', null, a.name), h('p', null, a.details));
          })),
          alumniList('Postdoctoral Researchers', asList(alumni.postdocAlumni).map(function (a, i) {
            return h('div', { className: 'lab-alumni-item', key: i }, h('strong', null, a.name), h('p', null, a.details));
          })),
          alumniList('Barrett Honors Thesis', groupByYear(alumni.honorsThesis).map(function (g) {
            return h('div', { className: 'lab-year-group', key: g.year }, h('h4', null, g.year),
              g.rows.map(function (t, i) {
                return h('p', { key: i }, h('strong', null, t.name), ', ' + (t.degree || '') + ':', h('br'), h('em', null, t.thesisTitle));
              }));
          })),
          alumniList('Undergraduate Researchers', asList(alumni.undergraduateResearchers).map(function (g, i) {
            var names = asList(g.researchers);
            return h('div', { className: 'lab-year-group', key: i }, h('h4', null, g.year),
              h('p', null, names.map(function (r, j) {
                return h('span', { key: j }, h('strong', null, r.name), r.program ? ' (' + r.program + ')' : '', j < names.length - 1 ? ', ' : '');
              })));
          })),
          alumniList('High School Researchers', groupByYear(alumni.highSchoolResearchers).map(function (g) {
            return h('div', { className: 'lab-year-group', key: g.year }, h('h4', null, g.year),
              g.rows.map(function (r, i) { return h('p', { key: i }, h('strong', null, r.name), h('br'), r.school); }));
          })),
          alumniList('Visiting Scholar', groupByYear(alumni.internationalScholarsAndInterns).map(function (g) {
            return h('div', { className: 'lab-year-group', key: g.year }, h('h4', null, g.year),
              g.rows.map(function (s, i) {
                return h('p', { key: i }, h('strong', null, s.name), h('br'), s.researchTitle,
                  s.program ? h('span', null, h('br'), '(' + s.program + ')') : null);
              }));
          }))
        )
      );
    },
  });
  CMS.registerPreviewTemplate('team', TeamPreview);

  // ---------------------------------------------------------------------------
  // Publications page
  // ---------------------------------------------------------------------------

  /** Same nesting rule as src/components/Publications.js (buildSectionTree). */
  function buildSectionTree(sections) {
    var roots = [];
    var stack = [];
    asList(sections).forEach(function (section) {
      var node = Object.assign({}, section, { children: [] });
      var level = Math.max(0, Number(section.nestLevel) || 0);
      while (stack.length > level) stack.pop();
      if (stack.length === 0) roots.push(node);
      else stack[stack.length - 1].children.push(node);
      stack.push(node);
    });
    return roots;
  }

  function publicationLink(pub) {
    return pub.link || (pub.doi ? 'https://doi.org/' + pub.doi : undefined);
  }

  function renderSection(props, section, key) {
    return h(
      'div',
      { className: 'lab-year-section', key: key },
      h('h2', null, 'Publications from ' + (section.label || '')),
      h(
        'div',
        { className: 'lab-publication-row' },
        asList(section.publications).map(function (pub, i) {
          var link = publicationLink(pub);
          return h(
            'a',
            { key: i, href: link, target: '_blank', rel: 'noopener noreferrer', title: link ? 'Opens ' + link : 'No link yet' },
            image(props, pub.image, { alt: pub.title || 'Publication' }, 'No thumbnail yet')
          );
        })
      ),
      section.children.map(function (child, i) { return renderSection(props, child, i); })
    );
  }

  var PublicationsPreview = createClass({
    render: function () {
      var props = this.props;
      var data = entryData(props);
      var banner = data.banner || {};
      return h(
        'div',
        { className: 'lab-page lab-publications' },
        editorNote('Preview: roughly how the Publications page will look. Click a thumbnail to check its link.'),
        image(props, banner.src, { className: 'lab-banner', alt: banner.alt || '' }, 'No banner image'),
        h('section', { className: 'lab-publication-list' },
          buildSectionTree(data.sections).map(function (section, i) { return renderSection(props, section, i); }))
      );
    },
  });
  CMS.registerPreviewTemplate('publications', PublicationsPreview);

  // ---------------------------------------------------------------------------
  // Join Us page (three entries)
  // ---------------------------------------------------------------------------

  function positionList(title, summary, positions) {
    var list = asList(positions);
    return h(
      'div',
      { className: 'lab-position-group' },
      h('h2', null, title),
      h('p', { className: 'lab-position-summary' }, summary),
      list.length
        ? list.map(function (pos, i) {
          return h('div', { className: 'lab-position', key: i },
            h('h3', null, pos.title),
            h('p', null, pos.description));
        })
        : h('p', null, 'No positions available')
    );
  }

  CMS.registerPreviewTemplate('positions', createClass({
    render: function () {
      var data = entryData(this.props);
      return h(
        'div',
        { className: 'lab-page lab-joinus' },
        editorNote('Preview: the text inside the "Open Position" / "Position" drop-downs of the Join Us page. On the site they are closed until clicked, and line breaks in a description are not kept: it shows as one block of text.'),
        positionList('Graduate Student Opportunities', 'Open Position', data.graduate),
        positionList('Postdoctoral Positions', 'Position', data.postdoc),
        positionList('Undergraduate Research Opportunities', 'Position', data.undergraduate)
      );
    },
  }));

  CMS.registerPreviewTemplate('programs', createClass({
    render: function () {
      var programs = asList(entryData(this.props).programs);
      return h(
        'div',
        { className: 'lab-page lab-joinus' },
        editorNote('Preview: this line appears in the Graduate Student section of the Join Us page.'),
        h('h4', null, 'Professor Cadillo is a faculty member in the following programs:'),
        h('p', null, programs.map(function (program, i) {
          return h('span', { key: i },
            h('a', { href: program.url, target: '_blank', rel: 'noopener noreferrer' }, program.name),
            i < programs.length - 1 ? ', ' : '');
        }))
      );
    },
  }));

  CMS.registerPreviewTemplate('joinus', createClass({
    render: function () {
      var props = this.props;
      var data = entryData(props);
      var banner = data.banner || {};
      return h(
        'div',
        { className: 'lab-page lab-joinus' },
        editorNote('Preview: the banner at the top of the Join Us page.'),
        image(props, banner.src, { className: 'lab-banner', alt: 'Join Cadillo Lab' }, 'No banner image'),
        editorNote('The outreach photos at the bottom of the page. On the site they rotate in this order, one at a time, cropped to 500 px high.'),
        h('div', { className: 'lab-carousel' }, asList(data.carousel).map(function (photo, i) {
          return h('figure', { key: i },
            image(props, photo.src, { alt: photo.alt || '' }, 'No photo'),
            h('figcaption', null, (i + 1) + '. ' + (photo.alt || '(no alternative text)')));
        }))
      );
    },
  }));

  // ---------------------------------------------------------------------------
  // "Add a paper from its DOI" (config.yml: widget: publication_list)
  //
  // The publications list of each section, plus a bar above it: paste a DOI, click
  // "Add paper", and a new row appears at the bottom of that list with the title,
  // authors, journal, year, DOI and link filled in from Crossref (or, for DOIs that
  // Crossref does not know, from doi.org). The editor then picks the thumbnail.
  //
  // The list itself is Decap's own list widget. The new row is added through that
  // widget's addItem method, which keeps its bookkeeping (row keys, open/closed rows)
  // in step. addItem is internal to Decap, so after a Decap upgrade check that the
  // button still works; if it is gone, the bar says so and "Add publication" still works.
  // ---------------------------------------------------------------------------

  var DOI_PATTERN = /^10\.\d{4,9}\/\S+$/;

  /** Accepts "10.x/y", "doi:10.x/y" or a doi.org link; returns the bare DOI or ''. */
  function normalizeDoi(text) {
    var doi = String(text || '').trim();
    doi = doi.replace(/^doi:\s*/i, '').replace(/^https?:\/\/(dx\.)?doi\.org\//i, '');
    try {
      doi = decodeURIComponent(doi);
    } catch (e) {
      // keep it as typed
    }
    return DOI_PATTERN.test(doi) ? doi : '';
  }

  /** Plain text from a title that may contain HTML such as <i>…</i> or &amp;. */
  function plainText(html) {
    var doc = new DOMParser().parseFromString(String(html || ''), 'text/html');
    return (doc.body.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function first(value) {
    return Array.isArray(value) ? value[0] : value;
  }

  function yearOf() {
    for (var i = 0; i < arguments.length; i++) {
      var parts = arguments[i] && arguments[i]['date-parts'];
      var year = parts && parts[0] && parts[0][0];
      if (year) return Number(year);
    }
    return null;
  }

  function authorNames(authors) {
    return (Array.isArray(authors) ? authors : [])
      .map(function (a) {
        return a.literal || a.name || [a.given, a.family].filter(Boolean).join(' ');
      })
      .filter(Boolean)
      .join(', ');
  }

  /** Crossref and CSL-JSON (doi.org) records use nearly the same field names. */
  function paperFromRecord(record, doi) {
    return {
      year: yearOf(record.issued, record['published-print'], record['published-online'], record.created),
      title: plainText(first(record.title)),
      authors: authorNames(record.author),
      journal: plainText(first(record['container-title']) || record.publisher || ''),
      doi: doi,
      link: 'https://doi.org/' + doi,
      image: '',
    };
  }

  function lookUpDoi(doi) {
    var crossref = 'https://api.crossref.org/works/' + encodeURIComponent(doi);
    return fetch(crossref, { headers: { Accept: 'application/json' } }).then(function (response) {
      if (response.ok) {
        return response.json().then(function (json) { return paperFromRecord(json.message || {}, doi); });
      }
      if (response.status !== 404) throw new Error('crossref ' + response.status);
      // Not a Crossref DOI (for example DataCite, used by ResearchGate and Zenodo):
      // ask doi.org for the citation record instead.
      return fetch('https://doi.org/' + encodeURI(doi), {
        headers: { Accept: 'application/vnd.citationstyles.csl+json' },
      }).then(function (r) {
        if (r.status === 404) return null;
        if (!r.ok) throw new Error('doi.org ' + r.status);
        return r.json().then(function (json) { return paperFromRecord(json, doi); });
      });
    });
  }

  /** A DOI found anywhere in a text, e.g. inside https://journals.asm.org/doi/10.1128/... */
  function doiInText(text) {
    var match = /(10\.\d{4,9}\/[^\s?#]+)/.exec(String(text || ''));
    return match ? normalizeDoi(match[1]) : '';
  }

  /** Section headings that already list this DOI (the same paper may sit in two years). */
  function sectionsWithDoi(entry, doi) {
    var sections = toJS(entry && entry.getIn(['data', 'sections'])) || [];
    var wanted = doi.toLowerCase();
    return sections
      .filter(function (section) {
        return asList(section.publications).some(function (pub) {
          return [pub.doi, pub.link].some(function (text) { return doiInText(text).toLowerCase() === wanted; });
        });
      })
      .map(function (section) { return section.label; });
  }

  var listWidget = CMS.getWidget('list');

  var PublicationListControl = createClass({
    getInitialState: function () {
      return { doi: '', busy: false, message: '', tone: '' };
    },

    // Decap validates and focuses the control it gets from getWrappedInstance, so hand
    // it the real list widget: the rows keep their required-field and format checks.
    getWrappedInstance: function () {
      var inner = this.listControl;
      return inner && inner.getWrappedInstance ? inner.getWrappedInstance() : inner;
    },

    setListControl: function (ref) {
      this.listControl = ref;
    },

    say: function (tone, message) {
      this.setState({ busy: false, tone: tone, message: message });
    },

    addFromDoi: function (event) {
      if (event) event.preventDefault();
      var self = this;
      var doi = normalizeDoi(this.state.doi);
      if (!doi) {
        this.say('error', 'That is not a DOI. A DOI starts with 10. followed by a slash, for example 10.1128/spectrum.00387-24.');
        return;
      }
      var list = this.getWrappedInstance();
      if (!list || typeof list.addItem !== 'function') {
        this.say('error', 'This button does not work with the current editor version. Use "Add publication" below and fill in the fields by hand.');
        return;
      }
      var already = sectionsWithDoi(this.props.entry, doi);
      if (already.length && !window.confirm('This DOI is already listed under ' + already.join(', ') + '. Add it here as well?')) {
        return;
      }
      this.setState({ busy: true, tone: '', message: 'Looking up ' + doi + ' …' });
      lookUpDoi(doi).then(
        function (paper) {
          if (!paper || !paper.title) {
            self.say('error', 'No record was found for ' + doi + '. Check the DOI for typos, or use "Add publication" and fill in the fields by hand.');
            return;
          }
          // An Immutable Map like the other rows (field is one; clear() gives an empty one).
          list.addItem(self.props.field.clear().merge(paper));
          self.setState({ doi: '' });
          self.say('success', 'Added at the bottom of this list: "' + paper.title + '". Now open the new row, choose its thumbnail, and drag the row to its place.');
        },
        function () {
          self.say('error', 'The DOI service could not be reached. Check the internet connection and try again, or use "Add publication" and fill in the fields by hand.');
        }
      );
    },

    render: function () {
      var self = this;
      var inputId = this.props.forID + '-doi';
      return h(
        'div',
        { className: 'lab-doi-list' },
        h(
          'div',
          { className: 'lab-doi-bar' },
          h('label', { htmlFor: inputId }, 'Add a paper from its DOI'),
          h('input', {
            id: inputId,
            type: 'text',
            value: this.state.doi,
            placeholder: '10.1128/spectrum.00387-24',
            disabled: this.state.busy,
            onChange: function (e) { self.setState({ doi: e.target.value, message: '' }); },
            onKeyDown: function (e) { if (e.key === 'Enter') self.addFromDoi(e); },
          }),
          h('button', { type: 'button', onClick: this.addFromDoi, disabled: this.state.busy || !this.state.doi.trim() },
            this.state.busy ? 'Looking up…' : 'Add paper'),
          this.state.message
            ? h('p', { className: 'lab-doi-message lab-doi-' + (this.state.tone || 'info'), role: 'status' }, this.state.message)
            : null
        ),
        h(listWidget.control, Object.assign({}, this.props, { ref: this.setListControl }))
      );
    },
  });

  CMS.registerWidget('publication_list', PublicationListControl, listWidget.preview, listWidget.schema);


  // ---------------------------------------------------------------------------
  // Image fields with size notes (config.yml: widget: lab_image)
  //
  // Decap's own image field, plus a line under the picture with its size in pixels
  // and in KB/MB, and a yellow note when it is outside the recommendation set on the
  // field in config.yml, for example
  //   recommended: { shape: square, min_width: 500, max_width: 1000, max_kb: 500 }
  // shape is square, portrait or landscape. The note never blocks saving.
  // ---------------------------------------------------------------------------

  var imageWidget = CMS.getWidget('image');

  function formatBytes(bytes) {
    if (!bytes && bytes !== 0) return '';
    if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    return Math.max(1, Math.round(bytes / 1024)) + ' KB';
  }

  function describeRecommendation(rec) {
    var parts = [];
    if (rec.shape) parts.push(rec.shape);
    if (rec.min_width && rec.max_width) parts.push(rec.min_width + ' to ' + rec.max_width + ' px wide');
    else if (rec.min_width) parts.push('at least ' + rec.min_width + ' px wide');
    if (rec.max_kb) parts.push('under ' + rec.max_kb + ' KB');
    return parts.join(', ');
  }

  function sizeNotes(info, rec) {
    var notes = [];
    var w = info.width;
    var hgt = info.height;
    if (rec.max_kb && info.bytes > rec.max_kb * 1024) {
      notes.push('The file is ' + formatBytes(info.bytes) + '. Pictures over ' + rec.max_kb +
        ' KB make the page slow for visitors. A copy saved ' + (rec.max_width || 1500) +
        ' px wide as JPG is usually small enough.');
    }
    if (w && hgt) {
      var ratio = w / hgt;
      if (rec.shape === 'square' && (ratio < 0.9 || ratio > 1.1)) {
        notes.push('The picture is not square. The page cuts it to a circle, so edges may be cut off.');
      }
      if (rec.shape === 'portrait' && ratio > 1) {
        notes.push('The picture is wider than tall; a tall (portrait) picture fits best here.');
      }
      if (rec.shape === 'landscape' && ratio < 1) {
        notes.push('The picture is taller than wide; a wide (landscape) picture fits best here.');
      }
      if (rec.min_width && w < rec.min_width) {
        notes.push('It is only ' + w + ' px wide and may look blurry. ' + rec.min_width + ' px or more is better.');
      }
    }
    return notes;
  }

  var LabImageControl = createClass({
    getInitialState: function () {
      return { info: null };
    },

    getWrappedInstance: function () {
      var inner = this.imageControl;
      return inner && inner.getWrappedInstance ? inner.getWrappedInstance() : inner;
    },

    setImageControl: function (ref) {
      this.imageControl = ref;
    },

    componentDidMount: function () {
      this.measure(0);
    },

    componentDidUpdate: function (prevProps) {
      if (prevProps.value !== this.props.value) this.measure(0);
    },

    componentWillUnmount: function () {
      this.unmounted = true;
      clearTimeout(this.retry);
    },

    /**
     * Finds an address where the chosen picture loads (see pictureUrls) and reads its
     * pixel size and file size. When that is not the address Decap shows, Decap's own
     * thumbnail is broken, so the working one is shown instead (state.replacement).
     */
    measure: function (attempt) {
      var self = this;
      var path = this.props.value;
      clearTimeout(this.retry);
      var urls = pictureUrls(this.props, path, this.props.field);
      if (!urls.length) {
        if (this.state.info) this.setState({ info: null });
        // Decap may still be preparing the picture, or config.yml (display_url) is loading.
        if (path && attempt < 20) this.retry = setTimeout(function () { self.measure(attempt + 1); }, 500);
        return;
      }
      var siteUrl = String(this.props.getAsset(path, this.props.field) || '');
      var request = (this.request = {});
      var tryUrl = function (i) {
        if (self.unmounted || self.request !== request) return;
        if (i >= urls.length) {
          self.setState({ info: { path: path, missing: true } });
          return;
        }
        var img = new Image();
        img.onload = function () {
          var dims = { width: img.naturalWidth, height: img.naturalHeight };
          fetch(urls[i])
            .then(function (r) { return r.ok ? r.blob() : null; })
            .then(function (blob) { return blob ? blob.size : null; }, function () { return null; })
            .then(function (bytes) {
              if (self.unmounted || self.request !== request) return;
              self.setState({ info: {
                path: path, bytes: bytes, width: dims.width, height: dims.height,
                replacement: urls[i] !== siteUrl ? urls[i] : '',
              } });
            });
        };
        img.onerror = function () { tryUrl(i + 1); };
        img.src = urls[i];
      };
      tryUrl(0);
    },

    render: function () {
      var rec = toJS(this.props.field.get('recommended')) || {};
      var info = this.state.info && this.state.info.path === this.props.value ? this.state.info : null;
      var facts = info
        ? [info.width && info.height ? info.width + ' × ' + info.height + ' px' : '', formatBytes(info.bytes)]
          .filter(Boolean).join(', ')
        : '';
      var notes = info && !info.missing ? sizeNotes(info, rec) : [];
      var recommendation = describeRecommendation(rec);
      var replacement = info && info.replacement;
      return h(
        'div',
        { className: 'lab-image' + (replacement ? ' lab-image-replaced' : '') },
        replacement ? h('img', { className: 'lab-image-thumb', src: replacement, alt: '' }) : null,
        h(imageWidget.control, Object.assign({}, this.props, { ref: this.setImageControl })),
        replacement
          ? h('p', { className: 'lab-image-facts' },
            'This picture is not on the live site yet (it was just uploaded, or it is only on the preview site). It goes live when the maintainer publishes the preview.')
          : null,
        info && info.missing
          ? h('div', { className: 'lab-image-warning', role: 'note' },
            h('p', null, 'This picture could not be found at ' + info.path + '. Choose it again with "Choose different image".'))
          : null,
        facts || recommendation
          ? h('p', { className: 'lab-image-facts' },
            facts ? 'This picture: ' + facts + '.' : '',
            recommendation ? (facts ? ' ' : '') + 'Recommended: ' + recommendation + '.' : '')
          : null,
        notes.length
          ? h('div', { className: 'lab-image-warning', role: 'note' },
            notes.map(function (note, i) { return h('p', { key: i }, note); }))
          : null
      );
    },
  });

  var labImageSchema = {
    properties: Object.assign({}, (imageWidget.schema && imageWidget.schema.properties) || {}, {
      recommended: {
        type: 'object',
        properties: {
          shape: { type: 'string', enum: ['square', 'portrait', 'landscape'] },
          min_width: { type: 'number' },
          max_width: { type: 'number' },
          max_kb: { type: 'number' },
        },
      },
    }),
  };

  CMS.registerWidget('lab_image', LabImageControl, imageWidget.preview, labImageSchema);

})();
