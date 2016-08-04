let typify = require('./typify');
let baseTypify = require('./base_typify');
let validify = require('./validify');
// let subArray = require('./sub_array').subArray;
// le
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

let arrayOf = (BaseClass) => {
    let t_ax = (b) => b.toString();
    let t_make = baseTypify(t_ax);
    let interiorHooks = (sArr) => ({
        from: (...args) => intInstance(Array.from(...args)),
        of: (...args) => intInstance(Array.of(...args)),
        myMethod: () => 'this is my myMethod',
        push: (...args) => {
            sArr.push(...args);
            return intInstance(sArr);
        },
        concat: (...args) => intInstance(sArr.concat(...args)),
        splice: (...args) => intInstance(sArr.splice(...args)),
        toString: () => {
            console.log("toString was called");
            return sArr.toString();
        }
    });
    let intInstance = (elems = []) => Object.assign(Array.from(elems), hookMethods(elems));

    return {
        instance: intInstance
    }
    // let ptype = Object.create(Array.prototype, pMethods);
    // return (elems = []) => Object.create(ptype);
};

let instance = (sArr = []) => Object.assign(Array.from(sArr), hookMethods(sArr));




let subArray = instance;

let subArray2 = (initArray = subArray()) => instance(initArray);



module.exports.subArray = subArray;
module.exports.SA2 = subArray2;
module.exports.instance = instance;
module.exports.arrayOf = arrayOf;