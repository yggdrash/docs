module.exports = {
    locales: {
        '/': {
            lang: 'ko',
            title: 'YGGDRASH',
            description: 'TRUST-based Multi-dimensional Blockchains'
        },
        // '/en/': {
        //     lang: 'en-US',
        //     title: 'YGGDRASH',
        //     description: 'TRUST-based Multi-dimensional Blockchains'
        // }
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
                    { 
                        text: '제품',
                        items: [
                            { text: 'Commander', link: 'https://github.com/yggdrash/yggdrash-cli' },
                            { text: 'Javascript SDK', link: 'https://github.com/yggdrash/yggjs' }
                        ]
                    }
                ],
                sidebar: {
                    '/ko/guide/': [
                        '/ko/guide/',
                        '/ko/guide/installation',
                        '/ko/guide/getting-started'
                    ]
                }
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Guide', link: '/en/guide/' },
                    { 
                        text: 'Products',
                        items: [
                            { text: 'Commander', link: 'https://github.com/yggdrash/yggdrash-cli' },
                            { text: 'Javascript SDK', link: 'https://github.com/yggdrash/yggjs' }
                        ]
                    }
                ],
                sidebar: {
                    '/en/guide/': [
                        '/en/guide/',
                        '/en/guide/installation',
                        '/en/guide/getting-started'
                    ]
                }
            }
        },
    }
}