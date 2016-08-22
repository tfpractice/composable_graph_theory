let GUtils = require('../graph_utils');
let FUtils = require('../func_utils');
let checkAll = require('./check_all');
let checkAny = require('./check_any');
let hasSameSize = require('./same_size');
let subset = require('./subset');
let findEq = require('./find_equivalent');
let intersector = require('./intersects');
let nonEnum = GUtils.nonEnum;
let allTrue = FUtils.allTrue;
let identity = FUtils.identity
let comparitor = FUtils.comparitor;
let compose = FUtils.compose;
let unaryCall = FUtils.unaryCall;
let not = FUtils.not;

// comparison methods
// 
let absEquality = (query) => (curr) => comparitor(identity)(curr)(query);
let mutableSet = (eqFun = absEquality) => {
    let setify, methods;
    let contains = (context = []) => (query) => checkAny(eqFun(query))(
        context);
    let isSubset = subset(contains);
    let findEquivalentElement = findEq(eqFun);
    let intersects = intersector(contains);
    let isEquivalent = (context = []) => (altArr) =>
        isSubset(context)(altArr) && isSubset(altArr)(context);
    let hasDistinctElements = (context = []) => (altArr) =>
        not(isSubset(context)(altArr));
    // let intChecker = ()
    let intersection = (sArr = []) => (altArray) =>
        setify(sArr.filter(contains(altArray)));
    // let difference = (sArr = []) => (altArray) =>
    //     instanceFunction(sArr.filter(n => !contains(instanceFunction(
    //         altArray))(n)));
    // let union = (sArr = []) => (altArray) =>
    //     instanceFunction(
    //         sArr.concat(...difference(instanceFunction)(altArray)(sArr)));
    // let unionize = (sArr = []) => (altArray) => sArr =
    //     union(
    //         instanceFunction)(sArr)(altArray);
    // let push = (sArr = []) => (elem) => !contains(
    //         sArr)(elem) ?
    //     instanceFunction(sArr.concat(elem)) : instanceFunction(sArr);
    // let methArr = [contains,
    //     isSubset,
    //     findEquivalentElement,
    //     intersects,
    //     isEquivalent,
    //     hasDistinctElements
    // ];
    // let compMethods =() compose
    applyMethods = (sArr = []) => ({

        contains: contains(sArr),
        hasSameSize: hasSameSize(sArr),
        isSubset: isSubset(sArr),
        isEquivalent: isEquivalent(sArr),
        findEquivalentElement: findEquivalentElement(sArr),
        intersects: intersects(sArr),
        intersection: intersection(sArr),
        // hasDistinctElements: hasDistinctElements(sArr),
        // difference: difference(instanceFunction)(sArr),
        // union: union(instanceFunction)(sArr),
        // unionize: unionize(instanceFunction)(sArr),
        // push: push(instanceFunction)(sArr),
        // reassign: reassign(instanceFunction)(sArr)
    });
    // 
    return setify = (sArr = []) => Object.assign(sArr, applyMethods(sArr));
    // let methods = {
    //     contains: contains(sArr),
    //     hasSameSize: hasSameSize(sArr),
    //     isSubset: isSubset(sArr),
    //     isEquivalent: isEquivalent(sArr),
    //     findEquivalentElement: findEquivalentElement(
    //         sArr),
    //     intersects: intersects(sArr),
    //     // intersection: intersection(instanceFunction)(sArr),
    //     // hasDistinctElements: hasDistinctElements(sArr),
    //     // difference: difference(instanceFunction)(sArr),
    //     // union: union(instanceFunction)(sArr),
    //     // unionize: unionize(instanceFunction)(sArr),
    //     // push: push(instanceFunction)(sArr),
    //     // reassign: reassign(instanceFunction)(sArr)
    // }
    //     return 
    // };
}

// let isPresent = (query) => (context) => contains(context)(query);
module.exports = mutableSet;
// module.exports.isPresent = isPresent;
// module.exports.contains = contains;