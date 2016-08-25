function filterProxy(context) {
    return function(...args) {
        return Array.prototype.filter.apply(context, args);
    }
}

module.exports = filterProxy;