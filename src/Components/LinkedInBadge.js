import React, { useEffect } from 'react';

const LinkedInBadge = () => {
    useEffect(() => {
        // Load the LinkedIn script
        const script = document.createElement('script');
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;
        script.type = "text/javascript";
        document.body.appendChild(script);

        // Cleanup function to remove the script when the component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="pradyothsp" data-version="v1">
            <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/pradyothsp?trk=profile-badge">
                Pradyoth S P
            </a>
        </div>
    );
};

export default LinkedInBadge;