function push(context) {
    return function(...args) {
        Array.prototype.push.apply(context, args);
        return context;
    }
}

module.exports.push = push;