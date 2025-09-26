const appConfigs = {
    app1: {
        android: {
            package: 'com.xcaret.xcaret_parques',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.xcaret.xcaret_parques'
        },
        ios: {
            bundleId: 'mx.com.experienciasxcaret.XCARET-',
            appStoreUrl: 'https://apps.apple.com/us/app/xcaret/id1165654955'
        },
        desktop: {
            customUrl: 'https://www.xcaret.com/es/' 
        },
        deepLinkScheme: 'https://universal-x.netlify.app' 
    },
    app2: {
        android: {
            package: 'com.xcaret.xcaret_hotel',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.xcaret.xcaret_hotel'
        },
        ios: {
            bundleId: 'com.xcaret.hotelxcaretmexico',
            appStoreUrl: 'https://apps.apple.com/us/app/hoteles-xcaret/id1474819420'
        },
        desktop: {
            customUrl: 'https://www.xcaret.com/es/' 
        },
        deepLinkScheme: 'https://universal-x.netlify.app/' 
    },
    app3: {
        android: {
            package: 'com.xcaret.xcaret_cdlp',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.xcaret.xcaret_cdlp'
        },
        ios: {
            bundleId: 'com.xcaret.casadelaplaya',
            appStoreUrl: 'https://apps.apple.com/us/app/la-casa-de-la-playa/id1619564996'
        },
        desktop: {
            customUrl: 'https://www.xcaret.com/es/' 
        },
        deepLinkScheme: 'https://universal-x.netlify.app/' 
    }
};

// Fallback si no se especifica app
const defaultApp = 'app1';