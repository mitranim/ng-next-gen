'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bsync = require('browser-sync').create();
var flags = require('yargs').argv;
var pt = require('path');

function prod() {
  return flags.prod === true || flags.prod === 'true';
}

/*--------------------------------- Scripts ---------------------------------*/

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
      module: 'system',
      experimentalDecorators: true
    }))
    .pipe(gulp.dest('dist/app'))
    .pipe(bsync.reload({stream: true}));
});

gulp.task('scripts:watch', function() {
  $.watch('src/app/**/*', function() {return gulp.start('scripts:ts')});
});

/*---------------------------------- HTML -----------------------------------*/

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
      stripPrefix: 'src/html',
      imports: {prod: prod}
    }))
    .pipe(gulp.dest('dist'))
    .pipe(bsync.reload({stream: true}));
});

gulp.task('html:watch', function() {
  $.watch('src/html/**/*', function() {return gulp.start('html:compile')});
});

/*--------------------------------- Styles ----------------------------------*/

gulp.task('styles:copy', function() {
  return gulp.src('dist/jspm_packages/npm/stylific@0.0.11/css/stylific.css')
    .pipe(gulp.dest('dist/css'));
});

gulp.task('styles:watch', function() {
  $.watch('dist/jspm_packages/npm/stylific@0.0.11/css/stylific.css', function() {return gulp.start('styles:copy')});
});

/*--------------------------------- System ----------------------------------*/

gulp.task('system:copy', function() {
  return gulp.src('system.config.js').pipe(gulp.dest('dist'));
});

gulp.task('system:watch', function() {
  $.watch('system.config.js', function() {return gulp.start('system:copy')});
});

/*--------------------------------- Server ----------------------------------*/

gulp.task('server', function() {
  return bsync.init({
    startPath: '/ng-next-gen/',
    server: {
      baseDir: 'dist',
      middleware: function(req, res, next) {
        req.url = req.url.replace(/^\/ng-next-gen/, '/')
        next()
      }
    },
    port: 9238,
    online: false
  });
});

/*--------------------------------- Default ---------------------------------*/

gulp.task('build', ['scripts:ts', 'html:compile', 'styles:copy', 'system:copy']);

gulp.task('default', ['build', 'scripts:watch', 'html:watch', 'styles:watch', 'system:watch'], function() {
  return gulp.start('server');
});
