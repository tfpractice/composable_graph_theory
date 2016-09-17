let type = (tFunc) => (tState) => tFunc(tState);
let getType = (tObj) => tObj.type();
let sameType = (tObj) => tObj.sameType;

let operators = {
    getType: getType,
    sameType: sameType,
};

let methods = (tFunc) => (tState) => ({
    type: () => type(tFunc)(tState),
    sameType: (arg) => tFunc(tState) === getType(arg),
});

let typify = (tFunc) => Object.assign(methods(tFunc), operators);

let compareType = (tFunc) => (s0) => (s1) =>
    tFunc(s0) === tFunc(s1);

let sOps = (tFunc) => ({
    getType: type(tFunc),
    sameType: compareType(tFunc),
});

let sMethods = (tFunc) => (s0) => ({
    isTypeable: () => true,
    type: () => type(tFunc)(s0),
    sameType: compareType(tFunc)(s0),
});

let sTypeable = (tFunc) =>
    Object.assign(sMethods(tFunc), sOps(tFunc));

// module.exports = typify;/
module.exports = sTypeable;
module.exports.getType = getType;
module.exports.sameType = sameType;
module.exports.stateOps = sTypeable;
