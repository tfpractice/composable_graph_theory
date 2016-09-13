let intersection = (matchFunc) => (context) => (query) =>
	context.filter(matchFunc(query));

let intersects = (matchFunc) => (context) => (query) =>
	context.some(matchFunc(query));

let isSubset = (matchFunc) => (context) => (query) =>
	context.every(matchFunc(query));

let xIntersects = (matchFunc) => (context) => (query) =>
	!intersects(matchFunc)(context)(query)

let objIntersection = (obj) => obj.intersection;
let objIntersects = (obj) => obj.intersects;
let objXIntersects = (obj) => obj.notIntersects;

let curriedOps = (matchFunc) => ({
	intersection: intersection(matchFunc),
	intersects: intersects(matchFunc),
	notIntersects: xIntersects(matchFunc),
	isSubset: isSubset(matchFunc)
});
let operators = {
	intersects: objIntersects,
	notIntersects: objXIntersects,
	intersection: objIntersection
};

let methods = (matchFunc) => (context) => ({
	intersection: intersection(matchFunc)(context),
	intersects: intersects(matchFunc)(context),
	notIntersects: xIntersects(matchFunc)(context),
	isSubset: isSubset(matchFunc)(context)

});

let intersectable = (matchFunc) =>
	Object.assign(methods(matchFunc), curriedOps(matchFunc));

module.exports = intersectable;