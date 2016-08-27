let kestrel = require('../func_utils/combinators').kestrel;
let tMixin = (tFunc) => {
    let unaryFuncs = {
        type: kestrel(tFunc())
        // type:()
    };

    curryFuncs = (context = []) => unaryFuncs;
    return Object.assign(curryFuncs, unaryFuncs);

}

module.exports = tMixin;