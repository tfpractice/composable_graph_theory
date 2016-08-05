let typify = require('./typify');
let baseTypify = require('./base_typify');
let validify = require('./validify');
let nonEnum = require('./non_enum');

let typ_ax = (base) => base.toString() + 'Array';
let base_ax = (base) => base.toString();
let valid_ax = (valObj) => valObj.type();
let valid_condition = (base) => () => base_ax(base);

let type_maker = typify(typ_ax);
let base_type_maker = baseTypify(base_ax);
let validator = validify(valid_ax);

// let t_ax = (b) => b.toString() + 'Array';
// let t_make = baseTypify(t_ax);


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
let getHookKeys = (sArr) => Object.keys(hookMethods(sArr));
console.log(...(getHookKeys(([2, 3, 4]))));

// let construct = (sArr = []) => Array.from(sArr)
let construct = (sArr = []) => Object.assign(Array.from(sArr), hookMethods(sArr));
let xenum = (sArr = []) => nonEnum(construct(sArr))(getHookKeys(sArr));

let instance = (sArr = []) => nonEnum(construct(sArr))(...getHookKeys(sArr));


// applied to source:
// hookMethods
// applied to object itself
// ()// 
// 
// applied to arguem

let arrayOf = (BaseClass) => {
    // let t_ax = (b) => b.toString();
    // let t_make = baseTypify(t_ax);
    let intInstance = (elems = []) => {
        // console.log("elements", elems);
        // console.log("construct", construct(elems))
        // console.log("instance", instance(elems))
        // console.log("xenum", xenum(elems))

        return construct(elems);
        // return nonEnum(Object.assign(instance(elems), type_maker(BaseClass), base_type_maker(BaseClass), validator(valid_condition(BaseClass))), 'type');
    }
    return {
        instance: intInstance
    }
};



module.exports.instance = instance;
module.exports.construct = construct;
module.exports.arrayOf = arrayOf;