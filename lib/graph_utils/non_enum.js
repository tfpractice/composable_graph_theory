let redefine = (obj) => (propKey) => Object.defineProperty(obj, propKey, {
    enumerable: false
});

module.exports = redefine;