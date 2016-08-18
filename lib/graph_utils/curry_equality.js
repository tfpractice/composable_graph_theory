const mixin = require('./mixin');

module.exports = (argAccessor, hostAccessor = argAccessor) => ({
    compareToHost: (hostObj) => ({
        isEquivalent: (argObj) => {
            return hostAccessor(hostObj) == argAccessor(argObj)
        }
    })
});