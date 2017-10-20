(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('umd', function() {
  return gulp.src('src/vue-store.js')
      .pipe($.umd({
        exports:function(){
          return 'Store';
        },
        namespace: function(file) {
          return 'vs.Store';
        },
        dependencies: function(file) {
          return [

          ];
        }
      }))
      .pipe(gulp.dest('dist'));
  });


}());
