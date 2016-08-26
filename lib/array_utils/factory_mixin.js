let wrappers = require('./native_override');
let identity = (x) => x;

let factoryMixin = (spawn = identity) => {
    let unaryFuncs = {
        concat: wrappers.concatOverride(spawn),
        slice: wrappers.sliceOverride(spawn),
        splice: wrappers.spliceOverride(spawn),
        filter: wrappers.filterOverride(spawn),
    };

    curryFuncs = (context = []) =>
        Object.keys(unaryFuncs).reduce(
            (curried, fName) => Object.assign(curried, {
                [fName]: unaryFuncs[fName](context)
            }), {});

    return Object.assign(curryFuncs, unaryFuncs);

}

module.exports = factoryMixin;