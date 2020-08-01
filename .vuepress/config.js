module.exports = {
    base: '/',
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: 'HOME', link: '/' },
            { text: 'ABOUT', link: '/about/' }
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
    locales: {
        '/': {
            lang:  'en-EN',
            title: "Nhan Nguyen Trung",
        },
        '/vi/': {
            lang:  'vi-VN',
            title: 'Nguyễn Trung Nhân',
        }    

    }
}