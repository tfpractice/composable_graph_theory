let label = (lFun) => (lState) => () => lFun(lState);
let getLabel = (obj) => obj.label();
let sameLabel = (context) => (arg) => getLabel(context) === getLabel(arg);

let labelize = (lFun) => (lState) => ({
    isLabelable: () => true,
    label: label(lFun)(lState),
    sameLabel: (arg) => label(lFun)(lState) === getLabel(arg)

});

module.exports = labelize;
module.exports.getLabel = getLabel;
module.exports.sameLabel = sameLabel;