const WebpackWriter = require('broccoli-webpack')
const BroccoliSass = require('broccoli-sass');
const babel = require('broccoli-babel-transpiler');
const funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

const lib = babel('src/js', {
	moduleIds: true,
	modules: 'amd'
});


const appCss = new BroccoliSass(['src/sass'], 'app.scss', 'app.css');

const indexHtml = funnel('src', {
	files: ['index.html']
});

const js_bundler = new WebpackWriter(lib, {
	entry: './app',
	output: {filename: 'app.bundle.js'},
	devtool: 'source-map',
	module: {
		preLoaders: [{
	    test: /\.js$/,
		  loader: "source-map-loader"
		}]
	}
});

module.exports = mergeTrees([js_bundler, appCss, indexHtml]);
