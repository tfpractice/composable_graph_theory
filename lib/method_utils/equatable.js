let equate = (eqFunc) => (eqState) => (arg) => eqFunc(eqState)(arg);

let isEquivalent = (eqFunc) => (eqState) => (arg) => eqFunc(eqState)(arg);
let notEquivalent = (eqFunc) => (eqState) => (arg) => !eqFunc(eqState)(arg);
let objEquiv = (obj) => obj.isEquivalent;
let objNotEquiv = (obj) => obj.notEquivalent;

let operators = {
    isEquivalent: objEquiv,
    notEquivalent: objNotEquiv

};
let methods = (eqFunc) => (eqState) => ({
    isEquivalent: isEquivalent(eqFunc)(eqState),
    notEquivalent: notEquivalent(eqFunc)(eqState)
});

let equatable = (eqFunc) =>
    Object.assign(methods(eqFunc), operators);

module.exports = equatable;