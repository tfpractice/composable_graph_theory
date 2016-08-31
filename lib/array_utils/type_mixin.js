let kestrel = require('../func_utils/combinators').kestrel;
let typeMixin = (tFunc) => {
    let unaryFuncs = {
        type: kestrel(tFunc())
    };

    curryFuncs = (context = []) => unaryFuncs;
    return Object.assign(curryFuncs, unaryFuncs);

};

let typeMaker = (tFunc) => (tState) => tFunc(tState);
let getType = (tObj) => tObj.type && tObj.type();

let typify = (tFunc) => (tState) => ({
    type: () => type(tFunc)(tState),
    sameType: (tArg) => type(tFunc)(tState) === getType(tArg)

});

module.exports = typeMixin;
// module.exports.getType = getType;