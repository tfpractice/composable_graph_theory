let typify = require('./typify');
let baseTypify = require('./base_typify');
let validify = require('./validify');

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
    let intInstance = (elems = []) => Object.assign(Array.from(elems), t_make(BaseClass), hookMethods(elems));

    return {
        instance: intInstance
    }

};

let instance = (sArr = []) => Object.assign(Array.from(sArr), hookMethods(sArr));


module.exports.instance = instance;
module.exports.arrayOf = arrayOf;