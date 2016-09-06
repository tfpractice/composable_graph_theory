// // let FUtils = require('../func_utils');
// // let comparitor = FUtils.comparitor;
// let type = (tFunc) => (tState) => tFunc(tState);
// let getType = (tObj) => tObj.type();
//  // (context) => (arg) => getLabel(context) === getLabel(arg);
// // let sameType = comparitor(getType);

// let operators = (tFunc) => ({
//     getType: getType,
//     sameType: sameType
// });
// let methods = (tFunc) => (tState) => ({
//     type: () => tFunc(tState),
//     sameType: (arg) => tFunc(tState) === getType(arg)
// });

// let typify = (tFunc) => Object.assign(methods(tFunc), operators(tFunc))

// module.exports = typify;
// module.exports.getType = getType;
// module.exports.sameType = sameType;

module.exports = (argAccessor) => (compFunc) => ({
    isValid: (arg) => argAccessor(arg) === compFunc()
});