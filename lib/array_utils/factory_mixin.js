let wrappers = require('./native_override');
let identity = (x) => x;

// let applyOverride = (spawn) => (wKey) => wrappers[wKey](spawn);

// let mapWrappers = (spawn = identity) =>
//     Object.keys(wrappers).map(applyOverride(spawn));

// let composedOverides = (spawn) => (sArr) =>
//     Object.keys(wrappers).reduce(
//         (meths, wKey) => Object.assign(meths, {
//             wKey: wrappers[wKey](spawn)
//         }), {});

let factoryMixin = (spawn = identity) => {
    let funcs = {
        concat: wrappers.concatOverride(spawn),
        slice: wrappers.sliceOverride(spawn),
        splice: wrappers.spliceOverride(spawn),
        filter: wrappers.filterOverride(spawn),
    };
    curryFuncs = (context = []) => Object.keys(funcs).reduce(
        (curried, fName) => Object.assign(curried, {
            [fName]: funcs[fName](context)
        }), {});

    return Object.assign(curryFuncs, funcs);

    // return (sArr = []) => ({
    //     concat: wrappers.concatOverride(spawn)(sArr),
    //     slice: wrappers.sliceOverride(spawn)(sArr),
    //     splice: wrappers.spliceOverride(spawn)(sArr),
    //     filter: wrappers.filterOverride(spawn)(sArr),
    // })
}

module.exports = factoryMixin;