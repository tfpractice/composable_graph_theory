let wrappers = require('./native_override');
let identity = (x) => x;

let applyOverride = (spawn) => (wKey) => wrappers[wKey](spawn);
let mapWrappers = (spawn = identity) =>
    Object.keys(wrappers).map(applyOverride(spawn));

let composedOverides = (spawn) => (sArr) =>
    Object.keys(wrappers).reduce(
        (meths, wKey) => Object.assign(meths, {
            wKey: wrappers[wKey](spawn)
        }), {});

// console.log(mapWrappers(identity));
// console.log(composedOverides(identity)([1, 2, 3]));
let factoryMixin = (spawn = identity) => (sArr = []) => ({
    concat: wrappers.concatOverride(spawn),
    slice: wrappers.sliceOverride(spawn),
    splice: wrappers.spliceOverride(spawn),
    filter: wrappers.filterOverride(spawn),
})

module.exports = factoryMixin;