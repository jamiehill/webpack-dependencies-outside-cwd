const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const main = process.cwd();
const root = path.resolve(main, '..');
const babelSettings = {
    extends: main+'/.babelrc'
}

console.log("Babel: "+JSON.stringify(babelSettings));

module.exports = {
    entry: main+'/src/App.js',
    debug: false,
    devtool: false,
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: [main+'/node_modules']
    },
    output: {
        path: `${main}/dist`,
        filename: `bundle.js`
    },
    module: {
        noParse: [/moment.js/, /react/, /react\-dom/],
        loaders: [{
            test: /\.js?$/,
            loader: 'babel?'+JSON.stringify(babelSettings),
            include: [main+'/src', root+'/sibling']
        }]
    },
    // resolve: {
        // root: main+'/node_modules',
        // modulesDirectories: [main+'/node_modules']
    // },
    plugins: [
        // new webpack.ContextReplacementPlugin(/.*$/, /a^/),
        // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle:   true,
            minimize: true,
            comments: false,
            'screw-ie8': true,
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            "React": "react",
            "ReactDOM": "react-dom"
        }),
        new HtmlWebpackPlugin({
            template: main+'/src/index.html'
        })
    ]
};