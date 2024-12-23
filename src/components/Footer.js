import React, { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        // Load the Facebook SDK once
        const loadFacebookSDK = () => {
            // Create the fb-root div if it doesn't exist
            const fbRoot = document.getElementById('fb-root');
            if (!fbRoot) {
                const rootDiv = document.createElement('div');
                rootDiv.id = 'fb-root';
                document.body.appendChild(rootDiv);
            }

            // Load the Facebook SDK script
            const script = document.createElement('script');
            script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0';
            script.async = true;
            script.defer = true;
            script.crossOrigin = 'anonymous';
            document.body.appendChild(script);

            script.onload = () => {
                // Initialize Facebook SDK once the script is loaded
                window.FB && window.FB.XFBML.parse();
            };
        };

        loadFacebookSDK();

        // Cleanup: Remove the script and fb-root div when the component is unmounted
        return () => {
            const fbScript = document.querySelector('script[src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0"]');
            if (fbScript) fbScript.remove();

            const fbRoot = document.getElementById('fb-root');
            if (fbRoot) fbRoot.remove();
        };
    }, []);

    return (
        <footer className="footer">
            <div className="social-media">
                {/* Facebook Feed */}
                <div className="facebook-feed">
                    <div 
                        className="fb-page" 
                        data-href="https://www.facebook.com/CadilloLab/"
                        data-tabs="timeline"
                        data-width="400"
                        data-height="500"  // Adjust the height if needed
                        data-small-header="false"
                        data-adapt-container-width="true"
                        data-hide-cover="false"
                        data-show-facepile="true">
                    </div>
                </div>

                {/* Instagram Feed */}
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
