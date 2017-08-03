/**
 * UpGulp - Gulp tasks runtime configuration script
 *
 * @package     UpGulp
 * @since       1.0.2
 * @author      hellofromTonya
 * @link        https://KnowTheCode.io
 * @license     GNU-2.0+
 */

module.exports = function ( moduleRoot ) {

	/************************************
	 * Module Settings
	 *
	 * ACTION:
	 * You need to change these settings
	 * to fit your project.
	 ***********************************/

	var moduleSettings = {
		package: 'kickoff',
		domain: 'kickoff.dev',
		// If this is for a theme, set to `true`; else, set to `false`.
		isTheme: false,
		i18n: {
			textdomain: 'kickoff',
			languageFilename: 'kickoff.pot',
			bugReport: 'https://kickoff.io',
			lastTranslator: 'Know the Code <hello@knowthecode.io>',
			team: 'Team <hello@knowthecode.io>'
		}
	};


	/************************************
	 * Folder Structure
	 ***********************************/

	/**
	 * Assets folder - path to the location of all the assets,
	 * i.e. images, Sass, scripts, styles, etc.
	 *
	 * @type {String}
	 */
	var assetsDir = moduleRoot + 'assets/';

	/**
	 * gulp folder - path to where the gulp utils and
	 * tasks are located.
	 *
	 * @type {String}
	 */
	var gulpDir = assetsDir + 'gulp/';

	/**
	 * Distribution folder - path to where the final build, distribution
	 * files will be located.
	 *
	 * @type {String}
	 */
	var distDir = assetsDir + 'dist/';

	/**
	 * Assets folder - path to where the raw files are located.
	 *
	 * @type {Object}
	 */
	var assetDirs = {
		css: assetsDir + 'css/',
		images: assetsDir + 'images/',
		sass: assetsDir + 'sass/',
		scripts: assetsDir + 'scripts/'
	}

	/**
	 * Paths
	 *
	 * @type {Object}
	 */
	var paths = {
		css: ['./*.css', '!*.min.css'],
		images: [ assetDirs.images + '*', '!' + assetDirs.images + '*.svg' ],
		sass: assetDirs.sass + '**/*.scss',
		concatScripts: assetDirs.scripts + '*.js',
		scripts: [ assetDirs.scripts + '*.js', '!' + assetDirs.scripts + '*.min.js' ],
	};

	/**
	 * Distribution folder - path to where the final build, distribution
	 * files will be located.
	 *
	 * @type {Object}
	 */
	var distDirs = {
		root: moduleRoot,
		css: distDir + 'css/',
		finalCSS: moduleSettings.isTheme ? moduleRoot : distDir + 'css/',
		scripts: distDir + 'scripts/'
	};

	var distFilenames = {
		concatScripts: 'jquery.genbase.js'
	};

	/************************************
	 * Theme Settings
	 ***********************************/

	var stylesSettings = {
		clean: {
			src : [ distDirs.css + "*.*", moduleRoot + "style.css", moduleRoot + "style.min.css" ]
		},
		postcss: {
			src: [ assetDirs.sass + '*.scss' ],
			dest: distDirs.css,
			autoprefixer: {
				browsers: [
					'last 2 versions',
					'ie 9',
					'ios 6',
					'android 4'
				]
			}
		},
		cssnano: {
			src: distDirs.css + "*.css",
			dest: distDirs.css,
		},
		cssfinalize: {
			// Fix for Issue #1 - v1.0.3 11.July.2017
			run: moduleSettings.isTheme ? true : false,
			src: [ distDirs.css + "style.css", distDirs.css + "style.min.css" ],
			dest: distDirs.finalCSS,
		}
	};

	var scriptsSettings = {
		clean: {
			src : [ distDirs.scripts + "*.*" ]
		},
		concat: {
			src: paths.concatScripts,
			dest: distDirs.scripts,
			concatSrc: distFilenames.concatScripts,
		},
		uglify: {
			src: distDirs.scripts + '*.js',
			dest: distDirs.scripts,
		}
	};

	var imageminSettings = {
		src: paths.images,
		dest: assetDirs.images
	}

	var watchSettings = {
		browserSync:	{
			open: false,             // Open project in a new tab?
			injectChanges: true,     // Auto inject changes instead of full reload
			proxy: moduleSettings.domain,  // Use http://domainname.tld:3000 to use BrowserSync
			watchOptions: {
				debounceDelay: 1000  // Wait 1 second before injecting
			}
		}
	}


	/************************************
	 * Do not touch below this line.
	 *
	 * The following code assembles up the
	 * configuration object that is returned
	 * to gulpfile.js.
	 ***********************************/

	return {
		moduleRoot: moduleRoot,
		assetsDir: assetsDir,
		assetDirs: assetDirs,
		dist: distDirs,
		distDir: distDir,
		gulpDir: gulpDir,
		paths: paths,

		images: imageminSettings,
		scripts: scriptsSettings,
		styles: stylesSettings,
		watch: watchSettings
	};
};