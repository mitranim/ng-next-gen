'use strict'

var gulp = require('gulp')
var $ = require('gulp-load-plugins')()
var bsync = require('browser-sync').create()
var flags = require('yargs').argv

function prod() {
  return flags.prod === true || flags.prod === 'true'
}

gulp.task('scripts:clear', function() {
  return gulp.src('dist/app/**/*', {read: false, allowEmpty: true})
    .pipe($.rimraf())
})

gulp.task('scripts:views', ['scripts:clear'], function() {
  return gulp.src('src/app/**/*.html')
    .pipe($.plumber())
    .pipe($.ngHtml2js({moduleName: 'app'}))
    .pipe($.concat('views.js'))
    .pipe($.babel({modules: 'system'}))
    .pipe(gulp.dest('dist/app'))
})

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
    .pipe(bsync.reload({stream: true}))
})

gulp.task('scripts:watch', function() {
  $.watch('src/app/**/*', function() {return gulp.start('scripts:ts')})
})

gulp.task('html:clear', function() {
  return gulp.src([
    'dist/**/*.html',
    '!dist/app/**/*',
    '!dist/jspm_packages/**/*'
  ], {read: false, allowEmpty: true}).pipe($.rimraf())
})

gulp.task('html:compile', ['html:clear'], function() {
  return gulp.src('src/html/**/*')
    .pipe($.plumber())
    .pipe($.statil({
      relativeDir: 'src/html',
      imports: {prod: prod}
    }))
    .pipe(gulp.dest('dist'))
    .pipe(bsync.reload({stream: true}))
})

gulp.task('html:watch', function() {
  $.watch('src/html/**/*', function() {return gulp.start('html:compile')})
})

gulp.task('bsync', function() {
  return bsync.init({
    server: {
      baseDir: 'dist'
    },
    port: 9238,
    online: false
  })
})

gulp.task('build', ['scripts:ts', 'html:compile'])

gulp.task('default', ['build', 'scripts:watch', 'html:watch'], function() {
  return gulp.start('bsync')
})
