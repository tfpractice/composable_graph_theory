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

let factoryMixin = (spawn = identity) => (sArr = []) => ({
    concat: wrappers.concatOverride(spawn)(sArr),
    slice: wrappers.sliceOverride(spawn)(sArr),
    splice: wrappers.spliceOverride(spawn)(sArr),
    filter: wrappers.filterOverride(spawn)(sArr),
})

module.exports = factoryMixin;