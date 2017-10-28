var gulp = require('gulp');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var config = require('../config');

// 压缩JS
gulp.task('script', function () {
    gulp.src(config.src.script)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest(config.build.script))
});





















