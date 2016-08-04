let typify = require('./typify');
let baseTypify = require('./base_typify');
let validify = require('./validify');
let subArray = require('./sub_array').subArray;

let arg_type_accessor = (obj) => obj.type();
let base_accessor = (obj) => obj.toString();
let hostCompFunc = (base) => () => base_accessor(base);
let host_type_accessor = (base) => base_accessor(base) + 'Array';
let base_maker = baseTypify(base_accessor);
let validate = validify(arg_type_accessor);

// let setify = (BaseType) => {
// return Object.assign(subArray(), base_maker(BaseType), validate(hostCompFunc(BaseType)), typify(host_type_accessor)(BaseType));
// };


let hookMethods = (sArr) => ({
    myMethod: () => 'this is my myMethod',
    push: (...args) => {
        sArr.push(...args);
        return instance(sArr);
    },
    concat: (...args) => instance(sArr.concat(...args)),
    splice: (...args) => instance(sArr.splice(...args)),
    toString: () => {
        console.log("toString was called");
        return sArr.toString();
    }
});
let instance = (sArr) => Object.assign(Array.from(sArr), hookMethods(sArr));

let setify = (BaseType) => (elems = []) => {
        return Object.assign(Array.from(elems), base_maker(BaseType), validate(hostCompFunc(BaseType)), typify(host_type_accessor)(BaseType), hookMethods(elems));
    }
    // let methods = (obj) => Object.defineProperties(obj, {
    //     clear: {
    //         value: (...args) => obj.slice(0);
    //     }
    // })

module.exports = setify;



// let TypeValidator = (BaseType) => ({
//     isValid(argObj) {
//         return BaseType.isPrototypeOf(argObj);
//     }
// });