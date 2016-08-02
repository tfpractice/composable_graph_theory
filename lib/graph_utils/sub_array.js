// let typify = require('./typify');
// let baseTypify = require('./base_typify');
// let validify = require('./validify');
// let subArray = require('./sub_array');

// let arg_type_accessor = (obj) => obj.type();
// let base_accessor = (obj) => obj.toString();
// let hostCompFunc = (base) => () => base_accessor(base);
// let host_type_accessor = (base) => base_accessor(base) + 'Array';
// let base_maker = baseTypify(base_accessor);
// let validate = validify(arg_type_accessor);

// let setify = (BaseType) => {
//     return Object.assign(subArray(), base_maker(BaseType), validate(hostCompFunc(BaseType)), typify(host_type_accessor)(BaseType));
// }
let propConfig = {
    from: {
        value: Array.from
    },
    of: {
        value: Array.of
    }
}
let subArray = () => Object.create(Array.prototype, propConfig);

// Object.defineProperties(subArray, )
// subArray.from = Array.from;
// Object.assign(subArray, Array.from);
console.log(subArray());
// console.log(Object.getOwnPropertyNames(Array));
// console.log(Object.getOwnPropertyNames(subArray()));
console.log(Object.keys(Array));
console.log(Object.keys(subArray()));
// let subArray = () => Object.assign({}, newArray);
module.exports = subArray;