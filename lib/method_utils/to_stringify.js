let toStringify = (sFunc) => (state) => ({
    toString: () => sFunc(state),
});
module.exports = toStringify;