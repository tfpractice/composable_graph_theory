let propConfig = {
    from: {
        value: Array.from
    },
    of: {
        value: Array.of
    }
};
let overWrite = (sArr) => ({
    splice(...args) {
        return subArray2(sArr.splice(...args))
    }
})
let subMethods = (sArr) => ({});

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

// let createBase = (BaseClass)=> 


let instance = (sArr) => Object.assign(Array.from(sArr), hookMethods(sArr));
let createdArray = Object.defineProperties([], subMethods([]));
console.log("createdArray", createdArray)
let SubArrayPrototype = Object.create(Array.prototype, propConfig);
let subArray = () => Object.create(SubArrayPrototype);
let subArray2 = (initArray = subArray()) => Object.assign([], overWrite(initArray));
let makeProto = (BaseClass) => {
    let ptype = Object.create(Array.prototype, pMethods);
    return (elems = []) => Object.create(ptype);
};
// console.log(Object.getOwnPropertyNames(instance([2, 3])));
// console.log(Object.keys(instance([2, 3])));
module.exports.subArray = subArray;
module.exports.SA2 = subArray2;
module.exports.instance = instance;