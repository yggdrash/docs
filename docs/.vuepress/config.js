module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
    ],
    locales: {
        '/': {
            lang: 'ko',
            title: 'YGGDRASH DEVELOPERS',
            description: 'TRUST-based Multi-dimensional Blockchains'
        },
        '/en/': {
            lang: 'en-US',
            title: 'YGGDRASH',
            description: 'TRUST-based Multi-dimensional Blockchains'
        }
    },
    themeConfig: {
        repo: 'yggdrash/yggdrash',
        locales: {
            '/': {
                label: '한국어',
                selectText: '다른 언어로 보기',
                nav: [
                    { text: '홈', link: '/' },
                    { text: '가이드', link: '/ko/guide/' },
                    { text: '문서', link: '/ko/yggdrash-doc/' },
                    { 
                        text: '제품',
                        items: [
                            { text: 'YGGDRASH Platform', link: 'https://github.com/yggdrash/yggdrash' },
                            { text: 'Commander', link: 'https://github.com/yggdrash/yggdrash-cli' },
                            { text: 'Javascript SDK', link: 'https://github.com/yggdrash/yggjs' }
                        ]
                    },
                    { text: 'Gitter', link: 'https://gitter.im/yggdrash' }
                ],
                sidebar: {
                    '/ko/guide/': [
                        '/ko/guide/',
                        '/ko/guide/installation',
                        '/ko/guide/getting-started',
                        '/ko/guide/test-net'
                    ],
                    '/ko/yggdrash-doc/': [
                        '/ko/yggdrash-doc/',
                        '/ko/yggdrash-doc/architecture',
                        '/ko/yggdrash-doc/block',
                        '/ko/yggdrash-doc/node',
                        '/ko/yggdrash-doc/development-reference',
                        '/ko/yggdrash-doc/keystore.md',
                        '/ko/yggdrash-doc/api/jsonrpc-api',
                        '/ko/yggdrash-doc/api/api-interface',
                        '/ko/yggdrash-doc/api/jsonrpc-error-codes',
                    ]
                }
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Guide', link: '/en/guide/' },
                    { text: 'Document', link: '/en/yggdrash-doc/' },
                    { 
                        text: 'Products',
                        items: [
                            { text: 'YGGDRASH Platform', link: 'https://github.com/yggdrash/yggdrash' },
                            { text: 'Commander', link: 'https://github.com/yggdrash/yggdrash-cli' },
                            { text: 'Javascript SDK', link: 'https://github.com/yggdrash/yggjs' }
                        ]
                    },
                    { text: 'Gitter', link: 'https://gitter.im/yggdrash' }
                ],
                sidebar: {
                    '/en/guide/': [
                        '/en/guide/',
                        '/en/guide/installation',
                        '/en/guide/getting-started'
                    ],
                    '/en/yggdrash-doc/': [
                        '/en/yggdrash-doc/',
                        '/en/yggdrash-doc/architecture',
                        '/en/yggdrash-doc/block',
                        '/en/yggdrash-doc/node',
                        '/ko/yggdrash-doc/development-reference',
                        '/ko/yggdrash-doc/keystore.md',
                        '/en/yggdrash-doc/api/jsonrpc-api',
                        '/en/yggdrash-doc/api/api-interface',
                        '/en/yggdrash-doc/api/jsonrpc-error-codes',
                    ]
                }
            }
        },
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-112834562-6'
            }
        ],
        ['@vuepress/back-to-top']
    ]
}