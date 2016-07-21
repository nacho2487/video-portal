const path = require('path');
const compression = require('compression');
const express = require('express');

const distServer = function(app) {
    //compression all the files on client
    app.use(compression());
    // serve client side code.
    app.use(express.static('dist'));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, './dist/index.html'));
    });
}

module.exports = distServer;
