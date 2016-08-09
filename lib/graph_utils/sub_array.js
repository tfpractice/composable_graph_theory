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
});
let getHookKeys = (sArr) => Object.keys(hookMethods(sArr));
let construct = (sArr = []) => Object.assign(Array.from(sArr), hookMethods(sArr));
let instance = (sArr = []) => nonEnum(construct(sArr))(...getHookKeys(sArr));
let subInstance = (BaseClass) => (arrOp) => arrayOf(BaseClass).instance(arrOp);
let hooksFromBase = (BaseClass) => (mixins) => (sArr) => {
    let instanceFrom = subInstance(BaseClass);
    let methods = {
        from: (...args) => instanceFrom(Array.from(...args)),
        of: (...args) => instanceFrom(Array.of(...args)),
        push: (...args) => {
            sArr.push(...args);
            return instanceFrom(sArr);
        },
        concat: (...args) => instanceFrom(sArr.concat(...args)),
        slice: (...args) => instanceFrom(sArr.slice(...args)),
        splice: (...args) => instanceFrom(sArr.splice(...args)),
        isEmpty: () => sArr.length === 0,
        filter: (...args) => instanceFrom(sArr.filter(...args)),
        hasSameSize: (altArray) => sArr.length === altArray.length,
        clear: () => {
            sArr.splice(0);
            return instanceFrom(sArr);
        },
        copy: () => instanceFrom(sArr.slice(0)),
        contains: (argObj) => sArr.some(el => el.isEquivalent(argObj)),
        showThis: () => console.log("this from within hooksFromBase,", this),
        isSubset: (altArray) => sArr.every(myObj => instanceFrom(altArray).contains(myObj)),
        isEquivalent: (altArray) => (methods.hasSameSize(altArray) && methods.isSubset(altArray)),
        findEquivalentElement: (argObj) => sArr.find(el => el.isEquivalent(argObj)),
        removeElement: (argObj) => {
            let eqIdx = sArr.findIndex(el => el.isEquivalent(argObj));
            return eqIdx > -1 && methods.splice(eqIdx, 1);
        },
        reassign: () => instanceFrom(sArr),
        intersects: (altArray) => instanceFrom(altArray).some(currEl => methods.contains(currEl)),
        intersection: (altArray) => methods.filter(currEl => instanceFrom(altArray).contains(currEl)),
        hasDistinctElements: (altArray) => sArr.some(myObj => !instanceFrom(altArray).contains(myObj)),
        difference: (altArray) => methods.filter(n => !instanceFrom(altArray).contains(n)),
        union: (altArray) => {
            let uArray = instanceFrom(sArr);
            altArray.forEach(altElem => uArray.push(altElem));
            return uArray;
        },
        push: (argObj) => {
            if ((instanceFrom(sArr).isValid(argObj) && !(methods.contains(argObj)))) {
                sArr.push(argObj);
            }
            return instanceFrom(sArr);
        },
        unionize: (altArray) => {
            methods.concat(...methods.difference(altArray));
            return sArr;
        }
    };
    let allMeths = Object.assign({}, mixins, methods);
    return allMeths;
};
let arrayOf = (BaseClass) => {
    let baseAttrs = Object.assign({}, type_maker(BaseClass), base_type_maker(BaseClass), validator(valid_condition(BaseClass)));
    let baseKeys = Object.keys(baseAttrs);
    let valObj = validator(valid_condition(BaseClass));
    let interiorHooks = hooksFromBase(BaseClass)(baseAttrs);
    let intconstruct = (sArr = []) => Object.assign(Array.from(sArr), interiorHooks(sArr), baseAttrs);
    let baseInstance = (sArr = []) => nonEnum(intconstruct(sArr))(...Object.keys(interiorHooks(sArr)));
    let intInstance = (elems = []) => {
        let result = nonEnum(Object.assign(baseInstance(elems), baseAttrs))(...baseKeys)
        return result;
    };
    return {
        instance: intInstance
    }
};
module.exports.instance = instance;
// module.exports.construct = construct;
module.exports.arrayOf = arrayOf;