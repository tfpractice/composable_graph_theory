let label = (lFun) => (lState) => () => lFun(lState);
let getLabel = (obj) => obj.label();
let sameLabel = (context) => (arg) => getLabel(context) === getLabel(arg);

let operators = (lFun) => ({
    getLabel: getLabel,
    sameLabel: sameLabel
});

let methods = (lFun) => (lState) => ({
    isLabelable: () => true,
    label: label(lFun)(lState),
    sameLabel: (arg) => lFun(lState) === getLabel(arg)
});

let labelable = (lFun) => {
    return Object.assign(methods(lFun), operators(lFun));
};

module.exports = labelable;
module.exports.getLabel = getLabel;
module.exports.sameLabel = sameLabel;