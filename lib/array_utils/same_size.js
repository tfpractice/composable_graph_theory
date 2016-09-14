let sameSize = (contextA) => (queryA) => contextA.length === queryA.length;
let notSameSize = (contextA) => (queryA) => contextA.length !== queryA.length;
let comparitor = require('../func_utils').comparitor;
let getSize = (a) => a.length;

let operators = {
	sameSize: sameSize,
	notSameSize: notSameSize
}

let methods = (contextA) => ({
	sameSize: sameSize(contextA),
	notSameSize: notSameSize(contextA)
});

let sameSizeable = (contextA) =>
	Object.assign(methods(contextA), operators);
// let hasSameSize = (contextA) => (queryA) =>
// 	comparitor(getSize)(contextA)(queryA);

// let asMethod = (contextA) => ({
// 	sameSize: hasSameSize(contextA)
// });

// let sameSize = (queryA = []) =>
// 	(contextA = []) => comparitor((a) => a.length)(queryA)(contextA);
module.exports = sameSizeable;
module.exports.sameSize = sameSize;
module.exports.notSameSize = notSameSize;
// module.exports = asMethod;
// module.exports.sameSize = sameSize;