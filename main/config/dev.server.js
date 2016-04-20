const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const settings = {
    publicPath: '',
    quiet: false,
    noInfo: false,
    inline: true,
    lazy: false,
    colors: true,
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
}

const server = new WebpackDevServer(webpack(config), settings);
server.listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('http://localhost:3000');
});
