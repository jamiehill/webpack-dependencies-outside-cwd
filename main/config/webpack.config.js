const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const main = process.cwd();
const root = path.resolve(main, '..');
const babelSettings = {
    extends: main+'/.babelrc'
}

module.exports = {
    entry: main+'/src/App.js',
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: `${main}/dist`,
        filename: `bundle.js`
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel?'+JSON.stringify(babelSettings),
            include: [main+'/src', root+'/sibling']
        }]
    },
    resolve: {
        root: main+'/node_modules',
        modulesDirectories: [main+'/node_modules']
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
            "ReactDOM": "react-dom"
        }),
        new HtmlWebpackPlugin({
            template: main+'/src/index.html'
        })
    ]
};