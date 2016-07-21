var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const GLOBALS = {
	'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	entry: './client/index',
	target: 'web',
	output: {
		path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin(GLOBALS),
		new ExtractTextPlugin('styles.css'),
		new ExtractTextPlugin('styles.less'),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{test: /\.js$/, include: path.join(__dirname, 'client'), loaders: ['babel']},
			{test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
			{test: /(\.less)$/, loader: ExtractTextPlugin.extract(["css?sourceMap", "less?sourceMap"])},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
			{test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
			{test: /.*\.(gif|png|jpe?g|svg)$/i,loader: "url-loader?limit=8192"},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
		]
	}
};
