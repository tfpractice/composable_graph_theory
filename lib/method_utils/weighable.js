let weighable = (wFunc) => (state) => ({
    weight: () => wFunc(state)
});
module.exports = weighable;