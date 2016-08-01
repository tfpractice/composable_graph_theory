let typify = require('./typify');
let baseTypify = require('./base_typify');
let validify = require('./validify');
let subArray = require('./sub_array');

let type_accessor = (obj) => obj.type();
let base_accessor = (obj) => obj.toString();
let validityChecker = (obj) => obj.type() === obj.baseType.toString();

// let TypeValidator = (BaseType) => ({
//     isValid(argObj) {
//         return BaseType.isPrototypeOf(argObj);
//     }
// });

let base_maker = baseTypify(base_accessor);
// let valid_maker = validify()

let setify = (BaseType) => {
    return Object.assign(subArray(), base_maker(BaseType));
}
module.exports = setify;