var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['app', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            title: 'FE-Product'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            moment:'moment'
        })
    ]
};
