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
    } //,
    // splice:{
    // value:(...args){}
    // }
};
let overWrite = (sArr) => ({
    splice(...args) {
        return subArray2(sArr.splice(...args))
            // return this.constructor.from(super.splice(...args));
    }
})

let subMethods = (sArr) => ({
    elements: {
        value: sArr
    },
    from: {
        value: Array.from
    },
    of: {
        value: Array.of
    },
    myMethod: {
        value: () => 'this is my myMethod'
    },
    push: {
        value: (...args) => {
            sArr.push(...args);
            console.log("you called push");
            console.log((sArr));
            return instance(sArr);
        }
    },
    concat: {
        value: (...args) => instance(sArr.concat(...args))
    },
    splice: {
        value: (...args) => {
            return instance(sArr.splice(...args))
                // return this.constructor.from(super.splice(...args));
        }
    },
    toString: {
        value: () => {
            console.log("toString was called");
            sArr.toString();
        }
    }
});


let SubArrayPrototype = Object.create(Array.prototype, propConfig);
// SubArrayPrototype.clear = ()
let subArray = () => Object.create(SubArrayPrototype);
let subArray2 = (initArray = subArray()) => Object.assign([], overWrite(initArray));
let makeProto = (BaseClass) => {
    let ptype = Object.create(Array.prototype, pMethods);

    return (elems = []) => Object.create(ptype);
};

// console.log(makeProto("WHATEVR").concat([2, 3, 4]))
// let instance = (elems = []) => Object.assign([].concat(elems), subMethods(elems));
// let instance = (elems = []) => ((Object.create(Array.from(elems), subMethods(elems))));
let instance = (elems = []) => ((Object.defineProperties([], subMethods(elems))));
// let instance = (elems = []) => ((Object.assign([].concat(elems), subMethods(elems))));
// subArray.prototype = Object.create(Array.prototype);
// subArray.prototype.myProp = function() {
//     console.log(super);
// };
// Object.defineProperties(subArray, )
// subArray.from = Array.from;
// Object.assign(subArray, Array.from);
// console.log(subArray());
console.log(Object.getOwnPropertyNames(instance([2, 3])));
// console.log(Object.getOwnPropertyNames(subArray()));
console.log(Object.keys(instance([2, 3])));
// console.log(Object.keys(subArray()));
// let subArray = () => Object.assign({}, newArray);
module.exports = subArray;
module.exports.SA2 = subArray2;
module.exports.instance = instance;