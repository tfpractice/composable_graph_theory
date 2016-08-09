let typify = require('../typify');
let baseTypify = require('../base_typify');
let validify = require('../validify');
let nonEnum = require('../non_enum');


let typ_ax = (base) => base.toString() + 'Array';
let base_ax = (base) => base.toString();
let valid_ax = (valObj) => valObj.type();
let valid_condition = (base) => () => base_ax(base);

let type_maker = typify(typ_ax);
let base_type_maker = baseTypify(base_ax);
let validator = validify(valid_ax);

let baseMixin = (BaseClass) => (sArr) => Object.assign({}, type_maker(BaseClass), base_type_maker(BaseClass), validator(valid_condition(BaseClass)));

module.exports = baseMixin;