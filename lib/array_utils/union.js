let union = (diffFunc) => (context) => (queryA) =>
	context.concat(diffFunc(queryA)(context));

let unite = (diffFunc) => (context) => (queryA) =>
	context.push(...diffFunc(queryA)(context));

let unionReduce = (diffFunc) => (context, queryA) =>
	union(diffFunc)(context)(queryA);
let binaryOps = (diffFunc) => ({
	unionReduce: unionReduce(diffFunc)
});

let operators = (diffFunc) => ({
	union: union(diffFunc),
	unite: unite(diffFunc)

});

let methods = (diffFunc) => (context) => ({
	union: union(diffFunc)(context),
	unite: unite(diffFunc)(context)
});

let unionable = (diffFunc) =>
	Object.assign(methods(diffFunc), operators(diffFunc), binaryOps(diffFunc));

module.exports = unionable;