module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://www.2key.top/',
                ws: true,
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''//请求的时候使用这个api就可以，/api表示http://api.xxx.com/api/
                }
            }
        }
    }
}