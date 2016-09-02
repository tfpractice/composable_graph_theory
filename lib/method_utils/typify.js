let FUtils = require('../func_utils');
let kestrel = FUtils.combinators.kestrel;
let comparitor = FUtils.comparitor;
let type = (tFunc) => (tState) => tFunc(tState);
let getType = (tObj) => tObj.type();
let sameType = comparitor(getType);

let operators = (tFunc) => ({
    getType: getType,
    sameType: sameType
});
let methods = (tFunc) => (tState) => ({
    type: () => tFunc(tState),
    sameType: (arg) => tFunc(tState) === getType(arg)
});

let typify = (tFunc) => Object.assign(methods(tFunc), operators(tFunc))

module.exports = typify;
module.exports.getType = getType;
module.exports.sameType = sameType;