const Utils = require('./graph_utils');
const MethUtils = require('./method_utils');
const FuncUtils = require('./func_utils');
const labelize = MethUtils.labelize;
const equalize = MethUtils.equalize;
const datafy = MethUtils.datafy;
const typify = MethUtils.typify;
const curry_equality = Utils.curry_equality;
const pipeline = Utils.pipeline;
const modify = Utils.modify;
const mixin = Utils.mixin;
const comparitor = FuncUtils.comparitor;

// state accessors
let label_accessor = (state) => state.label;
let equal_accessor = (argObj) => argObj.label();
let data_accessor = (state) => state.data;
let type_accessor = (state) => 'Node';

let label_maker = labelize(label_accessor);
let data_maker = datafy(data_accessor);
let type_maker = typify(type_accessor);
let compare_to_host = curry_equality(equal_accessor).compareToHost;

// instance operators/accessors
let getLabel = (node) => node.label();
let getData = (node) => node.data();
let getType = (node) => node.type();
let areEquivalent = (argNode) => (srcNode) => srcNode.isEquivalent(argNode);


let shareLabel = (n1) => (n2) => comparitor(getLabel)(n1)(n2);
let eMaker = (state) => ({
    isEquivalent: (argNode) => shareLabel((label_maker)(state))(argNode)
    // isEquivalent: (argNode) => comparitor(getLabel)((label_maker)(state))(argNode)
})
let s0 = {
    label: "s0"
};
let s1 = {
    label: "s0"
};
let eNode0 = Object.assign({}, label_maker(s0), eMaker(s0));
let eNode1 = Object.assign({}, label_maker(s1), eMaker(s1));
console.log(eNode0);
console.log(eNode1.isEquivalent.toString());
console.log(eNode0.isEquivalent(eNode1));
let nodePipeline = (state, nodeObject = {}) => pipeline(mixin(nodeObject)((type_maker)(state)), modify(label_maker)(state), modify(data_maker)(state), modify(compare_to_host)(nodeObject))

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
module.exports = Node;
module.exports.getLabel = getLabel;
module.exports.getData = getData;
module.exports.getType = getType;
module.exports.areEquivalent = areEquivalent;