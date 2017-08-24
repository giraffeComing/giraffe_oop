/**
 * Created by zhangwei36 on 2017/8/18.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// 监视文件改动并重新载入
gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, reload);
});
