module.exports = (accessor) => (obj) => ({
    type: () => accessor(obj)
});