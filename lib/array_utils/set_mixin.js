let GUtils = require('../graph_utils');
let FUtils = require('../func_utils');
let checkAll = require('./check_all');
let nonEnum = GUtils.nonEnum;
let comparitor = FUtils.comparitor
let allTrue = FUtils.allTrue;
let unaryCall = FUtils.unaryCall;
let not = FUtils.not

let contains = (sArr = []) => (argObj) => (sArr).some(el => el.isEquivalent(argObj));
let isPresent = (query) => (context) => contains(context)(query);

let getLength = (context) => context.length;
let hasSameSize = (sArr = []) => (altArray) => comparitor(getLength)(sArr)(altArray);
//let hasSameSize = (sArr = []) => (altArray) => sArr.length === altArray.length;

let contentMap = (sArr = []) => sArr.map(isPresent);
// let isSubset = (sArr = []) => (altArray) => checkAll(unaryCall(altArray))(contentMap(sArr));
let isSubset = (sArr = []) => (altArray) => sArr.every(contains(altArray));

// let isSubset = (sArr = []) => (altArray) => sArr.every(myObj => contains(altArray)(myObj));
// let sizeAndSubset = (context = []) => (altArray) => get(altArray)(sArr) && isSubset(sArr)(altArray);
let isEquivalent = (sArr = []) => (altArray) => hasSameSize(sArr)(altArray) && isSubset(sArr)(altArray);
// let isEquivalent = (sArr = []) => (altArray) => hasSameSize(altArray)(sArr) && isSubset(sArr)(altArray);
let getLabel = (el) => el.label();
let findEquivalentElement = (sArr = []) => (argObj) => sArr.find(comparitor(getLabel)(argObj));
// let findEquivalentElement = (sArr = []) => (argObj) => sArr.find(el => el.isEquivalent(argObj));
let intersects = (sArr = []) => (altArray) => sArr.some(contains(altArray));
// let intersects = (sArr = []) => (altArray) => sArr.some(currEl => contains(altArray)(currEl));
// let hasDistinctElements = (sArr = []) => (altArray) => sArr.map(contains(altArray)).some(not);
let hasDistinctElements = (sArr = []) => (altArray) => not(isSubset(sArr)(altArray))
    // let hasDistinctElements = (sArr = []) => (altArray) => sArr.some(myObj => !contains(altArray)(myObj));

let reassign = (instanceFunction) => (sArr = []) => (newVal = sArr) => sArr = newVal;
let intersection = (instanceFunction) => (sArr = []) => (altArray) => instanceFunction(sArr.filter(currEl => contains(altArray)(currEl)));
let difference = (instanceFunction) => (sArr = []) => (altArray) => instanceFunction(sArr.filter(n => !contains(altArray)(n)));
let union = (instanceFunction) => (sArr = []) => (altArray) => instanceFunction(sArr.concat(...difference(instanceFunction)(altArray)(sArr)));
let unionize = (instanceFunction) => (sArr = []) => (altArray) => sArr = union(instanceFunction)(sArr)(altArray);
let push = (instanceFunction) => (sArr = []) => (elem) => !contains(sArr)(elem) ? instanceFunction(sArr.concat(elem)) : instanceFunction(sArr)


let defMethods = (sArr = []) => ({
    contains: contains(sArr),
    hasSameSize: hasSameSize(sArr),
    isSubset: isSubset(sArr),
    isEquivalent: isEquivalent(sArr),
    findEquivalentElement: findEquivalentElement(sArr),
    intersects: intersects(sArr),
    intersection: intersection(defMethods)(sArr),
    hasDistinctElements: hasDistinctElements(sArr),
    difference: difference(defMethods)(sArr),
    union: union(defMethods)(sArr),
    unionize: unionize(defMethods)(sArr),
    push: push(instanceFunction)(sArr),
});
let defaultIFunc = (sArr = []) => Object.assign(Array.from(sArr), defMethods(sArr))



let setMixin = (instanceFunction = defaultIFunc) => (sArr = []) => ({
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
    unionize: unionize(instanceFunction)(sArr),
    push: push(instanceFunction)(sArr),
    reassign: reassign(instanceFunction)(sArr)
});

// let isPresent = (queryEl) => (nArr) => contains(nArr)(queryEl);

module.exports = setMixin;
module.exports.isPresent = isPresent;