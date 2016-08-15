let composeMixin = require('./compose_mixin');
let baseMixin = require('./base_mixin');
let typeMixin = require('./typed_mixin');
let nonEnum = require('../non_enum');
let setMixin = require('./set_mixin');
// let basedArray = (BaseClass) => (sArr = []) => Object.assign(Array.from(sArr), baseMixin(BaseClass));
let baseThunk = (BaseClass) => (sArr = []) => baseMixin(BaseClass);
let modMap = (...mods) => (iFunc) => mods.map(m => m(iFunc));
let compositeMix = (mmap) => (sArr) => composeMixin(...mmap)(sArr);
let compositeMix2 = (...mods) => (iFunc) => (sArr) => composeMixin(...modMap(...mods)(iFunc))(sArr);
let composite = (sArr) => composeMixin(...modMap(...mixins)(instance))(sArr);

let arrayOf2 = (BaseClass) => {
    let bmx = () => baseThunk(BaseClass);
    let addMixins = (...mixins) => {
        // console.log("mixins", mixins);
        let composite, compKeys, construct, instance;
        composite = (sArr) => composeMixin(...modMap(bmx, ...mixins)(instance))(sArr);
        construct = (sArr = []) => Object.assign(Array.from(sArr), baseThunk(sArr), composite(sArr));
        compKeys = (sArr) => Object.keys(composite(sArr));
        instance = (sArr) => {
            // console.log(compKeys(sArr));
            return nonEnum(construct(sArr))(...compKeys(sArr))
        }
        return {
            instance: instance
        };
    };
    return addMixins
};
module.exports = arrayOf2;