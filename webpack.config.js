/**
 * Webpack configuration.
 *
 * Taken from Redux's 'Real World' example's _webpack.config.js_ file.
 */

'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: [ 'babel' ],
            exclude: /node_modules/,
            include: path.join(__dirname, 'src'),
        }]
    },
};
