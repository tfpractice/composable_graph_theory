let isValid = (vFunc) => (vState) => (arg) => vFunc(vState)(arg);
let notValid = (vFunc) => (vState) => (arg) => !vFunc(vState)(arg);
let objValid = (obj) => obj.isValid;
let objNotValid = (obj) => obj.notValid;

let operators = {
	isValid: objValid,
	notValid: objNotValid,

};
let methods = (vFunc) => (vState) => ({
	isValid: isValid(vFunc)(vState),
	notValid: notValid(vFunc)(vState),
});

let validatable = (vFunc) =>
	Object.assign(methods(vFunc), operators);

let stateValidity = (vFunc) => (s0) => (s1) =>
	vFunc(s0)(s1);

let stateXValidity = (vFunc) => (s0) => (s1) =>
	!vFunc(s0)(s1);

let sOps = (vFunc) => ({
	isValid: stateValidity(vFunc),
	notValid: stateXValidity(vFunc),
});

let sMethods = (vFunc) => (s0) => ({
	isValid: stateValidity(vFunc)(s0),
	notValid: stateXValidity(vFunc)(s0),
});

let sValidatable = (vFunc) =>
	Object.assign(sMethods(vFunc), sOps(vFunc));

module.exports = validatable;
module.exports.stateOps = sValidatable;