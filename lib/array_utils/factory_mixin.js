let wrappers = require('./native_override');
let identity = (x) => x;

let applyOverride = (spawn) => (wKey) => wrappers[wKey](spawn);
let mapWrappers = (spawn = identity) =>
    Object.keys(wrappers).map(applyOverride(spawn));

let composedOverides = (spawn) => (sArr) =>
    Object.keys(wrappers)
    .reduce((meths, wKey) => {
        meths[wKey] = wrappers[wKey](spawn);
        return meths
    }, {});

// console.log(mapWrappers(identity));
// console.log(composedOverides(identity)([1, 2, 3]));
let factoryMixin = (spawn = identity) => (sArr = []) => {

    return {
        concat: wrappers.concatOverride(spawn),
        slice: wrappers.sliceOverride(spawn),
        splice: wrappers.spliceOverride(spawn),
        filter: wrappers.filterOverride(spawn),
    }
}
module.exports = factoryMixin;