let typify = require('./typify');
let baseTypify = require('./base_typify');
let validify = require('./validify');
let subArray = require('./sub_array');

let host_type_accessor = (base) => obj.baseType();
let arg_type_accessor = (obj) => obj.type();
let base_accessor = (obj) => obj.toString();
let validityChecker = (obj) => obj.type() === obj.baseType.toString();
let validate = validify(arg_type_accessor);
let hostCompFunc = (base) => base.toString()

let base_maker = baseTypify(base_accessor);
// let valid_maker = validify()

let setify = (BaseType) => {
    return Object.assign(subArray(), base_maker(BaseType), validate(() => base_accessor(BaseType)));
}
module.exports = setify;



// let TypeValidator = (BaseType) => ({
//     isValid(argObj) {
//         return BaseType.isPrototypeOf(argObj);
//     }
// });