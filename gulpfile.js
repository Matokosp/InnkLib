const gulp = require('gulp')
data = require('gulp-data');
concat = require('gulp-concat');
gulpif = require('gulp-if');
sourcemaps = require('gulp-sourcemaps');
sass = require('gulp-sass');
autoprefixer = require('gulp-autoprefixer');
plumber = require('gulp-plumber');
browserSync = require('browser-sync');
reload = browserSync.reload;
del = require('del');
browserify = require('browserify');
babelify = require('babelify');
uglify = require('gulp-uglify');
source = require('vinyl-source-stream');
buffer = require('vinyl-buffer');
twig = require('gulp-twig');
fs = require('fs');
path = require('path');

const paths = {
	output: './dist',
	source: './src',
	css: '/css/',
	scss: '/scss/',
	js: '/js/',
	assets: '/assets/',
	template: '/template/',
	data: '/template/data/'
};

// gulp styles (scss)
gulp.task('styles', () => gulp.src(`${paths.source + paths.scss}style.scss`)
	.pipe(gulpif(process.env.NODE_ENV !== 'prod', sourcemaps.init({
		largeFile: true,
	})))
	.pipe(sass({
		outputStyle: process.env.NODE_ENV === 'prod' ? 'compressed' : 'expanded',
		includePaths: ['node_modules'],
	}).on('error', sass.logError))
	.pipe(gulpif(process.env.NODE_ENV !== 'prod', sass().on('error', sass.logError)))
	.pipe(autoprefixer())
	.pipe(gulpif(process.env.NODE_ENV !== 'prod', sourcemaps.write()))
	.pipe(gulp.dest(paths.output + paths.css))
	.pipe(browserSync.stream()));

// gulp json (copy asset files)
gulp.task('assets', () => gulp.src(`${paths.source + paths.assets}**/*`)
	.pipe(gulp.dest(paths.output + paths.assets)));

// gulp scripts (babel)
gulp.task('scripts', () => browserify(`${paths.source + paths.js}app.js`)
	.transform(babelify, {
		presets: ['@babel/env'],
	})
	.bundle()
	.pipe(source('app.js'))
	.pipe(buffer())
	.pipe(gulpif(process.env.NODE_ENV !== 'prod', sourcemaps.init({
		largeFile: true,
	})))
	.pipe(gulpif(process.env.NODE_ENV === 'prod', uglify()))
	.pipe(concat('main.js'))
	.pipe(gulpif(process.env.NODE_ENV !== 'prod', sourcemaps.write('/')))
	.pipe(gulp.dest(paths.output + paths.js))
	.pipe(browserSync.stream()));

// HANDLE TWIG & PASS DATA
gulp.task('twig', function () {
	return gulp.src([`${paths.source + paths.template}*.twig`])
		// Stay live and reload on error
		.pipe(plumber({
			handleError: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		// Load template pages json data
		.pipe(data(function (file) {
			return JSON.parse(fs.readFileSync(paths.source + paths.data + path.basename(file.path) + '.json'));
		}))
		// Load default json data
		// .pipe(data(function () {
		// 	return JSON.parse(fs.readFileSync(paths.data + path.basename('default.twig.json')));
		// }))
		// .on('error', function (err) {
		// 	process.stderr.write(err.message + '\n');
		// 	this.emit('end');
		// })
		.pipe(twig())
		.on('error', function (err) {
			process.stderr.write(err.message + '\n');
			this.emit('end');
		})
		.pipe(gulp.dest(paths.output + '/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// gulp clean
gulp.task('clean', del.bind(null, [paths.output + '/']));

// gulp serve
gulp.task('serve', gulp.series('clean', 'styles', 'scripts', 'assets', 'twig', () => {

	browserSync.init({
		notify: false,
		port: 3000,
		browser: "google chrome",
		server: {
			baseDir: [paths.output + '/'],
		},
	});

	gulp.watch(`${paths.source + paths.scss}**/*.scss`, gulp.series('styles'));
	gulp.watch(`${paths.source + paths.js}**/*.js`, gulp.series('scripts'));
	gulp.watch([`${paths.source + paths.template}**/*.twig`, `${paths.source + paths.data}*.twig.json`], { cwd: './' }, gulp.series('twig'));
	gulp.watch(`${paths.source + paths.assets}**/*`).on('change', reload);
}))

// gulp build
gulp.task('build', gulp.series('clean', 'styles', 'assets', 'scripts', 'twig'))

// gulp default
gulp.task('default', gulp.series('serve'));