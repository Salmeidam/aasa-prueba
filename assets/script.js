(function() {
    const ua = navigator.userAgent.toLowerCase();
    const urlParams = new URLSearchParams(window.location.search);
    const appId = urlParams.get('app') || defaultApp; // Obtiene ?app=ID o usa default
    const config = appConfigs[appId];

    if (!config) {
        console.error('App no encontrada:', appId);
        window.location = 'https://fallback-general.com'; // Fallback global si app inválida
        return;
    }

    function redirect() {
        if (/android/.test(ua)) {
            attemptDeepLink(config.deepLinkScheme + 'deep-path', () => {
                window.location = config.android.playStoreUrl; // Fallback específico
            });
        } else if (/iphone|ipad|ipod/.test(ua)) {
            if (isIOSVersionAtLeast(9)) {
                attemptDeepLink(config.deepLinkScheme, () => {
                    window.location = config.ios.appStoreUrl; // Fallback específico
                });
            } else {
                window.location = config.ios.appStoreUrl;
            }
        } else {
            // Desktop/Web
            window.location = config.desktop.customUrl; // URL específica por app
        }
    }

    function attemptDeepLink(deepLink, fallback) {
        const start = Date.now();
        window.location = deepLink;
        setTimeout(() => {
            if (Date.now() - start < 3000) { // Timeout de 3s para detectar fallo
                fallback();
            }
        }, 2000);
    }

    function isIOSVersionAtLeast(version) {
        const match = ua.match(/os (\d+)_/);
        return match && parseInt(match[1], 10) >= version;
    }

    redirect();
})();