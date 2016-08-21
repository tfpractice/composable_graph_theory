let Node = require('./node');
let NodeArray = require('./node_array');
let Utils = require('./graph_utils');
let ArrayUtils = require('./array_utils');
let funcUtils = require('./func_utils');
let MethUtils = require('./method_utils');
let checkAny = ArrayUtils.checkAny;
let composer = ArrayUtils.composeMixin;
let unaryCall = funcUtils.unaryCall;
let labelize = MethUtils.labelize;
let nodify = MethUtils.nodify;
let toStringify = MethUtils.toStringify;
let typify = MethUtils.typify;
let weighable = MethUtils.weighable;

let tFunc = (state) => 'Edge';
let lFunc = (state) => state.nodes.reduce((str, n, id, a) => (id < a.length -
        1) ?
    (str + n.label() + "::") : str + n.label(), "");
let wFunc = (state) => state.weight;
let nFunc = (state) => NodeArray.instance(state.nodes);
let sFunc = (state) => `[ Edge ${lFunc(state)} ]`;

let labelMaker = labelize(lFunc);
let weightMaker = weighable(wFunc);
let nodeMaker = nodify(nFunc);
let stringMaker = toStringify(sFunc);
let typeMaker = typify(tFunc);

let compareNodes = (state) => ({
    hasSameNodes: (argEdge) => NodeArray.instance(state.nodes)
        .isEquivalent(argEdge.nodes())
});
let compareLabel = (state) => ({
    hasSameName: (argEdge) => lFunc(state) === argEdge.label()
});
let compareWeight = (state) => ({
    hasSameWeight: (argEdge) => state.weight === argEdge.weight()
})
let equalityChecker = (state) => ({
    isEquivalent: (argEdge) => compareNodes(state)
        .hasSameNodes(argEdge)
})
let hasNode = (state) => ({
    containsNode: (nodeArg) => NodeArray.instance(state.nodes)
        .contains(nodeArg)
});
let nabeMaker = (state) => ({
    getNeighbor: (nodeArg) => NodeArray.instance(state.nodes)
        .find(n => !n.isEquivalent(nodeArg))
});
let neighborArray = (state) => ({
    nabeArray: (xNode) => NodeArray.instance(state.nodes)
        .excludeElement(xNode)
});

// instance operators/accessors
let getLabel = (edge) => edge.label();
let getWeight = (edge) => edge.weight();
let getNodes = (edge) => edge.nodes();
let containsNode = (node) => (edge) => edge.containsNode(node);
let containsNodes = (...nodes) => (edge) =>
    nodes.map(containsNode)
    .every(unaryCall(edge))
let getNeighborArray = (nabe) => (edge) => edge.getNeighbor(nabe)
let hasSameNodes = (argEdge) => (hostEdge) => hostEdge.nodes()
    .isEquivalent(argEdge.nodes());
let isEquivalent = (argEdge) => (hostEdge) => hasSameNodes(
    hostEdge)(argEdge);
let hasSameWeight = (argEdge) => (hostEdge) => host.weight() ===
    argEdge.weight();
let stateFuncs = [labelMaker, weightMaker, typeMaker, nodeMaker,
    neighborArray, compareWeight, equalityChecker, stringMaker,
    nabeMaker, compareLabel,
    compareNodes, hasNode
];

// constructor
let Edge = (n0, n1, w = 0) => {
    let state = {
        nodes: [n0, n1],
        weight: w
    };

    let mixObj = composer(...stateFuncs);
    return Object.assign({}, mixObj(state));
};

Edge.toString = function() {
    return "Edge";
};

module.exports = Edge
module.exports.getNodes = getNodes;
module.exports.getWeight = getWeight;
module.exports.getLabel = getLabel;
module.exports.containsNode = containsNode;
module.exports.containsNodes = containsNodes;
module.exports.hasSameNodes = hasSameNodes;
// module.exports.containsNodes = containsNodes;
// module.exports.containsNodes = containsNodes;
//