const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config.dev');
const express = require('express');

const devServer = function(app) {
    const compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler));

    app.use(express.static('client'));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../client/index.html'));
    });
}

module.exports = devServer;
