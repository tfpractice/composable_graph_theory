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
let unaryCall = FUtils.unaryCall;
let not = FUtils.not;

// comparison methods
// let oldshit = () => {
//     let setMatcher = (compFunction) => (arg) => (el) => comparitor(
//         compFunction)(
//         arg)(el);
//     let matchesArg = (arg) => (el) => (el === arg) || (el.isEquivalent(arg))
//     let contains = (sArr = []) => (argObj) => checkAny(matchesArg(argObj))(
//         sArr);

//     let isSubset = subset(contains);
//     let findEquivalentElement = findEq(matchesArg);
//     let intersects = intersector(contains);

//     let isEquivalent = (sArr = []) => (altArr) => isSubset(sArr)(altArr) &&
//         isSubset(altArr)(sArr);
//     let hasDistinctElements = (sArr = []) => (altArr) => not(isSubset(
//         sArr)(
//         altArr))

//     // array instance makers
//     let reassign = (instanceFunction) => (sArr = []) => (newVal = sArr) =>
//         sArr =
//         newVal;
//     let intersection = (instanceFunction) => (sArr = []) => (altArr) =>
//         instanceFunction(sArr.filter(currEl => contains(altArr)(currEl)));
//     let difference = (instanceFunction) => (sArr = []) => (altArr) =>
//         instanceFunction(sArr.filter(n => !contains(instanceFunction(
//             altArr))(n)));
//     let union = (instanceFunction) => (sArr = []) => (altArr) =>
//         instanceFunction(
//             sArr.concat(...difference(instanceFunction)(altArr)(sArr)));
//     let unionize = (instanceFunction) => (sArr = []) => (altArr) => sArr =
//         union(
//             instanceFunction)(sArr)(altArr);
//     let push = (instanceFunction) => (sArr = []) => (elem) => !contains(
//             sArr)(elem) ?
//         instanceFunction(sArr.concat(elem)) : instanceFunction(sArr);

//     // compiled methods
//     let defMethods = (sArr = []) => ({
//         contains: contains(sArr),
//         hasSameSize: hasSameSize(sArr),
//         isSubset: isSubset(sArr),
//         isEquivalent: isEquivalent(sArr),
//         findEquivalentElement: findEquivalentElement(sArr),
//         intersects: intersects(sArr),
//         intersection: intersection(defMethods)(sArr),
//         hasDistinctElements: hasDistinctElements(sArr),
//         difference: difference(defMethods)(sArr),
//         union: union(defMethods)(sArr),
//         unionize: unionize(defMethods)(sArr),
//         push: push(instanceFunction)(sArr),
//     });

//     // \default instantiator
//     let defaultIFunc = (sArr = []) => Object.assign(Array.from(sArr),
//         defMethods(
//             sArr));

//     // exports
//     let setMixin = (instanceFunction = defaultIFunc) => (sArr = []) => ({
//         contains: contains(sArr),
//         hasSameSize: hasSameSize(sArr),
//         isSubset: isSubset(sArr),
//         isEquivalent: isEquivalent(sArr),
//         findEquivalentElement: findEquivalentElement(sArr),
//         intersects: intersects(sArr),
//         intersection: intersection(instanceFunction)(sArr),
//         hasDistinctElements: hasDistinctElements(sArr),
//         difference: difference(instanceFunction)(sArr),
//         union: union(instanceFunction)(sArr),
//         unionize: unionize(instanceFunction)(sArr),
//         push: push(instanceFunction)(sArr),
//         reassign: reassign(instanceFunction)(sArr)
//     });
// };
// 
// 
let absEquality = (query) => (curr) => comparitor(identity)(curr)(query);
let mutableSet = (eqFun) => {
    let contains = (context = []) => (query) => checkAny(eqFun(query))(
        context);
    let isSubset = subset(contains);
    let findEquivalentElement = findEq(eqFun);
    let intersects = intersector(contains);

    let isEquivalent = (context = []) => (altArr) =>
        isSubset(context)(altArr) && isSubset(altArr)(context);

    let hasDistinctElements = (context = []) => (altArr) =>
        not(isSubset(context)(altArr));

    // (sArr = []) => ({
    // contains: (query) => checkAny(eqFun(query))(sArr),
    // hasSameSize: hasSameSize(sArr),
    // isSubset: subset()(sArr),
    // isEquivalent: isEquivalent(sArr),
    // findEquivalentElement: findEquivalentElement(sArr),
    // intersects: intersects(sArr),
    // intersection: intersection(instanceFunction)(sArr),
    // hasDistinctElements: hasDistinctElements(sArr),
    // difference: difference(instanceFunction)(sArr),
    // union: union(instanceFunction)(sArr),
    // unionize: unionize(instanceFunction)(sArr),
    // push: push(instanceFunction)(sArr),
    // reassign: reassign(instanceFunction)(sArr)
    // });
}

// let isPresent = (query) => (context) => contains(context)(query);
module.exports = mutableSet;
// module.exports.isPresent = isPresent;
// module.exports.contains = contains;