module.exports = {
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        host: 'localhost',
        port: 3000,
        https: false,
        hotOnly: false,
        /*设置代理服务器*/
        proxy: {
            '/api': {
                /* 'http://localhost:3100/api/'目标代理服务器地址 http://47.240.80.23:8080/starmeet/api/*/
                target: 'http://47.240.80.23:3100/api/',
                ws: true,
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': '' //请求的时候使用这个api就可以，/api表示http://localhost:8080/api
                }
            }
        }
    }
}