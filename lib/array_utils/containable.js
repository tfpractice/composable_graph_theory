let contains = (cFunc) => (context) => (query) =>
	context.some(cFunc(query));
let notContains = (cFunc) => (context) => (query) =>
	!context.some(cFunc(query));
let objContains = obj => obj.contains;
let objNotContains = obj => obj.notContains;

let operators = {
	contains: objContains,
	notContains: objNotContains
};

let methods = (cFunc) => (context) => ({
	contains: contains(cFunc)(context),
	notContains: notContains(cFunc)(context)
});

let containable = (cFunc) =>
	Object.assign(methods(cFunc), operators);

module.exports = containable;