var Equatable = {
    isEquatable: true,
    isEquivalent(altObj) {
        throw ('abstract method, must be implemented');
    }
}

function absEq(altObj) {
    throw ('abstract method, must be implemented');
}

let Equalize = (obj, eqFun) => ({
    isEquatable: true,
    isEquivalent: eqFun || absEq
});
let EqualizeState = (state) => ({
    isEquatable: true,
    isEquivalent: (argObj) => argObj === state
});

let eqCurry =
    obj =>
    eqFun => ({
        isEquatable: true,
        isEquivalent: eqFun || absEq
    });

module.exports = Equatable;
module.exports.Equalize = Equalize;
module.exports.EqualizeState = EqualizeState;
module.exports.eqCurry = eqCurry;