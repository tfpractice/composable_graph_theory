let FUtils = require('../func_utils');
let kestrel = FUtils.combinators.kestrel;
let comparitor = FUtils.comparitor;

let typify = (accessor) => (obj) => ({
    type: kestrel(accessor(obj)),
    sameType: (arg) => accessor(obj) === getType(arg)
});

let getType = (obj) => obj.type();
let sameType = comparitor(getType);

module.exports = typify;
module.exports.getType = getType;
module.exports.sameType = sameType;