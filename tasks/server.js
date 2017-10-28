var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config = require('../config');
var fs = require('fs');
var url = require('url');

gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(webserver({
            host: 'localhost',
            port: 8000,
            livereload: true,
            // 显示目录文件
            directoryListing: {
                enable: true,
                path: './src'
            },

            // mock数据配置
            middleware: function (req, res, next) {
                var urlObj = url.parse(req.url, true);
                switch (urlObj.pathname) {
                    case '/user/get':
                        res.setHeader('Content-Type', 'application/json;chartset=utf-8');
                        fs.readFile('./mock/test.json', function (err, data){
                            // 使用相对路径
                            res.end(data);
                        });
                        return;
                    case '/user/post':
                        //...
                        return;
                }
                next();
            }
        }));
});

gulp.task('server', ['default'], function(){
    browserSync({
        port: 8000,
        server: {
            baseDir: ['./src'],
            direction: true,
            middleware: [
                function (req, res, next) {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
                    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
                    next();
                }
            ]
        },
        open: false
    });
    gulp.watch(config.src.html).on('change', reload);
    gulp.watch('src/styles/**/*.{styl, css}', ['css']);
});