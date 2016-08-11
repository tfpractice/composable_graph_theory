let typify = require('../typify');
let baseTypify = require('../base_typify');
let validify = require('../validify');
let nonEnum = require('../non_enum');


let typ_ax = (base) => base.toString() + 'Array';
let base_ax = (base) => base.toString();
let valid_ax = (valObj) => valObj.type();
let valid_condition = (base) => () => base_ax(base);

let type_maker = typify(typ_ax);
let base_type_maker = baseTypify(base_ax);
let validator = validify(valid_ax);

let subInstance = (BaseClass) => arrayOf(BaseClass).instance;
let baseMixin = (BaseClass) => (sArr) => Object.assign({}, type_maker(BaseClass), base_type_maker(BaseClass), validator(valid_condition(BaseClass)));
let typedMixin = (BaseClass) => {
    let instanceFrom = arrayOf(BaseClass).instance;
    let methods;
    return (sArr) => methods = {
        from: (...args) => instanceFrom(Array.from(...args)),
        of: (...args) => instanceFrom(Array.of(...args)),
        push: (...args) => {
            sArr.push(...args);
            return instanceFrom(sArr);
        },
        push: (argObj) => {
            if (instanceFrom(sArr).isValid(argObj)) {
                sArr.push(argObj);
            }
            return instanceFrom(sArr);
        },
        concat: (...args) => instanceFrom(sArr.concat(...args)),
        slice: (...args) => instanceFrom(sArr.slice(...args)),
        splice: (...args) => instanceFrom(sArr.splice(...args)),
        reassign: (newVal = sArr) => arrayOf(BaseClass).instance(newVal),
        isEmpty: () => sArr.length === 0,
        filter: (...args) => (instanceFrom(sArr.filter(...args))),
        clear: () => {
            sArr.splice(0);
            return instanceFrom(sArr);
        },
        copy: () => instanceFrom(sArr.slice(0)),
        removeElement: (argObj) => {
            let eqIdx = sArr.findIndex(el => el.isEquivalent(argObj));
            return eqIdx > -1 && methods.splice(eqIdx, 1);
        }
    }
};

let setMixin = (BaseClass) => {
    let instanceFrom = arrayOf(BaseClass).instance;
    let methods;
    return (sArr) => methods = {
        contains: (argObj) => sArr.some(el => el.isEquivalent(argObj)),
        hasSameSize: (altArray) => sArr.length === altArray.length,
        isSubset: (altArray) => sArr.every(myObj => instanceFrom(altArray).contains(myObj)),
        isEquivalent: (altArray) => (methods.hasSameSize(altArray) && methods.isSubset(altArray)),
        findEquivalentElement: (argObj) => sArr.find(el => el.isEquivalent(argObj)),
        intersects: (altArray) => instanceFrom(altArray).some(currEl => methods.contains(currEl)),
        intersection: (altArray) => instanceFrom(sArr).filter(currEl => instanceFrom(altArray).contains(currEl)),
        hasDistinctElements: (altArray) => sArr.some(myObj => !instanceFrom(altArray).contains(myObj)),
        difference: (altArray) => instanceFrom(sArr).filter(n => !instanceFrom(altArray).contains(n)),
        union: (altArray) => instanceFrom(sArr).concat(...methods.difference(altArray)),
        unionize: (altArray) => {
            sArr.concat(...methods.difference(altArray));
            return sArr;
        },
        push: (argObj) => {
            if (instanceFrom(sArr).isValid(argObj) && !methods.contains(argObj)) {
                sArr.push(argObj);
            }
            return instanceFrom(sArr);
        },
    }
};
let composeMixins = (BaseClass) => (...mixins) => {
    let thunks = mixins.map(mxn => mxn(BaseClass))
    return (sArr) => thunks.reduce((comp, thk) => Object.assign(comp, thk(sArr)), {});
};
// let composeMixins2 = (...mixins) => (BaseClass) => {
//     let thunks = mixins.map(mxn => mxn(BaseClass))
//     return (sArr) => thunks.reduce((comp, thk) => Object.assign(comp, thk(sArr)), {});
// };
let compositeKeys = (BaseClass) => (...mixins) => (sArr) => Object.keys(composeMixins(BaseClass)(...mixins)(sArr));

let arrayOf = (BaseClass) => {
    let mods, addMixin, compVal, compKeys, construct, instance, vendor;
    mods = [];
    addMixin = (mod) => {
        mods.push(mod)
    };
    addMixin(baseMixin);
    addMixin(typedMixin);
    addMixin(setMixin);
    compVal = (sArr) => composeMixins(BaseClass)(...mods)(sArr);
    compKeys = (sArr) => Object.keys(compVal(sArr));
    construct = (sArr = []) => {
        return Object.assign(Array.from(sArr), compVal(sArr))
    };
    instance = (sArr) => {
        return nonEnum(construct(sArr))(compKeys(sArr))
    }
    return vendor = {
        instance: instance,
        mixin: addMixin,
        mods: mods
    }
};
// let
let arrayOf2 = (BaseClass) => (...mixins) => {
    let mods, addMixin, compVal, compKeys, construct, instance, vendor;
    mods = mixins;
    composeMixins(BaseClass)(...mods)
    // addMixin = (mod) => {
    //     mods.push(mod)
    // };
    // addMixin(baseMixin);
    // addMixin(typedMixin);
    // addMixin(setMixin);
    compVal = (sArr) => composeMixins(BaseClass)(...mods)(sArr);
    compKeys = (sArr) => Object.keys(compVal(sArr));
    construct = (sArr = []) => {
        return Object.assign(Array.from(sArr), compVal(sArr))
    };
    instance = (sArr) => {
        return nonEnum(construct(sArr))(compKeys(sArr))
    }
    return instance;
};
module.exports.arrayOf = arrayOf;
module.exports.subInstance = subInstance;