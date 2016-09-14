let isEmpty = (arr) => arr.length === 0;
let notEmpty = (arr) => arr.length !== 0;

let operators = {
	isEmpty: isEmpty,
	nonEmpty: notEmpty
};

let methods = (arr) => ({
	isEmpty: () => isEmpty(arr),
	notEmpty: () => notEmpty(arr)
});

let emptyable = (arr) =>
	Object.assign(methods(arr), operators);

// let emptyable = (arr) => ({
// 	isEmpty: () => isEmpty(arr)
// });
module.exports = emptyable;
module.exports.isEmpty = isEmpty;
module.exports.notEmpty = notEmpty;