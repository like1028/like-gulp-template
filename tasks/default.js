var gulp = require('gulp');

gulp.task('default', ['css'], function () {
    // console.log('所有任务队列执行完毕！');
});

gulp.task('build', ['html', 'buildcss', 'script', 'font', 'image']);





















