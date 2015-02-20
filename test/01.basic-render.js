var ASSERT = require('assert');
var EXPRESS = require('express');
var EXPRESSBEM = require('express-bem');
var EXPRESSBEMTREE = require('..');

describe('basic renders', function () {
    var bemOpts = {
        root: 'test/data/views',
        path: 'pages'
    };
    var data = {
        block: 'page',
        title: 'Testing testing',
        index: true,
        contacts: []
    };

    it('should generate html page with bemtree', function (done) {
        var app = EXPRESS();
        var bem = EXPRESSBEM(bemOpts).bindTo(app);
        bem.usePlugin(EXPRESSBEMTREE, {source: '_?.bemtree.js'});

        app.render('custom', data, function (err, bemjson) {
            ASSERT.ifError(err);
            ASSERT(JSON.stringify(bemjson).indexOf(data.title) !== -1);
            done();
        });
    });

});
