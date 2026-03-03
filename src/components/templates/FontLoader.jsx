import { useEffect } from 'react';

/**
 * Dynamically injects a Google Fonts <link> into <head> for the duration
 * the component is mounted, then removes it on unmount.
 */
export default function FontLoader({ href }) {
    useEffect(() => {
        // Preconnect
        const preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = 'https://fonts.googleapis.com';
        document.head.appendChild(preconnect);

        const preconnect2 = document.createElement('link');
        preconnect2.rel = 'preconnect';
        preconnect2.href = 'https://fonts.gstatic.com';
        preconnect2.crossOrigin = 'anonymous';
        document.head.appendChild(preconnect2);

        // Font stylesheet
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
            document.head.removeChild(preconnect);
            document.head.removeChild(preconnect2);
        };
    }, [href]);

    return null;
}

