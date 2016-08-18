let weighable = (wFunc) => (state) => ({
    weight: () => wFunc(state),
    // hasSameWeight: (arg) => wFunc(state) === arg.weight();
});
module.exports = weighable;