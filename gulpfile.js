'use strict'

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bsync = require('browser-sync').create();
var flags = require('yargs').argv;
var pt = require('path');

function prod() {
  return flags.prod === true || flags.prod === 'true';
}

gulp.task('scripts:clear', function() {
  return gulp.src('dist/app/**/*.js', {read: false, allowEmpty: true})
    .pipe($.plumber())
    .pipe($.rimraf());
});

gulp.task('scripts:views', ['scripts:clear'], function() {
  return gulp.src('src/app/**/*.html')
    .pipe($.plumber())
    .pipe($.ngHtml2js({moduleName: 'app'}))
    .pipe($.concat('views.js'))
    .pipe($.babel({modules: 'system'}))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('scripts:ts', ['scripts:views'], function() {
  return gulp.src('src/app/**/*.ts')
    .pipe($.plumber())
    .pipe($.typescript({
      noExternalResolve: true,
      typescript: require('typescript'),
      target: 'ES5',
      module: 'system'
    }))
    .pipe(gulp.dest('dist/app'))
    .pipe(bsync.reload({stream: true}));
});

gulp.task('scripts:watch', function() {
  $.watch('src/app/**/*', function() {return gulp.start('scripts:ts')});
});

gulp.task('html:clear', function() {
  return gulp.src([
      'dist/**/*.html',
      '!dist/app/**/*',
      '!dist/jspm_packages/**/*'
    ], {read: false, allowEmpty: true})
    .pipe($.plumber())
    .pipe($.rimraf());
});

gulp.task('html:compile', ['html:clear'], function() {
  return gulp.src('src/html/**/*')
    .pipe($.plumber())
    .pipe($.statil({
      relativeDir: 'src/html',
      imports: {prod: prod}
    }))
    // Change each `<filename>` into `<filename>/index.html`.
    .pipe($.rename(function(path) {
      switch (path.basename + path.extname) {
        case 'index.html': case '404.html': return
      }
      path.dirname = pt.join(path.dirname, path.basename)
      path.basename = 'index'
    }))
    .pipe(gulp.dest('dist'))
    .pipe(bsync.reload({stream: true}));
});

gulp.task('html:watch', function() {
  $.watch('src/html/**/*', function() {return gulp.start('html:compile')});
});

gulp.task('system:copy', function() {
  return gulp.src('system.config.js').pipe(gulp.dest('dist'));
});

gulp.task('system:watch', function() {
  $.watch('system.config.js', function() {return gulp.start('system:copy')});
});

gulp.task('bsync', function() {
  return bsync.init({
    server: {
      baseDir: 'dist'
    },
    port: 9238,
    online: false
  });
});

gulp.task('build', ['scripts:ts', 'html:compile', 'system:copy']);

gulp.task('default', ['build', 'scripts:watch', 'html:watch', 'system:watch'], function() {
  return gulp.start('bsync');
});
