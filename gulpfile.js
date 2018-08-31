const gulp = require('gulp')
const browserify = require('browserify')
const fs = require('fs')
gulp.task('compileES6', () => {
	browserify('index.js').transform('babelify',{presets : ['es2015', 'react']}).bundle().pipe(fs.createWriteStream('public/bundle.js'))
})

gulp.task('watchCompileEs6', () => {
	gulp.watch('*.js', ['compileES6'])
})

gulp.task('default', ['compileES6','watchCompileEs6'])