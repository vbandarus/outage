const path = require('path')
var webpack = require("webpack");

const BUILD_DIR = path.resolve(__dirname, 'dist')
const ASSETS_DIR = path.resolve(__dirname, 'dist/assets')
const APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
	entry: path.resolve(APP_DIR, 'index.js'),
	output: {
		path: ASSETS_DIR,
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: BUILD_DIR,
		port: 3000
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: ["babel-loader"]
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			},
      {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/octet-stream'
            }
          }
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader'
        },
        {
          test: /\.png$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        },
        {
          test: /\.jpg$/,
          loader: 'file-loader'
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'mimetype=image/svg+xml'
            }
          }
        }
		]
	}
}







