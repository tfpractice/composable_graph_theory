let GUtils = require('../graph_utils');
let FUtils = require('../func_utils');
let checkAll = require('./check_all');
let checkAny = require('./check_any');
let hasSameSize = require('./same_size');
let subset = require('./subset');
let nativeProxy = require('./native_proxy');
let pushProxy = nativeProxy.pushProxy;
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
    let setify, curryFuncs, keys, construct, funcs;
    let contains = (context = []) => (query) => checkAny(eqFun(query))(
        context);
    let isSubset = subset(contains);
    let findEquivalentElement = findEq(eqFun);
    let intersects = intersector(contains);
    let isEquivalent = (context = []) => (altArr = []) =>
        isSubset(context)(altArr) && isSubset(altArr)(context);
    let hasDistinctElements = (context = []) => (altArr = []) =>
        not(isSubset(context)(altArr));
    let intersection = (sArr = []) => (altArr = []) =>
        (sArr.filter(contains(altArr)));
    // setify(sArr.filter(contains(altArr)));
    let difference = (sArr = []) => (altArr = []) =>
        (sArr.filter(n => !contains(altArr)(n)));
    // setify(sArr.filter(n => !contains(altArr)(n)));
    let union = (sArr = []) => (altArr = []) =>
        (sArr.concat(...difference(altArr)(sArr)));
    // setify(sArr.concat(...difference(altArr)(sArr)));
    let unionize = (sArr = []) => (altArr = []) =>
        sArr = union(sArr)(altArr);
    let push = (sArr = []) => (elem) =>
        not(contains(sArr)(elem)) ? (nativeProxy.pushProxy(sArr)(elem)) :
        (sArr);
    // setify(sArr);

    funcs = {
        contains: contains,
        hasSameSize: hasSameSize,
        isSubset: isSubset,
        isEquivalent: isEquivalent,
        findEquivalentElement: findEquivalentElement,
        intersects: intersects,
        intersection: intersection,
        hasDistinctElements: hasDistinctElements,
        difference: difference,
        union: union,
        unionize: unionize,
        push: push
    };

    curryFuncs = (context = []) => Object.keys(funcs).reduce(
        (curried, fName) => Object.assign(curried, {
            [fName]: funcs[fName](context)
        }), {});

    return Object.assign(curryFuncs, funcs);
    // console.log(curryFuncs.toString());

    // console.log(Object.keys(curryFuncs));

    // construct = (sArr = []) => Object.assign(sArr, curryFuncs(sArr));
    // keys = (sArr) => Object.keys(curryFuncs(sArr));
    // setify = (sArr = []) =>
    //     nonEnum(construct(sArr))(...keys(sArr));
    // return curryFuncs;
    // return curryFuncs;
}

// 
let isPresent = (query) => (context) => contains(context)(query);
module.exports = mutableSet;
// module.exports.isPresent = isPresent;
// module.exports.contains = contains;