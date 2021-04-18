const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Compile scss into css
function style() {
    // Find css file
    return gulp.src('./scss/**/*.scss')
    // Pass file through sass compiler
        .pipe(sass())
    // Where do i save the compiled css
        .pipe(gulp.dest('./css'))
    // Stream changes to all browsers
        .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

