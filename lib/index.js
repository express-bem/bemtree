module.exports = function (opts) {
    return {
        engines: [require('./engines/bemtree')(opts)]
    };
};
