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
    // methods to overwrite/hook into native array
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

// failed attempts at creating a prototype
// // subArray.prototype = Object.create(Array.prototype);
// subArray.prototype.myProp = function() {
//     console.log(super);
// };
let SubArrayPrototype = Object.create(Array.prototype, propConfig);
// SubArrayPrototype.clear = ()
let subArray = () => Object.create(SubArrayPrototype);
let subArray2 = (initArray = subArray()) => Object.assign([], overWrite(initArray));
let makeProto = (BaseClass) => {
    let ptype = Object.create(Array.prototype, pMethods);
    return (elems = []) => Object.create(ptype);
};

// attempts at instantiating
let instance = (elems = []) => ((Object.defineProperties([], subMethods(elems))));
// let instance = (elems = []) => Object.assign([].concat(elems), subMethods(elems));
// let instance = (elems = []) => ((Object.create(Array.from(elems), subMethods(elems))));
// let instance = (elems = []) => ((Object.assign([].concat(elems), subMethods(elems))));



console.log(Object.getOwnPropertyNames(instance([2, 3])));
// console.log(Object.getOwnPropertyNames(subArray()));
console.log(Object.keys(instance([2, 3])));
// console.log(Object.keys(subArray()));
// let subArray = () => Object.assign({}, newArray);
module.exports = subArray;
module.exports.SA2 = subArray2;
module.exports.instance = instance;