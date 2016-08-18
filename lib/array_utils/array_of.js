let GUtils = require('../graph_utils');
let nonEnum = GUtils.nonEnum;
let composeMixin = require('./compose_mixin');
let baseMixin = require('./base_mixin');
let typeMixin = require('./typed_mixin');
let setMixin = require('./set_mixin');

// console.log("***************");
// console.log("children", module.children);
// console.log("parent", this.parent);

let baseThunk = (BaseClass) => (sArr = []) => baseMixin(BaseClass);
let modMap = (...mods) => (iFunc) => mods.map(m => m(iFunc));


let arrayOf = (BaseClass) => {
    let bmx = () => baseThunk(BaseClass);
    let addMixins = (...mixins) => {
        let composite, compKeys, construct, instance;
        composite = (sArr) => composeMixin(...modMap(bmx, ...mixins)(instance))(sArr);
        construct = (sArr = []) => Object.assign(Array.from(sArr), baseThunk(sArr), composite(sArr));
        compKeys = (sArr) => Object.keys(composite(sArr));
        instance = (sArr) => {
            return nonEnum(construct(sArr))(...compKeys(sArr))
        }
        return {
            instance: instance
        };
    };
    return addMixins
};
module.exports = arrayOf;