let weight = (wFunc) => (wState) => wFunc(wState);
let getWeight = (wObj) => wObj.weight();
let sameWeight = (wObj) => wObj.sameWeight;

let operators = {
	getWeight: getWeight,
	sameWeight: sameWeight,
};
let methods = (wFunc) => (wState) => ({
	weight: () => wFunc(wState),
	sameWeight: (arg) => wFunc(wState) === getWeight(arg),
});
// let oStruct = (a1, a2, ...props) => ({ a1, a2, props });
// console.log(oStruct('apple', 'beta', oStruct('carlie', 'david')));
let weighable = (wFunc) => Object.assign(methods(wFunc), operators);

let compareWeight = (wFunc) => (s0) => (s1) =>
	wFunc(s0) === wFunc(s1);

let sOps = (wFunc) => ({
	weight: weight(wFunc),
	sameWeight: compareWeight(wFunc),
});

let sMethods = (wFunc) => (s0) => ({
	weight: () => weight(wFunc)(s0),
	sameWeight: compareWeight(wFunc)(s0),
});

let sWeighable = (wFunc) =>
	Object.assign(sMethods(wFunc), sOps(wFunc));

module.exports = weighable;
module.exports.getWeight = getWeight;
module.exports.sameWeight = sameWeight;
module.exports.stateOps = sWeighable;