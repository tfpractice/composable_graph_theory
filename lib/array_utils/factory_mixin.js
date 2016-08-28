let wrappers = require('./native_override');
let kestrel = require('../func_utils').combinators.kestrel;
let clearFunc = require('./clear');
let identity = (x) => x;

let factoryMixin = (spawn = identity) => {
    let clear = (spawn) => (sArr = []) => () => spawn(clearFunc(sArr))
    let copy = (spawn) => (sArr = []) => () => spawn(sArr.slice(0));

    let unaryFuncs = {
        concat: wrappers.concatOverride(spawn),
        slice: wrappers.sliceOverride(spawn),
        splice: wrappers.spliceOverride(spawn),
        filter: wrappers.filterOverride(spawn),
        clear: clear(spawn),

    };
    let mutationFuncs = {
        clear: (arr = []) => clear(spawn)(arr)(),
        copy: (arr = []) => copy(spawn)(arr)(),
    }
    let isEmpty = (sArr = []) => () => sArr.length === 0;

    curryFuncs = (context = []) =>
        Object.keys(unaryFuncs)
        .reduce(
            (curried, fName) => Object.assign(curried, {
                [fName]: unaryFuncs[fName](context)
            }), {});

    return Object.assign(curryFuncs, unaryFuncs, mutationFuncs);

}

module.exports = factoryMixin;