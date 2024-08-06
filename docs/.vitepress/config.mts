import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "My Awesome Project",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            // { text: 'Home', link: '/' },
            // { text: 'Examples', link: '/markdown-examples' }
            {text: '教程', link: '/guide'},
        ],

        sidebar: {
            "/guide/": [
                {
                    text: '起步',
                    items: [
                        {
                            text: '环境配置', link: '/guide/environmentConfiguration',
                            items: [
                                {text: 'Node.js', link: '/guide/environmentConfiguration#node-js'},
                                {text: 'ide', link: '/guide/environmentConfiguration#ide'},
                            ]
                        },
                    ]
                },
                // {
                //     text: 'html基础',
                //     items: []
                // },
                // {
                //     text: 'js基础',
                //     items: []
                // },
                // {
                //     text: 'css基础',
                //     items: []
                // },
                // {
                //     text: '框架',
                //     items: []
                // },
                // {
                //     text: '公司框架',
                //     items: []
                // },
                // {
                //     text: '工具',
                //     items: []
                // },
            ]
        },
        socialLinks: [
            {
                icon: 'github', link: 'https://github.com/vuejs/vitepress'
            }
        ]
    }
})
