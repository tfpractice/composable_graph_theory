function concatProxy(context) {
    return function(...args) {
        return Array.prototype.concat.apply(context, args);
    }
}

module.exports = concatProxy;