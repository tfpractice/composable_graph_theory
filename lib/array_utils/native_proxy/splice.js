function spliceProxy(context) {
    return function(...args) {
        return Array.prototype.splice.apply(context, args);
    }
}

module.exports = spliceProxy;