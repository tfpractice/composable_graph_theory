// let union = (uFunc) => (context) => (queryA) =>
// 	context.concat(uFunc(queryA));

// let unite = (uFunc) => (context) => (queryA) =>
// 	context.push(union(uFunc)(context)(queryA));

// let operators = (uFunc) => ({
// 	union: union(uFunc),
// 	unite: unite(uFunc)

// });
// let methods = (uFunc = defUnion) => (context) => ({
// 	union: union(uFunc)(context),
// 	unite: unite(uFunc)(context)
// });
// let unionable = (uFunc) =>
// 	Object.assign(methods(uFunc), operators(uFunc));

let defUnion = (context) => (query) =>
	context.toString().concat(query.toString());

let union = (uFunc = defUnion) => (context) => (query) =>
	uFunc(context)(query);

let unionable = (uFunc = defUnion) => (context) => ({
	union: union(uFunc)(context)
});

module.exports = unionable;
module.exports.union = union;