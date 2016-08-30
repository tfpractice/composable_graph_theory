let getLabel = (obj) => obj.label();
let sameLabel = (context) => (arg) => getLabel(context) === getLabel(arg);

let labelize = (fun) => (host) => ({
    isLabelable: () => true,
    label: () => fun(host),
    sameLabel: (arg) => fun(host) === getLabel(arg)

});

module.exports = labelize;
module.exports.getLabel = getLabel;
module.exports.sameLabel = sameLabel;