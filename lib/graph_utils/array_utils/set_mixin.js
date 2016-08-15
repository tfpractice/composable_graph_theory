let nonEnum = require('../non_enum');

let contains = (sArr = []) => (argObj) => (sArr).some(el => el.isEquivalent(argObj));
let hasSameSize = (sArr = []) => (altArray) => sArr.length === altArray.length;
let isSubset = (sArr = []) => (altArray) => sArr.every(myObj => contains(altArray)(myObj));
let isEquivalent = (sArr = []) => (altArray) => hasSameSize(altArray)(sArr) && isSubset(sArr)(altArray);
let findEquivalentElement = (sArr = []) => (argObj) => sArr.find(el => el.isEquivalent(argObj));
let intersects = (sArr = []) => (altArray) => sArr.some(currEl => contains(altArray)(currEl));
let hasDistinctElements = (sArr = []) => (altArray) => sArr.some(myObj => !contains(altArray)(myObj));
let intersection = (instanceFunction) => (sArr = []) => (altArray) => instanceFunction(sArr).filter(currEl => contains(altArray)(currEl));
let difference = (instanceFunction) => (sArr = []) => (altArray) => instanceFunction(sArr).filter(n => !contains(altArray)(n));
let union = (instanceFunction) => (sArr = []) => (altArray) => instanceFunction(sArr).concat(...difference(altArray)(sArr));
// let unionize = (sArr = []) => (altArray) => {;
let setMixin = (instanceFunction) => (sArr = []) => {

    let methods = {
        contains: contains(sArr),
        hasSameSize: hasSameSize(sArr),
        isSubset: isSubset(sArr),
        isEquivalent: isEquivalent(sArr),
        findEquivalentElement: findEquivalentElement(sArr),
        intersects: intersects(sArr),
        intersection: intersection(instanceFunction)(sArr),
        hasDistinctElements: hasDistinctElements(sArr),
        difference: difference(instanceFunction)(sArr),
        union: union(instanceFunction)(sArr),
        unionize: (altArray) => {
            sArr.concat(...methods.difference(altArray));
            return sArr;
        },
        push: (argObj) => {
            if (instanceFunction(sArr).isValid(argObj) && !methods.contains(argObj)) {
                sArr.push(argObj);
            }
            return instanceFunction(sArr);
        },
    };
    // let methods = {
    //         contains: (argObj) => (sArr).some(el => el.isEquivalent(argObj)),
    //         hasSameSize: (altArray) => sArr.length === altArray.length,
    //         isSubset: (altArray) => sArr.every(myObj => instanceFunction(altArray).contains(myObj)),
    //         isEquivalent: (altArray) => methods.hasSameSize(altArray) && methods.isSubset(altArray),
    //         findEquivalentElement: (argObj) => sArr.find(el => el.isEquivalent(argObj)),
    //         intersects: (altArray) => altArray.some(currEl => methods.contains(currEl)),
    //         intersection: (altArray) => instanceFunction(sArr).filter(currEl => instanceFunction(altArray).contains(currEl)),
    //         hasDistinctElements: (altArray) => sArr.some(myObj => !instanceFunction(altArray).contains(myObj)),
    //         difference: (altArray) => instanceFunction(sArr).filter(n => !instanceFunction(altArray).contains(n)),
    //         union: (altArray) => instanceFunction(sArr).concat(...methods.difference(altArray)),
    //         unionize: (altArray) => {
    //             sArr.concat(...methods.difference(altArray));
    //             return sArr;
    //         },
    //         push: (argObj) => {
    //             if (instanceFunction(sArr).isValid(argObj) && !methods.contains(argObj)) {
    //                 sArr.push(argObj);
    //             }
    //             return instanceFunction(sArr);
    //         },
    //     }
    // let mkeys = Object.keys(methods);
    // let newA = nonEnum(Object.assign(sArr, methods))(...mkeys);
    // console.log(Object.getOwnPropertyDescriptors(newA));
    // console.log(newA);
    return methods
};
module.exports = setMixin;