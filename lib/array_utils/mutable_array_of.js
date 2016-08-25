let GUtils = require('../graph_utils');
let FUtils = require('../func_utils');
let kestrel = FUtils.combinators.kestrel;
let nonEnum = GUtils.nonEnum;
let compose = FUtils.compose;
let baseMixin = require('./base_mixin');
let factoryMixin = require('./factory_mixin');

let mutableArrayOf = (BaseClass) => (...mixins) => {
    let composite, construct, compKeys;
    let bMix = kestrel(baseMixin(BaseClass));
    let fMix = factoryMixin(spawn);

    composite = compose(bMix, fMix, ...mixins);

    construct = (sArr = []) =>
        Object.assign(Array.from(sArr), composite(sArr));

    compKeys = (sArr) =>
        Object.keys(composite(sArr));

    function spawn(sArr = []) {
        return nonEnum(construct(sArr))(...compKeys(sArr));
    }

    return {
        spawn: spawn
    };
};

module.exports = mutableArrayOf;