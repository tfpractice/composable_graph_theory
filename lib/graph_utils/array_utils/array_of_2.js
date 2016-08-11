let composeMixin = require('./compose_mixin');
let baseMixin = require('./base_mixin');
let typeMixin = require('./typed_mixin');
let nonEnum = require('../non_enum');

let basedArray = (BaseClass) => (sArr) => Object.assign(Array.from(sArr), baseMixin(BaseClass));
let baseThunk = (BaseClass) => (sArr = []) => baseMixin(BaseClass);


let arrayOf2 = (BaseClass) => {
    let mods, addMixin, compVal, compKeys, construct, instance, vendor;
    let bInstance = (sArr = []) => basedArray(sArr);
    let bMods = [baseThunk(BaseClass), typeMixin(bInstance)];
    let composite = composeMixin(...bMods);
    compVal = (sArr) => composite(sArr);
    compKeys = (sArr) => Object.keys(compVal(sArr));
    construct = (sArr = []) => {
        return Object.assign(Array.from(sArr), compVal(sArr))
    };
    instance = (sArr) => {
        return nonEnum(construct(sArr))(compKeys(sArr))
    }
    return {
        instance: instance
    };
};
module.exports = arrayOf2;