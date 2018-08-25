var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var config = require('../config');

// 压缩JS
gulp.task('script', function () {
    gulp.src(config.src.script)
        .pipe(plumber())
        // .pipe(uglify())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(config.build.script))
});





















