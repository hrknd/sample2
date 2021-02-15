var Ziggy = {
    namedRoutes: {
        index: { uri: '/', methods: ['GET', 'HEAD'], domain: null },
        login: { uri: 'login', methods: ['GET', 'HEAD'], domain: null },
        logout: { uri: 'logout', methods: ['POST'], domain: null },
        register: {
            uri: 'register',
            methods: ['GET', 'HEAD'],
            domain: null,
        },
        'password.request': {
            uri: 'password/reset',
            methods: ['GET', 'HEAD'],
            domain: null,
        },
        'password.email': {
            uri: 'password/email',
            methods: ['POST'],
            domain: null,
        },
        'password.reset': {
            uri: 'password/reset/{token}',
            methods: ['GET', 'HEAD'],
            domain: null,
        },
        'password.update': {
            uri: 'password/reset',
            methods: ['POST'],
            domain: null,
        },
        'password.confirm': {
            uri: 'password/confirm',
            methods: ['GET', 'HEAD'],
            domain: null,
        },
        'bookmark.index': {
            uri: 'bookmarks',
            methods: ['GET', 'HEAD'],
            domain: null,
        },
        'bookmark.add': {
            uri: 'bookmark/add',
            methods: ['GET', 'HEAD'],
            domain: null,
        },
        'bookmark.view': {
            uri: 'bookmark/view/{bookmark}',
            methods: ['GET', 'HEAD'],
            domain: null,
        },
        'bookmark.preview': {
            uri: 'bookmark/preview',
            methods: ['POST'],
            domain: null,
        },
        'bookmark.active': {
            uri: 'bookmark/make-active',
            methods: ['POST'],
            domain: null,
        },
        'bookmark.redirect': {
            uri: 'bookmark/redirect/{bookmark}',
            methods: ['GET', 'HEAD'],
            domain: null,
        },
    },
    baseUrl: 'http://192.168.50.10/',
    baseProtocol: 'http',
    baseDomain: '192.168.50.10',
    basePort: false,
    defaultParameters: [],
};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    for (var name in window.Ziggy.namedRoutes) {
        Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
    }
}

export { Ziggy };
