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

let subInstance = (BaseClass) => (arrOp) => arrayOf(BaseClass).instance(arrOp);
let hooksFromBase = (BaseClass) => (sArr) => ({
    from: (...args) => subInstance(BaseClass)(Array.from(...args)),
    of: (...args) => subInstance(BaseClass)(Array.of(...args)),
    push: (...args) => {
        sArr.push(...args);
        return subInstance(BaseClass)(sArr);
    },
    concat: (...args) => subInstance(BaseClass)(sArr.concat(...args)),
    slice: (...args) => subInstance(BaseClass)(sArr.slice(...args)),
    splice: (...args) => subInstance(BaseClass)(sArr.splice(...args)),
    isEmpty: () => sArr.length === 0,
    filter: (...args) => subInstance(BaseClass)(sArr.filter(...args)),
    hasSameSize: (altArray) => sArr.length === altArray.length,
    clear: () => {
        sArr.splice(0);
        return subInstance(BaseClass)(sArr);
    },
    copy: () => subInstance(BaseClass)(sArr.slice(0)),
    contains: (argObj) => sArr.some(el => el.isEquivalent(argObj)),
    // push: (argObj) => {
    // if ((sArr.isValid(argObj) && !(sArr.contains(argObj)))) {
    // super.push(argObj);
    // }
    // return sArr;
    // }
    // isSubset(altArray) => sArr.every(myObj => altArray.contains(myObj))
    // isEquivalent: (altArray) => (sArr.hasSameSize(altArray) && sArr.isSubset(altArray))
    // findEquivalentElement: (argObj) => {
    // return sArr.find(el => el.isEquivalent(argObj));
    // }
    // removeElement: (argObj) => {
    // let eqIdx = sArr.findIndex(el => el.isEquivalent(argObj));
    // return eqIdx > -1 && sArr.splice(eqIdx, 1);
    // }

    // intersects: (altArray) => subInstance(BaseClass)(sArr.some(currEl => altArray.contains(currEl) === true))
    // intersection: (altArray) => subInstance(BaseClass)(sArr.filter(currEl => altArray.contains(currEl) === true))
    // hasDistinctElements: (altArray) => subInstance(BaseClass)(sArr.some(myObj => !altArray.contains(myObj)))
    // difference: (altArray) => subInstance(BaseClass)(sArr.filter(n => !altArray.contains(n)))
    // union: (altArray) => {
    // let uArray = subInstance(BaseClass)();
    // sArr.forEach(currEl => uArray.push(currEl));
    // altArray.forEach(altElem => uArray.push(altElem));
    // return uArray;
    // }
    // unionize: (altArray) => {
    // altArray.difference(sArr).forEach(dNode => sArr.push(dNode));
    // return sArr;
    // }
    // excludeElement: (exElem) => sArr.filter(el => el != exElem);
});


let arrayOf = (BaseClass) => {
    // let interiorHooks = hooksFromBase(BaseClass);
    let interiorHooks = (sArr) => ({
        from: (...args) => subInstance(BaseClass)(Array.from(...args)),
        of: (...args) => subInstance(BaseClass)(Array.of(...args)),
        push: (...args) => {
            sArr.push(...args);
            return subInstance(BaseClass)(sArr);
        },
        concat: (...args) => subInstance(BaseClass)(sArr.concat(...args)),
        slice: (...args) => subInstance(BaseClass)(sArr.slice(...args)),
        splice: (...args) => subInstance(BaseClass)(sArr.splice(...args)),
        isEmpty: () => sArr.length === 0,
        filter: (...args) => subInstance(BaseClass)(sArr.filter(...args)),
        hasSameSize: (altArray) => sArr.length === altArray.length,
        clear: () => {
            sArr.splice(0);
            return subInstance(BaseClass)(sArr);
        },
        copy: () => subInstance(BaseClass)(sArr.slice(0)),
        contains: (argObj) => sArr.some(el => el.isEquivalent(argObj)),
    });
    let intconstruct = (sArr = []) => Object.assign(Array.from(sArr), interiorHooks(sArr));
    let baseInstance = (sArr = []) => nonEnum(intconstruct(sArr))(...getHookKeys(sArr));
    let baseAttrs = Object.assign({}, type_maker(BaseClass), base_type_maker(BaseClass), validator(valid_condition(BaseClass)));
    let baseKeys = Object.keys(baseAttrs);
    let intInstance = (elems = []) => nonEnum(Object.assign(baseInstance(elems), baseAttrs))(...baseKeys);
    return {
        instance: intInstance
    }
};
module.exports.instance = instance;
module.exports.construct = construct;
module.exports.arrayOf = arrayOf;