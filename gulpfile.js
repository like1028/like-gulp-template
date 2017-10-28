/**
 *@file:   gulp配置文件
 *@author: Like(978885880@qq.com)
 *@time:   2017-10-27 09:41:07
 *@disc:
 */
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
// var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cache =require('gulp-cache');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var fs = require('fs');
var url = require('url');

// 压缩html
gulp.task('html', function(){
    gulp.src('src/**/*.{html,htm}')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build/'))
});

// 编译CSS
var cssFiles = ['./src/styles/*.styl'];
gulp.task('css',function () {
    gulp.src(cssFiles)
        .pipe(plumber()) // 阻止 gulp 插件发生错误导致进程退出并输出错误日志
        .pipe(stylus({
            'include css': true,
            compress: false
        }))
        .pipe(autoprefixer({
            cascade: true
        }))
        .pipe(gulp.dest('src/styles/css'))
        .pipe(reload({stream: true}))
});
// build CSS
var cssFiles = ['src/styles/**/*.styl'];
gulp.task('buildcss',function () {
    gulp.src(cssFiles)
        .pipe(plumber())
        .pipe(stylus({
            'include css': true,
            compress: false
        }))
        .pipe(autoprefixer({
            cascade: true
        }))
        .pipe(minifycss({compatibility: 'ie7'}))
        .pipe(gulp.dest('build/css'))
});

// 压缩JS
var jsFiles = ['src/scripts/**/*.js'];
gulp.task('script', function () {
    gulp.src(jsFiles)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('build/'))
});
// 压缩图片
gulp.task('image', function(){
    gulp.src('src/images/*.{gif,jpg,png,svg,ico}')
        .pipe(cache(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true //类型：Boolean 默认：false 隔行扫描gif进行渲染
        })))
        .pipe(gulp.dest('build/images'))
});

// 字体
gulp.task('font', function(){
   gulp.src('src/fonts')
       .pipe(gulp.dest('build/fonts'))
});

gulp.task('default', ['css'], function () {
    // console.log('所有任务队列执行完毕！');
});

gulp.task('build', ['html', 'buildcss', 'script', 'image']);

gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(webserver({
            host: 'localhost',
            port: 8000,
            livereload: true,
            // 显示目录文件
            directoryListing: {
                enable: true,
                path: './'
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
    gulp.watch('src/**/*.{html}').on('change', reload);
    gulp.watch('src/styles/**/*.{styl, css}', ['css']);
});






















