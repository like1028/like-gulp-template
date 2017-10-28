var gulp = require('gulp');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var config = require('../config');

// 压缩图片
// gulp.task('image', function(){
//     gulp.src('src/images/*.{gif,jpg,png,svg}')
//         .pipe(plumber())
//         .pipe(imagemin())
//         .pipe(cache(imagemin({
//             optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
//             progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
//             interlaced: true //类型：Boolean 默认：false 隔行扫描gif进行渲染
//         })))
//         .pipe(gulp.dest('build/images'))
// });
gulp.task('image', function(){
    gulp.src('src/images/*.{gif,jpg,png,svg}')
        .pipe(plumber())
        .pipe(gulp.dest('build/images'))
});




















