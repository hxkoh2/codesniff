var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './components',
    context: __dirname + '/src',
    target: 'web',
    debug: true,
    watch: false,
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader' },
            { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM' },
        ],
    }
};
