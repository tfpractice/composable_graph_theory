let GUtils = require('../graph_utils');
let FUtils = require('../func_utils');
let MUtils = require('../method_utils');
let checkAll = require('./check_all');
let checkAny = require('./check_any');
let equalize = MUtils.equalize;
let hasSameSize = require('./same_size');
let subset = require('./subset');
let findEq = require('./find_equivalent');
let intersector = require('./intersects');
let nonEnum = GUtils.nonEnum;
let comparitor = FUtils.comparitor
let allTrue = FUtils.allTrue;
let unaryCall = FUtils.unaryCall;
let not = FUtils.not;

// comparison methods
// must implement equatable
let setMatcher = (compFunction) => (arg) => (el) => comparitor(compFunction)(
    arg)(el);
let matchesArg = (arg) => (el) => (el === arg) || (el.isEquivalent(arg))
let contains = (sArr = []) => (argObj) => checkAny(matchesArg(argObj))(sArr);

let isSubset = subset(contains);
let findEquivalentElement = findEq(matchesArg);
let intersects = intersector(contains);

// let isEquivalent = (sArr = []) => (altArray) => equalize(isSubset(sArr))(altArray) &&
//     isSubset(altArray)(sArr);
let isEquivalent = (sArr = []) => (altArray) => isSubset(sArr)(altArray) &&
    isSubset(altArray)(sArr);
let hasDistinctElements = (sArr = []) => (altArray) => not(isSubset(sArr)(
    altArray))

// array instance makers
let reassign = (instanceFunction) => (sArr = []) => (newVal = sArr) => sArr =
    newVal;
let intersection = (instanceFunction) => (sArr = []) => (altArray) =>
    instanceFunction(sArr.filter(currEl => contains(altArray)(currEl)));
let difference = (instanceFunction) => (sArr = []) => (altArray) =>
    instanceFunction(sArr.filter(n => !contains(instanceFunction(altArray))(n)));
let union = (instanceFunction) => (sArr = []) => (altArray) => instanceFunction(
    sArr.concat(...difference(instanceFunction)(altArray)(sArr)));
let unionize = (instanceFunction) => (sArr = []) => (altArray) => sArr = union(
    instanceFunction)(sArr)(altArray);
let push = (instanceFunction) => (sArr = []) => (elem) => !contains(sArr)(elem) ?
    instanceFunction(sArr.concat(elem)) : instanceFunction(sArr);

// compiled methods
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

// \default instantiator
let defaultIFunc = (sArr = []) => Object.assign(Array.from(sArr), defMethods(
    sArr));

// exports
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
let isPresent = (query) => (context) => contains(context)(query);
module.exports = setMixin;
module.exports.isPresent = isPresent;
module.exports.contains = isPresent;