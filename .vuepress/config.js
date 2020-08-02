module.exports = {
    dest: 'docs',
    base: '/nhanntdl.github.io.git-dev/',
    locales: {
        '/': {
            lang:  'en-EN',
            title: "Nhan Nguyen Trung",
        },
        // '/vi/': {
        //     lang:  'vi-VN',
        //     title: 'Nguyễn Trung Nhân',
        // }    

    },
    plugins: ['@vuepress/back-to-top'],
    head: [
		['link', { rel: 'icon', sizes: '32x32', href: '/images/logo.png' }],
	],
    themeConfig: {
        smoothScroll: true,
        logo: '/images/logo.png',
        sidebar: 'auto',
        nav: [
            { text: 'HOME', link: '/' },
            { text: 'ABOUT', link: '/about/' },
            { text: 'BLOG', link: '/blog/' },
        ],
        locales: {
            '/vi/': {
                lang:  'vi-VN',
                nav: [
                    { text: 'TRANG CHỦ', link: '/vi/' },
                    { text: 'GIỚI THIỆU', link: '/vi/about/' }
                ],
            }    
    
        }
    },
}