var U = require('express-bem/lib/util');

module.exports = function (opts) {
    bemtree.extension = '.bemtree.js';
    return bemtree;

    /**
     * bemtree.js express view adapter
     * @api
     * @returns {function name: String, options: Object, cb: Function}
     */
    function bemtree(name, options, cb) {
        // create data object to pass to bemtree
        var data = options;

        name = U.fulfillName(name, opts.ext || this.ext, opts.source);

        // Converts raw data to view-oriented (bemjson) via bemtree
        U.exec({
            file: name,
            ctx: data.global || null,
            force: opts.force || opts.forceExec || options.forceExec,
            forceLoad: opts.force || opts.forceLoad || options.forceLoad
        }, function (err, module) {
            if (err || !module || !module.BEMTREE || !module.BEMTREE.apply) {
                cb(err || new Error('Unknown file format'));
                return;
            }

            try {
                module.BEMTREE.apply(data).then(function (bemjson) {
                    process.nextTick(function () {
                        cb(null, bemjson);
                    });
                })
                .fail(cb);
            } catch (e) {
                cb(e);
            }
        });
    }
};
