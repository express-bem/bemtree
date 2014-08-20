var ASSERT = require('assert');
var EXPRESS = require('express');
var EXPRESSBEM = require('express-bem');
var EXPRESSBEMTREE = require('..');

describe('basic renders', function () {
    var bemOpts = {
        root: 'test/data/views',
        path: 'pages'
    };
    var options = {
        block: 'page',
        title: 'Testing testing',
        index: true,
        contacts: []
    };

    it('should generate html page with bemhtml', function (done) {
        var app = EXPRESS();
        var bem = EXPRESSBEM(bemOpts).bindTo(app);
        bem.usePlugin(EXPRESSBEMTREE);

        app.render('custom', options, function (err, bemjson) {
            ASSERT(JSON.stringify(bemjson).indexOf(options.title) !== -1);
            done();
        });
    });

});
