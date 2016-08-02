let typify = require('./typify');
let baseTypify = require('./base_typify');
let validify = require('./validify');
let subArray = require('./sub_array');

let arg_type_accessor = (obj) => obj.type();
let base_accessor = (obj) => obj.toString();
let hostCompFunc = (base) => () => base_accessor(base);
let base_maker = baseTypify(base_accessor);
let validate = validify(arg_type_accessor);

let setify = (BaseType) => {
    return Object.assign(subArray(), base_maker(BaseType), validate(hostCompFunc(BaseType)));
}
module.exports = setify;



// let TypeValidator = (BaseType) => ({
//     isValid(argObj) {
//         return BaseType.isPrototypeOf(argObj);
//     }
// });