// let typify = require('./typify');
// let baseTypify = require('./base_typify');
// let validify = require('./validify');
// let nonEnum = require('./non_enum');
// let typ_ax = (base) => base.toString() + 'Array';
// let base_ax = (base) => base.toString();
// let valid_ax = (valObj) => valObj.type();
// let valid_condition = (base) => () => base_ax(base);
// let type_maker = typify(typ_ax);
// let base_type_maker = baseTypify(base_ax);
// let validator = validify(valid_ax);

// let arrayOf = (BaseType) => {
//         // let interiorHooks = hooksFromBase(BaseType);
//         let interiorHooks = (sArr) => ({
//             from: (...args) => intInstance(Array.from(...args)),
//             of: (...args) => intInstance(Array.of(...args)),
//             push: (...args) => {
//                 sArr.push(...args);
//                 return intInstance(sArr);
//             },
//             concat: (...args) => intInstance(sArr.concat(...args)),
//             slice: (...args) => intInstance(sArr.slice(...args)),
//             splice: (...args) => intInstance(sArr.splice(...args)),
//             isEmpty: () => sArr.length === 0,
//             filter: (...args) => intInstance(sArr.filter(...args)),
//             hasSameSize: (altArray) => sArr.length === altArray.length,
//             clear: () => {
//                 sArr.splice(0);
//                 return intInstance(sArr);
//             },
//             copy: () => intInstance(sArr.slice(0)),
//             contains: (argObj) => sArr.some(el => el.isEquivalent(argObj)),
//         });
//         let intconstruct = (sArr = []) => Object.assign(Array.from(sArr), interiorHooks(sArr));
//         let baseInstance = (sArr = []) => nonEnum(intconstruct(sArr))(...getHookKeys(sArr));
//         let baseAttrs = Object.assign({}, type_maker(BaseType), base_type_maker(BaseType), validator(valid_condition(BaseType)));
//         let baseKeys = Object.keys(baseAttrs);
//         let intInstance = (elems = []) => nonEnum(Object.assign(baseInstance(elems), baseAttrs))(...baseKeys);
//         let addMethod = (mKey)=>(funcVal)=> interiorHooks
//         return {
//             instance: intInstance
//         }