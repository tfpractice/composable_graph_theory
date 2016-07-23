module.exports = (accessor) => (state) => ({
    data: () => accessor(state)
});