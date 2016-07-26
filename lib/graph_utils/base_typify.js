module.exports = (accessor) => (obj) => ({
    baseType: () => accessor(obj)
});