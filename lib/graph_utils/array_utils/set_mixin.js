// let nonEnum = require('../non_enum');

// let contains = (sArr = []) => (argObj) => (sArr).some(el => el.isEquivalent(argObj));
// let hasSameSize = (sArr = []) => (altArray) => sArr.length === altArray.length;
// let isSubset = (sArr = []) => (altArray) => sArr.every(myObj => contains(altArray)(myObj));
// let isEquivalent = (sArr = []) => (altArray) => hasSameSize(altArray)(sArr) && isSubset(sArr)(altArray);
// let findEquivalentElement = (sArr = []) => (argObj) => sArr.find(el => el.isEquivalent(argObj));
// let intersects = (sArr = []) => (altArray) => sArr.some(currEl => contains(altArray)(currEl));
// let hasDistinctElements = (sArr = []) => (altArray) => sArr.some(myObj => !contains(altArray)(myObj));
// let reassign = (instanceFunction) => (sArr = []) => (newVal = sArr) => sArr = newVal;
// let intersection = (instanceFunction) => (sArr = []) => (altArray) => instanceFunction(sArr.filter(currEl => contains(altArray)(currEl)));
// let difference = (instanceFunction) => (sArr = []) => (altArray) => instanceFunction(sArr.filter(n => !contains(altArray)(n)));
// let union = (instanceFunction) => (sArr = []) => (altArray) => instanceFunction(sArr.concat(...difference(instanceFunction)(altArray)(sArr)));
// let unionize = (instanceFunction) => (sArr = []) => (altArray) => sArr = union(instanceFunction)(sArr)(altArray);
// let push = (instanceFunction) => (sArr = []) => (elem) => !contains(sArr)(elem) ? instanceFunction(sArr.concat(elem)) : instanceFunction(sArr)


// let defMethods = (sArr = []) => ({
//     contains: contains(sArr),
//     hasSameSize: hasSameSize(sArr),
//     isSubset: isSubset(sArr),
//     isEquivalent: isEquivalent(sArr),
//     findEquivalentElement: findEquivalentElement(sArr),
//     intersects: intersects(sArr),
//     intersection: intersection(defMethods)(sArr),
//     hasDistinctElements: hasDistinctElements(sArr),
//     difference: difference(defMethods)(sArr),
//     union: union(defMethods)(sArr),
//     unionize: unionize(defMethods)(sArr),
//     push: push(instanceFunction)(sArr),
// });
// let defaultIFunc = (sArr = []) => Object.assign(Array.from(sArr), defMethods(sArr))



// let setMixin = (instanceFunction = defaultIFunc) => (sArr = []) => ({
//     contains: contains(sArr),
//     hasSameSize: hasSameSize(sArr),
//     isSubset: isSubset(sArr),
//     isEquivalent: isEquivalent(sArr),
//     findEquivalentElement: findEquivalentElement(sArr),
//     intersects: intersects(sArr),
//     intersection: intersection(instanceFunction)(sArr),
//     hasDistinctElements: hasDistinctElements(sArr),
//     difference: difference(instanceFunction)(sArr),
//     union: union(instanceFunction)(sArr),
//     unionize: unionize(instanceFunction)(sArr),
//     push: push(instanceFunction)(sArr),
//     reassign: reassign(instanceFunction)(sArr)
// });


// module.exports = setMixin;