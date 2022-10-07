const {generateSideGroup} = require('./utils/index')
const root = './docs';

module.exports = {
    theme: "vt",
    base: '/AchievementDocs/',
    markdown: {
        lineNumbers: true
    },
    plugins: [
        ['@vuepress/back-to-top'],
    ],
    title: 'AchievementDoc',
    description: 'BDS llse plugins Achievement',
    head: [
        [
            'link',
            {rel: 'icon', href: 'Achievement.svg'}
        ]
    ],
    themeConfig: {
        enableDarkMode: true,
        lastUpdated: '最后更新于', // string | boolean
        nav: [
            {text: 'Home', link: '/'},
            {text: '指南', link: '/guide'},
            {text: 'Q&A', link: '/question'},
            {text: 'Github', link: 'https://github.com/246859/Achievement.git'},
            {text: '编辑', link: 'https://github.com/246859/AchievementDoc'},
            {
                text: '站点', items: [
                    {text: '国外', link: 'https://246859.github.io/AchievementDocs/'},
                    {text: '国内', link: 'https://float1024.gitee.io/achievementdocs/'}
                ]
            },
        ],
        sidebar: generateSideGroup(root, [
            {
                title: "配置教程",
                path: "/view/config/"
            },
            {
                title: "自定义教程",
                path: "/view/diy/"
            },
            {
                title: "API导出",
                path: "/view/api/"
            },
            {
                title: "词条百科",
                path: "/view/entry/"
            }
        ])
    }
}