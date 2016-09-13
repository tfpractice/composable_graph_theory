let hasDistinctElements = (dfunc) => (contextA) => (queryA) =>
	contextA.some(dfunc(queryA));

let noDistinctElements = (dfunc) => (contextA) => (queryA) =>
	!hasDistinctElements(dfunc)(contextA)(queryA);

let difference = (dfunc) => (contextA) => (queryA) =>
	contextA.filter(dfunc(queryA));

let union = (dfunc) => (contextA) => (queryA) => {
	console.log(contextA.toString());
	return contextA.concat(difference(dfunc)(queryA)(contextA));
}
let unite = (dfunc) => (contextA) => (queryA) =>
	contextA.push(difference(dfunc)(queryA)(contextA));

let objDiff = obj => obj.difference;
let distinctOp = obj => obj.hasDistinctElements;
let xDistinctOp = obj => obj.noDistinctElements;

let operators = {
	hasDistinctElements: distinctOp,
	noDistinctElements: xDistinctOp,
	difference: objDiff,
};

let curriedOps = (dfunc) => ({
	difference: difference(dfunc),
	hasDistinctElements: hasDistinctElements(dfunc),
	noDistinctElements: noDistinctElements(dfunc),
	union: union(dfunc),
	unite: unite(dfunc)

});

let methods = (dfunc) => (contextA) => ({
	difference: difference(dfunc)(contextA),
	hasDistinctElements: hasDistinctElements(dfunc)(contextA),
	noDistinctElements: noDistinctElements(dfunc)(contextA),
	union: union(dfunc)(contextA),
	unite: unite(dfunc)(contextA)

});

let differable = (dfunc) =>
	Object.assign(methods(dfunc), curriedOps(dfunc));

module.exports = differable;