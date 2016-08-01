const mixin = require('./mixin');

module.exports = (argAccessor, hostAccessor = argAccessor) => ({
    compareToHost: (hostObj) => ({
        isEquivalent: (argObj) => {
            return hostAccessor(hostObj) == argAccessor(argObj)
        }
    })
});



// module.exports = (accessor) => ({
//     compareToHost: (hostObj = {}) => mixin(hostObj)({
//         isEquivalent: (argObj) => accessor(hostObj) === accessor(argObj)
//     })
// });