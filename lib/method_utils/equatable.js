let equals = (eqFunc) => (context) => (arg) => eqFunc(context)(arg);
// let isEquivalent = (eqFunc) => (eqState) => (arg) => ;
let equatable = (eqFunc) => (host) => ({
    isEquatable: true,
    isEquivalent: (arg) => eqFunc(host)(arg)
});

module.exports = equatable;