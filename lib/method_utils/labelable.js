let label = (lFun) => (lState) => lFun(lState);
let getLabel = (obj) => obj.label();
let sameLabel = (obj) => obj.sameLabel;

let operators = {
    getLabel: getLabel,
    sameLabel: sameLabel,
};

let methods = (lFun) => (lState) => ({
    isLabelable: () => true,
    label: () => label(lFun)(lState),
    sameLabel: (arg) => lFun(lState) === getLabel(arg),
});

let labelable = (lFun) =>
    Object.assign(methods(lFun), operators);
let compareLabel = (lFun) => (s0) => (s1) =>
	lFun(s0) === lFun(s1);

let sOps = (lFun) => ({
	getLabel: label(lFun),
	sameLabel: compareLabel(lFun),
});

let sMethods = (lFun) => (s0) => ({
	isLabelable: () => true,
	label: () => label(lFun)(s0),
	sameLabel: compareLabel(lFun)(s0),
});

let sLabelable = (lFun) =>
	Object.assign(sMethods(lFun), sOps(lFun));
module.exports = labelable;
module.exports.getLabel = getLabel;
module.exports.sameLabel = sameLabel;
module.exports.stateOps = sLabelable;
