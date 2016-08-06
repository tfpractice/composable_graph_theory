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



let hookMethods = (sArr) => ({
    from: (...args) => instance(Array.from(...args)),
    of: (...args) => instance(Array.of(...args)),
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

let construct = (sArr = []) => Object.assign(Array.from(sArr), hookMethods(sArr));

let instance = (sArr = []) => nonEnum(construct(sArr))(...getHookKeys(sArr));



let hooksFromBase = (BaseClass) => (sArr) => ({
    from: (...args) => arrayOf(BaseClass).instance(Array.from(...args)),
    of: (...args) => arrayOf(BaseClass).instance(Array.of(...args)),
    push: (...args) => {
        sArr.push(...args);
        return arrayOf(BaseClass).instance(sArr);
    },
    concat: (...args) => arrayOf(BaseClass).instance(sArr.concat(...args)),
    splice: (...args) => arrayOf(BaseClass).instance(sArr.splice(...args)),
    toString: () => {
        console.log("toString was called");
        return sArr.toString();
    }
});


let arrayOf = (BaseClass) => {
    let interiorHooks = hooksFromBase(BaseClass);
    let intconstruct = (sArr = []) => Object.assign(Array.from(sArr), interiorHooks(sArr));

    let baseInstance = (sArr = []) => nonEnum(intconstruct(sArr))(...getHookKeys(sArr));


    let baseAttrs = Object.assign({}, type_maker(BaseClass), base_type_maker(BaseClass), validator(valid_condition(BaseClass)));
    let baseKeys = Object.keys(baseAttrs);

    //     from: (...args) => intInstance(Array.from(...args)),
    //     of: (...args) => intInstance(Array.of(...args)),
    //     myMethod: () => 'this is my myMethod',
    //     push: (...args) => {
    //         sArr.push(...args);
    //         return intInstance(sArr);
    //     },
    //     concat: (...args) => intInstance(sArr.concat(...args)),
    //     splice: (...args) => intInstance(sArr.splice(...args)),
    //     toString: () => {
    //         console.log("toString was called");
    //         return sArr.toString();
    //     }
    // });
    let intInstance = (elems = []) => nonEnum(Object.assign(baseInstance(elems), baseAttrs))(...baseKeys);
    return {
        instance: intInstance
    }

};



module.exports.instance = instance;
module.exports.construct = construct;
module.exports.arrayOf = arrayOf;