function sliceProxy(context) {
    return function(...args) {
        return Array.prototype.slice.apply(context, args);
    }
}

module.exports = sliceProxy;