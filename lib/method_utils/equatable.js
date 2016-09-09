let equate = (eqFunc) => (eqState) => (arg) => eqFunc(eqState)(arg);

// let different =
let isEquivalent = (eqFunc) => (eqState) => (arg) => eqFunc(eqState)(arg);
let notEquivalent = (eqFunc) => (eqState) => (arg) => !eqFunc(eqState)(arg);
let objEquiv = (obj) => obj.isEquivalent;
let objNotEquiv = (obj) => obj.notEquivalent;

let operators = {
    isEquivalent: objEquiv,
    notEquivalent: objNotEquiv
    // isEquivalent: isEquivalent(eqFunc)
};
let methods = (eqFunc) => (eqState) => ({
    isEquivalent: isEquivalent(eqFunc)(eqState),
    notEquivalent: notEquivalent(eqFunc)(eqState)
});

let equatable = (eqFunc) =>
    Object.assign(methods(eqFunc), operators);

// let equals = (eqFunc) => (context) => (arg) => eqFunc(context)(arg);
// let isEquivalent = (eqFunc) => (eqState) => (arg) => ;
// let equatable = (eqFunc) => (host) => ({
//     isEquatable: true,
//     isEquivalent: (arg) => eqFunc(host)(arg)
// });

module.exports = equatable;