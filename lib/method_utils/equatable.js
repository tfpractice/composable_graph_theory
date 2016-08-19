let equatable = (eqFunc) => (host) => ({
    isEquivalent: (arg) => eqFunc(host)(arg)
});

module.exports = equatable;