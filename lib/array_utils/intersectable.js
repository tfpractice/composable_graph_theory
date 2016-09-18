let intersection = (matchFunc) => (context) => (query) =>
	context.filter(matchFunc(query));

let intersects = (matchFunc) => (context) => (query) =>
	context.some(matchFunc(query));

let isSubset = (matchFunc) => (context) => (query) =>
	context.every(matchFunc(query));

let isEquivalent = (matchFunc) => (context) => (query) =>
	isSubset(matchFunc)(context)(query) && isSubset(matchFunc)(query)(context);

let notEquivalent = (matchFunc) => (context) => (query) =>
	!isEquivalent(matchFunc)(context)(query);

let xIntersects = (matchFunc) => (context) => (query) =>
	!intersects(matchFunc)(context)(query);

let objIntersection = (obj) => obj.intersection;
let objIntersects = (obj) => obj.intersects;
let objXIntersects = (obj) => obj.notIntersects;

let curriedOps = (matchFunc) => ({
	intersection: intersection(matchFunc),
	intersects: intersects(matchFunc),
	notIntersects: xIntersects(matchFunc),
	isSubset: isSubset(matchFunc),
	isEquivalent: isEquivalent(matchFunc),
	notEquivalent: notEquivalent(matchFunc),
});

let operators = {
	intersects: objIntersects,
	notIntersects: objXIntersects,
	intersection: objIntersection,
};

let methods = (matchFunc) => (context) => ({
	intersection: intersection(matchFunc)(context),
	intersects: intersects(matchFunc)(context),
	notIntersects: xIntersects(matchFunc)(context),
	isSubset: isSubset(matchFunc)(context),
	isEquivalent: isEquivalent(matchFunc)(context),
	notEquivalent: notEquivalent(matchFunc)(context),

});

let intersectable = (matchFunc) =>
	Object.assign(methods(matchFunc), curriedOps(matchFunc));

module.exports = intersectable;