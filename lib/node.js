const Utils = require('./graph_utils');
const MethUtils = require('./method_utils');
const FuncUtils = require('./func_utils');
const labelize = MethUtils.labelize;
const equalize = MethUtils.equalize;
const datafy = MethUtils.datafy;
const typify = MethUtils.typify;
const pipeline = Utils.pipeline;
const modify = Utils.modify;
const mixin = Utils.mixin;
const comparitor = FuncUtils.comparitor;

// state accessors
let label_accessor = (state) => state.label;
let equal_accessor = (argObj) => argObj.label();
let data_accessor = (state) => state.data;
let type_accessor = (state) => 'Node';

// state_instance operators
let compareLabels = (state) => (argNode) => label_accessor(state) === getLabel(argNode);

// method_makers
let label_maker = labelize(label_accessor);
let data_maker = datafy(data_accessor);
let type_maker = typify(type_accessor);
let eqMaker = equalize(compareLabels)



let nodePipeline = (state, nodeObject = {}) => pipeline(mixin(nodeObject)((type_maker)(state)), modify(label_maker)(state), modify(eqMaker)(state), modify(data_maker)(state))

let Node = (label, data = {}) => {
    let iState = {
        label, data
    };
    let newNode = {};
    return nodePipeline(iState);
};
Node.toString = function() {
    return "Node";
};


// instance operators/accessors
let getLabel = (node) => node.label();
let getData = (node) => node.data();
let getType = (node) => node.type();
let shareLabel = (n1) => (n2) => comparitor(getLabel)(n1)(n2);

// exports
module.exports = Node;
module.exports.getLabel = getLabel;
module.exports.getData = getData;
module.exports.getType = getType;
module.exports.shareLabel = shareLabel;
module.exports.areEquivalent = shareLabel;