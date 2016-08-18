module.exports = (accessor) => (baseObj) => ({
    baseType: () => accessor(baseObj)
});