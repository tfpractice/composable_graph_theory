let isEquivalent = (eqFunc) => (eqState) => (arg) => eqFunc(eqState)(arg);
let notEquivalent = (eqFunc) => (eqState) => (arg) => !eqFunc(eqState)(arg);
let objEquiv = (obj) => obj.isEquivalent;
let objNotEquiv = (obj) => obj.notEquivalent;

let operators = {
    isEquivalent: objEquiv,
    notEquivalent: objNotEquiv,

};
let methods = (eqFunc) => (eqState) => ({
    isEquivalent: isEquivalent(eqFunc)(eqState),
    notEquivalent: notEquivalent(eqFunc)(eqState),
});

let equatable = (eqFunc) =>
    Object.assign(methods(eqFunc), operators);

let stateEquivalence = (eqFunc) => (s0) => (s1) =>
    s0 === s1 || eqFunc(s0)(s1);

let stateXEquivalence = (eqFunc) => (s0) => (s1) =>
    s0 !== s1 && !eqFunc(s0)(s1);

let sOps = (eqFunc) => ({
    isEquivalent: stateEquivalence(eqFunc),
    notEquivalent: stateXEquivalence(eqFunc),
});

let sMethods = (eqFunc) => (s0) => ({
    isEquivalent: stateEquivalence(eqFunc)(s0),
    notEquivalent: stateXEquivalence(eqFunc)(s0),
});

let sEquatable = (eqFunc) =>
    Object.assign(sMethods(eqFunc), sOps(eqFunc));

module.exports = equatable;
module.exports.stateOps = sEquatable;
