const mixin = require('./mixin');

module.exports = (accessor) => ({
    compareToHost: (hostObj) => ({
        isEquivalent: (argObj) => {
            return accessor(hostObj) == accessor(argObj)
        }
    })
});



// module.exports = (accessor) => ({
//     compareToHost: (hostObj = {}) => mixin(hostObj)({
//         isEquivalent: (argObj) => accessor(hostObj) === accessor(argObj)
//     })
// });