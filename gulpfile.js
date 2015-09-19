'use strict';

/**
 * Requires gulp 4.0:
 *   "gulp": "git://github.com/gulpjs/gulp#4.0"
 */

/******************************* Dependencies ********************************/

var $       = require('gulp-load-plugins')();
var bsync   = require('browser-sync').create();
var del     = require('del');
var gulp    = require('gulp');
var flags   = require('yargs').argv;
var pt      = require('path');
var webpack = require('webpack');

/********************************** Globals **********************************/

var src = {
  html: 'src/html/**/*',
  scripts: 'src/app/**/*.ts',
  scriptsCore: 'src/app/boot.ts',
  views: 'src/app/**/*.html',
  styles: 'node_modules/stylific/lib/stylific.css'
};

var dest = {
  html: 'dist',
  scripts: 'dist/app',
  styles: 'dist/styles'
};

function prod () {
  return flags.prod === true || flags.prod === 'true'
};

function reload (done) {
  bsync.reload()
  done()
};

/*********************************** Tasks ***********************************/

/*--------------------------------- Scripts ---------------------------------*/

gulp.task('scripts:build', function(done) {
  var alias = {
    /* ... */
  };

  webpack({
    entry: './' + src.scriptsCore,
    output: {
      path: pt.join(process.cwd(), dest.scripts),
      filename: 'app.js'
    },
    resolve: {
      alias: alias,
      extensions: ['', '.ts', '.js']
    },
    module: {
      loaders: [
        {
          test: /\.tsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'ts-loader'
        },
        {
          test: /\.html$/,
          loader: 'ngtemplate?relativeTo=' + pt.resolve(process.cwd(), 'src/app') + '/!html'
        }
      ]
    },
    plugins: prod() ? [new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})] : []
  }, function(err, stats) {
    if (err) {
      throw new Error(err);
    } else {
      var report = stats.toString({
        colors: true,
        chunks: false,
        timings: false,
        version: false,
        hash: false,
        assets: false
      });
      if (report) console.log(report);
    }
    done();
  });
});

gulp.task('scripts:watch', function() {
  $.watch(src.scripts, gulp.series('scripts:build', reload));
  $.watch(src.views, gulp.series('scripts:build', reload));
});

/*--------------------------------- Styles ----------------------------------*/

gulp.task('styles:clear', function(done) {
  del(dest.styles).then((_) => {done()});
});

gulp.task('styles:copy', function() {
  return gulp.src(src.styles)
    .pipe(gulp.dest(dest.styles))
    .pipe(bsync.stream());
});

gulp.task('styles:build', gulp.series('styles:clear', 'styles:copy'));

gulp.task('styles:watch', function() {
  $.watch(src.styles, gulp.series('styles:build'));
});

/*---------------------------------- HTML -----------------------------------*/

gulp.task('html:clear', function(done) {
  del(dest.html + '/**/*.html').then((_) => {done()});
});

gulp.task('html:compile', function() {
  return gulp.src(src.html)
    .pipe($.statil({imports: {prod: prod}}))
    .pipe(gulp.dest(dest.html));
});

gulp.task('html:build', gulp.series('html:clear', 'html:compile'));

gulp.task('html:watch', function() {
  $.watch(src.html, gulp.series('html:build', reload));
});

/*--------------------------------- Server ----------------------------------*/

gulp.task('server', function() {
  return bsync.init({
    startPath: '/ng-next-gen/',
    server: {
      baseDir: dest.html,
      middleware: function(req, res, next) {
        req.url = req.url.replace(/^\/ng-next-gen/, '/')
        next()
      }
    },
    port: 9238,
    online: false,
    ui: false,
    files: false,
    ghostMode: false,
    notify: true
  });
});

/*--------------------------------- Default ---------------------------------*/

gulp.task('build', gulp.parallel(
  'scripts:build', 'styles:build', 'html:build'
));

gulp.task('watch', gulp.parallel(
  'scripts:watch', 'styles:watch', 'html:watch'
));

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'server')));
