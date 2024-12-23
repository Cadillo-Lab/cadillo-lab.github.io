import React, { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        // Load Facebook SDK
        const loadFacebookSDK = () => {
            window.fbAsyncInit = function() {
                window.FB.init({
                    appId: 'YOUR_FB_APP_ID',
                    xfbml: true,
                    version: 'v18.0'
                });
            };

            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        };

        // Load Instagram SDK
        const loadInstagramSDK = () => {
            const script = document.createElement('script');
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        };

        loadFacebookSDK();
        loadInstagramSDK();

        // Cleanup
        return () => {
            const fbScript = document.getElementById('facebook-jssdk');
            const igScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
            if (fbScript) fbScript.remove();
            if (igScript) igScript.remove();
        };
    }, []);

    return (
        <footer className="footer">
            <div className="social-media">
                <div className="facebook-feed">
                    <div className="fb-page" 
                        data-href="https://www.facebook.com/CadilloLab"
                        data-tabs="timeline"
                        data-width="340"
                        data-height="500"
                        data-small-header="false"
                        data-adapt-container-width="true"
                        data-hide-cover="false"
                        data-show-facepile="true">
                    </div>
                </div>
                <div className="instagram-feed">
                    <iframe
                        title="Instagram Feed"
                        src="https://www.instagram.com/methano.hinsby/embed"
                        width="340"
                        height="500"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency="true"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
