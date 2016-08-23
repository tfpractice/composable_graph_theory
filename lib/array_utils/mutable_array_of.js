let GUtils = require('../graph_utils');
let nonEnum = GUtils.nonEnum;
let composeMixin = require('./compose_mixin');
let baseMixin = require('./base_mixin');
// basetype stuff
let GUtils = require('../graph_utils');
let MUtils = require('../method_utils');
const FUtils = require('../func_utils');
const compose = FUtils.compose;
let typify = MUtils.typify;
let baseTypify = MUtils.baseTypify;
let validify = MUtils.validify;
let nonEnum = GUtils.nonEnum;

let typ_ax = (base) => base.toString() + 'Array';
let base_ax = (base) => base.toString();
let valid_ax = (valObj) => valObj.type();
let valid_condition = (base) => () => base_ax(base);


let type_maker = typify(typ_ax);
let base_type_maker = baseTypify(base_ax);
let validator = validify(valid_ax);
let validation_maker = (base) => validator(valid_condition(base));

let composed = compose(type_maker, base_type_maker, validation_maker);

let baseMixin = (BaseClass) => composed(BaseClass);
// module.exports = baseMixin;
// end basetype stuff
let baseThunk = (BaseClass) => (sArr = []) => baseMixin(BaseClass);
let modMap = (...mods) => (iFunc) => mods.map(m => m(iFunc));


let mutableArrayOf = (BaseClass) => {
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
module.exports = mutableArrayOf;