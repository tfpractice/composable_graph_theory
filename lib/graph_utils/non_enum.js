let redefine = (obj) => (...propKeys) =>
    propKeys.reduce((obj, k) =>
        Object.defineProperty(obj, k, {
            enumerable: false
        }), obj);

module.exports = redefine;