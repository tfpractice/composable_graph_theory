let equatable = (eqFunc) => (host) => ({
    isEquatable: true,
    isEquivalent: (arg) => eqFunc(host)(arg)
});

module.exports = equatable;