/**
 * Created by tiberiu on 27/07/16.
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var path = require('path');
var environment = process.env.NODE_ENV;

const PATHS = {
	root: path.join(__dirname + '.'),
	build: path.join(__dirname + './build'),
	src: path.join(__dirname + '/src')
}

module.exports = {
	devtool: 'eval-source-map',
	entry: path.join(PATHS.src, 'app.js'),
	output: {
		path: PATHS.build,
		publicPath: 'http://localhost:8081/',
		filename: 'bundle.js',
		pathinfo: true
	},
	devServer: {
		contentBase: path.join(PATHS.src, './assets'),
		stats: 'minimal'
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.scss$|\.css$/,
			loaders: [
				{
					loader: 'style-loader',
					options: {
						sourceMap: true
					}
				}, {
					loader: 'css-loader',
					options: {
						sourceMap: true
					}
				}, {
					loader: 'postcss-loader',
					options: {
						sourceMap: true,
						plugins: [precss, autoprefixer]
					}
				}, {
					loader: 'sass-loader',
					options: {
						sourceMap: true
					}
				}
			]
		}, {
			test: /\.(jpe?g|png|gif|svg)$/,
			loader: 'url-loader?limit=10000&name=assets/images/app/[name].[ext]?[hash]'
		}, {
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]'
		}, {
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]'
		}, {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]'
		}, {
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file-loader?name=assets/fonts/[name].[ext]'
		}, {
			test: /\.html$/,
			loader: 'raw-loader'
		}]
	},

	plugins: [
		// new HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.LoaderOptionsPlugin({
			test: /\.scss$|\.css$/,
			options: {
				postcss: function () {
					return [precss, autoprefixer]
				},
				context: PATHS.root,
			},
		}),
		new HtmlWebpackPlugin({
			title: 'Suspense',
			inject: true,
			template: path.join(PATHS.src, 'index.html')
		}),
		new CopyWebpackPlugin([{
			from: path.join(PATHS.src, 'assets/data'),
			to: path.join(PATHS.build, 'assets/data')
		}]),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(environment)
			}
		})
	]
};
