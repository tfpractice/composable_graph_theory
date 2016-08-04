let hookMethods = (sArr) => ({
    from: (...args) => instance(Array.from(...args)),
    of: (...args) => instance(Array.of(...args)),
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

let makeProto = (BaseClass) => {
    let ptype = Object.create(Array.prototype, pMethods);
    return (elems = []) => Object.create(ptype);
};

let instance = (sArr = []) => Object.assign(Array.from(sArr), hookMethods(sArr));




let subArray = instance;

let subArray2 = (initArray = subArray()) => instance(initArray);



module.exports.subArray = subArray;
module.exports.SA2 = subArray2;
module.exports.instance = instance;