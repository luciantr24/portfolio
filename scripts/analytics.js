const trackGoogleAnalytics = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-145860980-1');
}

trackGoogleAnalytics();