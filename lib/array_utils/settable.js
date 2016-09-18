let nativeProxy = require('./native_proxy');
let pushProxy = nativeProxy.pushProxy;
let containable = require('./containable');
let differable = require('./differable');
let intersectable = require('./intersectable');
let unionable = require('./union');
let factory = require('../method_utils').factory;

let settable = (eqFun) => {
	let contains = containable(eqFun);
	let intersects = intersectable(contains.contains);
	let difference = differable(contains.notContains);
	let union = unionable(difference);
	let sFact = factory(contains, intersects, difference, union);
	return sFact;
};

module.exports = settable;