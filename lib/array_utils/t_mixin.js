let kestrel = require('../func_utils/combinators').kestrel;
let tMixin = (tFunc) => {
    let unaryFuncs = {
        type: kestrel(tFunc())
    };

    curryFuncs = (context = []) => unaryFuncs;
    return Object.assign(curryFuncs, unaryFuncs);

}

module.exports = tMixin;