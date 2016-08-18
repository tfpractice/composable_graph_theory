let GUtils = require('../graph_utils');
// module.exports.showUtils = () => console.log(GUtils);
// showUtils();
console.log(GUtils);
let typify = GUtils.typify;
let baseTypify = GUtils.baseTypify;
let validify = GUtils.validify;
let nonEnum = GUtils.nonEnum;
let composeMixin = require('./compose_mixin');


let typ_ax = (base) => base.toString() + 'Array';
let base_ax = (base) => base.toString();
let valid_ax = (valObj) => valObj.type();
let valid_condition = (base) => () => base_ax(base);


let type_maker = typify(typ_ax);
let base_type_maker = baseTypify(base_ax);
let validator = validify(valid_ax);
let validation_maker = (base) => validator(valid_condition(base));

let composed = composeMixin(type_maker, base_type_maker, validation_maker);

let baseMixin = (BaseClass) => composed(BaseClass);
module.exports = baseMixin;