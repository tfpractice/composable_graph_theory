let equate = (eqFunc) => (eqState) => eqFunc(eqState);
let isEquivalent = (eqFunc) => (context) => (arg) => eqFunc(context)(arg);

let operators = (eqFunc) => ({
    isEquivalent: isEquivalent(eqFunc)
});
let methods = (eqFunc) => (eqState) => ({
    isEquivalent: isEquivalent(eqFunc)(eqState)
});

let equatable = (eqFunc) =>
    Object.assign(methods(eqFunc), operators(eqFunc));

// let equals = (eqFunc) => (context) => (arg) => eqFunc(context)(arg);
// let isEquivalent = (eqFunc) => (eqState) => (arg) => ;
// let equatable = (eqFunc) => (host) => ({
//     isEquatable: true,
//     isEquivalent: (arg) => eqFunc(host)(arg)
// });

module.exports = equatable;