let label = (lFun) => (lState) => lFun(lState);
let getLabel = (obj) => obj.label();
let sameLabel = (obj) => obj.sameLabel;

let operators = {
    getLabel: getLabel,
    sameLabel: sameLabel
};

let methods = (lFun) => (lState) => ({
    isLabelable: () => true,
    label: () => label(lFun)(lState),
    sameLabel: (arg) => lFun(lState) === getLabel(arg)
});

let labelable = (lFun) =>
    Object.assign(methods(lFun), operators);

module.exports = labelable;
module.exports.getLabel = getLabel;
module.exports.sameLabel = sameLabel;