const Utils = require('./graph_utils');
const MethUtils = require('./method_utils');
const FuncUtils = require('./func_utils');
const ArrayUtils = require('./array_utils');
const compose = FuncUtils.compose;
const labelize = MethUtils.labelize;
const equalize = MethUtils.equalize;
const datafy = MethUtils.datafy;
const typify = MethUtils.typify;
const pipeline = Utils.pipeline;
const modify = Utils.modify;
const mixin = Utils.mixin;
const comparitor = FuncUtils.comparitor;

// state accessors
let typeAccessor = (state) => 'Node';
let dataAccessor = (state) => state.data;
let labelAccessor = (state) => state.label;
let equalAccessor = (argObj) => argObj.label();

// state_instance operators
let compareLabels = (state) => (argNode) => labelAccessor(state) === getLabel(argNode);

// methodMakers
let typeMaker = typify(typeAccessor);
let dataMaker = datafy(dataAccessor);
let labelMaker = labelize(labelAccessor);
let eqMaker = equalize(compareLabels)


let composeNode = compose(typeMaker, dataMaker, labelMaker, eqMaker);
let Node = (label, data = {}) => {
    let iState = {
        label, data
    };
    return composeNode(iState);

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