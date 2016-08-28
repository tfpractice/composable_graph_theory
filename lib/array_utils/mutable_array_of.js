let GUtils = require('../graph_utils');
let FUtils = require('../func_utils');
let kestrel = FUtils.combinators.kestrel;
let nonEnum = GUtils.nonEnum;
let compose = FUtils.compose;
let baseMixin = require('./base_mixin');
let factoryMixin = require('./factory_mixin');

let mutableArrayOf = (...mixins) => {
    mixins.push(factoryMixin(spawn));
    let composite, construct, compKeys, operators;

    operators = mixins.reduce((comp, fn) => Object.assign(comp, fn), {});

    composite = compose(...mixins);

    construct = (sArr = []) => Object.assign(sArr, composite(sArr));

    compKeys = (sArr) => Object.keys(composite(sArr));

    function spawn(sArr = []) {
        return nonEnum(construct(sArr))(...compKeys(sArr));
    }
    return Object.assign(operators, {
        spawn: spawn
    });

};

module.exports = mutableArrayOf;