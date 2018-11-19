module.exports = {
    title: 'YGGDRASH',
    description: 'TRUST-based Multi-dimensional Blockchains',
    themeConfig: {
        repo: 'yggdrash/yggdrash',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { 
                text: 'Products',
                items: [
                    { text: 'Commander', link: 'https://github.com/yggdrash/yggdrash-cli' },
                    { text: 'Javascript SDK', link: 'https://github.com/yggdrash/yggjs' }
                ]
            }
        ],
        sidebar: {
            '/guide/': [
                '/guide/',
                // '/guide/installation',
                '/guide/getting-started'
            ]
        }
    }
}