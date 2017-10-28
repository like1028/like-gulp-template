var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var config = require('../config');

// 压缩html
gulp.task('html', function(){
    gulp.src(config.src.html)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.build.html))
});
