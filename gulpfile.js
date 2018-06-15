var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
browserSync = require('browser-sync'),
webpack = require('webpack');


gulp.task('watch', function(){
  browserSync.init({
    open: false,
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function(){
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  });

  watch('./app/assets/scripts/**/*.js', function(){
    gulp.start('scriptsRefresh');
  });
});


// CSS Automation
gulp.task('styles', function(){
  gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, nested, cssvars, autoprefixer]))
  //Stop BrowserSync from Ending
  .on('error', function(errorInfo){
    console.log(errorInfo.toString());
    this.emit('end');
  })
  //Stop BrowserSync from Ending
  .pipe(gulp.dest('./app/temp/styles/'));
});

gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(browserSync.stream());
});

// Javascrip Automation
gulp.task('scripts', function(callback){
  webpack(require('./webpack.config.js'), function(err, stats){
    if(err){
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});
gulp.task('scriptsRefresh', ['scripts'], function(){
  browserSync.reload();
});
