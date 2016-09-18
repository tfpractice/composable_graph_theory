let nativeProxy = require('./native_proxy');
let pushProxy = nativeProxy.pushProxy;

let contains = (eqFunc) => (context) => (query) =>
	context.some(eqFunc(query));

let notContains = (eqFunc) => (context) => (query) =>
	!context.some(eqFunc(query));

let push = (eqFunc) => (context) => (query) =>
	notContains(eqFunc)(context)(query) ? (pushProxy(context)(query)) : (context);

let findEquivalent = (eqFunc) => (context) => (query) =>
	context.find(eqFunc(query));

let indexEquivalent = (eqFunc) => (context) => (query) =>
	context.findIndex(eqFunc(query));

let excludeElement = (eqFunc) => (context) => (query) =>
	context.filter(el => !eqFunc(query)(el));

let removeElement = (eqFunc) => (context) => (query) =>
	contains(eqFunc)(context)(query) ?
	context.splice(indexEquivalent(eqFunc)(context)(query), 1) : [];

let curryOps = (eqFunc) => ({
	contains: contains(eqFunc),
	notContains: notContains(eqFunc),
	findEquivalent: findEquivalent(eqFunc),
	indexEquivalent: indexEquivalent(eqFunc),
	excludeElement: excludeElement(eqFunc),
	removeElement: removeElement(eqFunc),
	push: push(eqFunc),
});

let methods = (eqFunc) => (context) => ({
	contains: contains(eqFunc)(context),
	notContains: notContains(eqFunc)(context),
	findEquivalent: findEquivalent(eqFunc)(context),
	indexEquivalent: indexEquivalent(eqFunc)(context),
	excludeElement: excludeElement(eqFunc)(context),
	removeElement: removeElement(eqFunc)(context),
	push: push(eqFunc)(context),
});

let containable = (eqFunc) =>
	Object.assign(methods(eqFunc), curryOps(eqFunc));

module.exports = containable;