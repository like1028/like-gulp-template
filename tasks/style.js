var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config = require('../config');

// 编译CSS
gulp.task('css',function () {
    gulp.src(config.src.style)
        .pipe(plumber()) // 阻止 gulp 插件发生错误导致进程退出并输出错误日志
        .pipe(stylus({
            'include css': true,
            compress: false
        }))
        .pipe(autoprefixer({
            cascade: true
        }))
        .pipe(gulp.dest(config.src.css))
        .pipe(reload({stream: true}))
});
//  打包CSS
gulp.task('buildcss',function () {
    gulp.src(config.src.style)
        .pipe(plumber())
        .pipe(stylus({
            'include css': true,
            compress: false
        }))
        .pipe(autoprefixer({
            cascade: true
        }))
        .pipe(minifycss({compatibility: 'ie7'}))
        .pipe(gulp.dest(config.build.style))
});
