var gulp = require('gulp');
var config = require('../config');

// 字体
gulp.task('font', function(){
   gulp.src(config.src.font)
       .pipe(gulp.dest(config.build.font))
});





















