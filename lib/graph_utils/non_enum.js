let redefine = (obj) => (...propKeys) => propKeys.forEach(k => Object.defineProperty(obj, k, {
    enumerable: false
}));

module.exports = redefine;