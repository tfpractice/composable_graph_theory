let type = (tFunc) => (tState) => tFunc(tState);
let getType = (tObj) => tObj.type();
let sameType = (tObj) => tObj.sameType;

let operators = {
    getType: getType,
    sameType: sameType
};
let methods = (tFunc) => (tState) => ({
    type: () => type(tFunc)(tState),
    sameType: (arg) => tFunc(tState) === getType(arg)
});

let typify = (tFunc) => Object.assign(methods(tFunc), operators)

module.exports = typify;
module.exports.getType = getType;
module.exports.sameType = sameType;