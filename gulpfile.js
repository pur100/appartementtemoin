const { task, watch, src, dest, series } = require('gulp');
const sass = require('gulp-sass');
const autoprefix = require('gulp-autoprefixer');
const t2 = require('through2'); // Get through2 as t2

var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var rev = require('gulp-rev');


sass.compiler = require('node-sass');

function scss(cb) {
  src('./src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .on('error', sass.logError)
    .pipe(autoprefix({
      grid: true
    }))
    .pipe(t2.obj((chunk, enc, cb) => { // Execute through2
      let date = new Date();
      chunk.stat.atime = date;
      chunk.stat.mtime = date;
      cb(null, chunk);
    }))
    .pipe(dest('./assets/'))

    cb();
}

gulp.task('pack-js', function () {
    return gulp.src(['./src/js/**/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('./assets/'));
    });

function watcher(cb) {
  watch('./src/scss/**/*.scss', series(scss))
  watch('./src/js/**/*.js', series('pack-js'))
  cb()
}

module.default = task('default', series([scss, watcher]));

