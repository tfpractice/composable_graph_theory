let nativeProxy = require('./native_proxy');
let pushProxy = nativeProxy.pushProxy;
let containable = require('./containable');
let differable = require('./differable');
let intersectable = require('./intersectable');
let unionable = require('./unionable');
let settable = (eqFun) => {
	let xEquals = (el) => (arg) => !eqFun(el)(arg);
	let findEquivalent = (context) => (qElem) =>
		context.find(eqFun(qElem));
	let excludeElement = (context) => (qElem) =>
		context.filter(xEquals(qElem));

	let removeElement = (context) => (qElem) => {
		let eqIdx = sArr.findIndex(eqFun(qElem));
		return eqIdx > -1 && sArr.splice(eqIdx, 1);

	};
	let contains = (context) => (qElem) =>
		context.some(eqFun(qElem));
	let xContains = (context) => (qElem) =>
		context.some(xEquals(qElem));

	let intersects = (context) => (qArr) =>
		context.some(contains(qArr))
	let intersection = (context) => (qArr) =>
		context.filter(contains(qArr))

	let hasDistinctElements = (context) => (qArr) =>
		context.some(xContains(qArr))
	let difference = (context) => (qArr) =>
		context.filter(xContains(qArr))

	let union = (context) => (qArr) =>
		(context.concat(...difference(qArr)(context)));
	let unionize = (context) => (qArr) =>
		context = union(context)(qArr);
	let binaryUnion = (prev = [], next = []) => union(prev)(next);

	let push = (context) => (elem) =>
		xContains(sArr)(elem) ? (pushProxy(sArr)(elem)) : (sArr);

	let unaryFuncs = {
		contains: contains,
		hasSameSize: (context) => (qArr) => context.length === qArr.length,
		// isSubset: isSubset,
		// isEquivalent: isEquivalent,
		// findEquivalentElement: findEquivalentElement,
		intersects: intersects,
		intersection: intersection,
		hasDistinctElements: hasDistinctElements,
		difference: difference,
		union: union,
		unionize: unionize,
		push: push,
		removeElement: removeElement,
		excludeElement: excludeElement,
	};
	let binaryFuncs = {
		binaryUnion: binaryUnion
	}
	let curryFuncs = (context = []) =>
		Object.keys(unaryFuncs).reduce(
			(curried, fn) => Object.assign(curried, {
				[fn]: unaryFuncs[fn](context)
			}), {});

	return Object.assign(curryFuncs, unaryFuncs, binaryFuncs);
	// 
	// let contains =
}

module.exports = settable;