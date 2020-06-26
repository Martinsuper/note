module.exports = {
    title: '路遥知Martin',
    description: '学无止境，静以修身',
    themeConfig: {
        locales: {
            '/': {
                nav: require('./config/nav'),
                sidebar: require('./config/sidebar')
            }
        }
    },
    plugins: [
        'mermaidjs'
    ]
}