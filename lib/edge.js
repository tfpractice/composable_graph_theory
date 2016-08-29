let Node = require('./node');
let NodeArray = require('./node_array');
let Utils = require('./graph_utils');
let ArrayUtils = require('./array_utils');
let funcUtils = require('./func_utils');
let MethUtils = require('./method_utils');
let kestrel = funcUtils.combinators.kestrel;
let checkAny = ArrayUtils.checkAny;
let composer = ArrayUtils.composeMixin;
let comparitor = funcUtils.comparitor;
let unaryCall = funcUtils.unaryCall;
let labelize = MethUtils.labelize;
let nodify = MethUtils.nodify;
let toStringify = MethUtils.toStringify;
let typify = MethUtils.typify;
let weighable = MethUtils.weighable;

// accessors
let tFunc = (state) => 'Edge';
let lFunc = (state) => state.nodes.reduce((str, n, id, a) => (id < a.length -
        1) ?
    (str + n.label() + "::") : str + n.label(), "");
let wFunc = (state) => state.weight;
let nFunc = (state) => NodeArray.spawn(state.nodes);
let sFunc = (state) => `[ Edge ${lFunc(state)} ]`;
let labelMaker = labelize(lFunc);
let weightMaker = weighable(wFunc);
let nodeMaker = nodify(nFunc);
let stringMaker = toStringify(sFunc);
let typeMaker = typify(tFunc);

// operators
let getLabel = (edge) => edge.label();
let getWeight = (edge) => edge.weight();
let getNodes = (edge) => edge.nodes();
let cWeight = comparitor(getWeight);
let cLabel = comparitor(getLabel);
let cNodes = (e0) => (e1) => NodeArray.isEquivalent(getNodes(e0))(getNodes(
    e1))
let getNeighbors = (edge) => NodeArray.excludeElement(getNodes(edge));
let getNeighbor = (edge) => (exel) => getNeighbors(edge)(exel).pop();

let containsNode = (node) => (edge) => edge.containsNode(node);

let checkForNode = (elem) => (edge) => NodeArray.isPresent(elem)(getNodes(
    edge));
let evalNodes = (queryEdge) => (contextEdge) =>
    NodeArray.isEquivalent(getNodes(queryEdge))(getNodes(contextEdge))

let containsNodes = (...nodes) => (edge) =>
    nodes.map(containsNode).every(unaryCall(edge))
let getNeighborArray = (nabe) => (edge) => edge.getNeighbor(nabe)
let hasSameNodes = (argEdge) => (hostEdge) =>
    getNodes(hostEdge).isEquivalent(getNodes(argEdge));

// state Functions
let compareNodes = (state) => ({
    hasSameNodes: evalNodes(nodeMaker(state))
});
let compareLabel = (state) => ({
    hasSameName: cLabel(labelMaker(state))
});
let compareWeight = (state) => ({
    hasSameWeight: cWeight(weightMaker(state))
})
let equalityChecker = (state) => ({
    isEquivalent: compareNodes(state).hasSameNodes
})
let hasNode = (state) => ({
    containsNode: NodeArray.contains(nFunc(state))
});
let nabeMaker = (state) => ({
    getNeighbor: getNeighbor(nodeMaker(state))
});
let neighborArray = (state) => ({
    nabeArray: getNeighbors(nodeMaker(state))
});

let EdgeFactory = (state) => ({
    weight: kestrel(wFunc(state)),
    label: kestrel(lFunc(state)),
    type: kestrel(tFunc(state)),
    nodes: kestrel(nFunc(state)),
    toString: kestrel(sFunc(state)),
    hasSameNodes: evalNodes(nodeMaker(state)),
    hasSameName: cLabel(labelMaker(state)),
    hasSameWeight: cWeight(weightMaker(state)),
    isEquivalent: compareNodes(state).hasSameNodes,
    containsNode: NodeArray.contains(nFunc(state)),
    getNeighbor: getNeighbor(nodeMaker(state)),
    nabeArray: getNeighbors(nodeMaker(state)),

})
let isEquivalent = hasSameNodes;
let hasSameWeight = comparitor(getWeight);

let stateFuncs = [labelMaker, weightMaker, typeMaker, nodeMaker,
    neighborArray, compareWeight, equalityChecker, stringMaker,
    nabeMaker, compareLabel,
    compareNodes, hasNode
];
let Edge = (n0, n1, w = 0) => {
    let state = {
        nodes: [n0, n1],
        weight: w
    };

    let mixObj = composer(...stateFuncs);

    return EdgeFactory(state);
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
module.exports.checkForNode = checkForNode;
module.exports.evalNodes = evalNodes;