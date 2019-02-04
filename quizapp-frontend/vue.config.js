'use strict';

let path = require('path')
module.exports = {
    devServer: {
        port: 8080,
        proxy: {
            // proxy all webpack dev-server requests starting with /api to our Spring Boot backend (localhost:8088)
            '/api': {
                target: 'http://localhost:8081',
                changeOrigin: true
            }
        }
    }
};
