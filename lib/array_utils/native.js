function pushProxy(context) {
    return function(...args) {
        Array.prototype.push.apply(context, args);
        return context;
    }
}

module.exports.pushProxy = pushProxy;