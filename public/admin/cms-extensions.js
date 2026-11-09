/*
 * Cadillo Lab content editor: extensions for Decap CMS.
 *
 * index.html loads this file right after decap-cms.js. It adds:
 *   1. Live previews: the right half of the editor shows roughly how the Team,
 *      Publications and Join Us pages will look while you type.
 *      The look comes from preview.css in this folder.
 *
 * Written for the Decap version pinned in index.html, as plain browser JavaScript
 * (no build step). Decap provides the globals CMS, h (React.createElement) and
 * createClass. Every path is relative to this admin page, so the same files work at
 * /admin/ and /preview/admin/.
 *
 * After upgrading Decap, open each entry and check that its preview still renders.
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

  /** URL Decap can show for an image path stored in the JSON (handles fresh uploads too). */
  function assetUrl(props, path) {
    if (!path) return '';
    var asset = props.getAsset(path);
    return asset ? String(asset) : '';
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

  function image(props, path, attrs, emptyText) {
    var src = assetUrl(props, path);
    if (!src) return h('div', { className: 'lab-missing-image' }, emptyText || 'No picture yet');
    return h('img', Object.assign({ src: src }, attrs));
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
})();
