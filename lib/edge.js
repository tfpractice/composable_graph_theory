let Node = require('./node');
let NodeArray = require('./node_array');
let Utils = require('./graph_utils');
let AUtils = require('./array_utils');
let FUtils = require('./func_utils');
let MUtils = require('./method_utils');
let kestrel = FUtils.combinators.kestrel;
let checkAny = AUtils.checkAny;
let composer = AUtils.composeMixin;
let comparitor = FUtils.comparitor;
let unaryCall = FUtils.unaryCall;
let labelize = MUtils.labelize;
let nodify = MUtils.nodify;
let toStringify = MUtils.toStringify;
let typify = MUtils.typify;
let weighable = MUtils.weighable;

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
// console.log(nFunc);
let stringMaker = toStringify(sFunc);
let typeMaker = typify(tFunc);

// operators
let getLabel = (edge) => edge.label();

let getWeight = (edge) => edge.weight();
// let getWeight = weighable.getWeight;
let getNodes = (edge) => edge.nodes();

let hasSameWeight = comparitor(getWeight);

let cLabel = comparitor(getLabel);

let cNodes = (e0) => (e1) => NodeArray.isEquivalent(getNodes(e0))(getNodes(
    e1))

let getNeighbors = (edge) => NodeArray.excludeElement(getNodes(edge));

let getNeighbor = (edge) => (exel) => getNeighbors(edge)(exel).pop();

let containsNode = (node) => (edge) => edge.containsNode(node);

let checkForNode = (elem) => (edge) =>
    NodeArray.isPresent(elem)(getNodes(edge));

let evalNodes = (queryEdge) => (contextEdge) =>
    NodeArray.isEquivalent(getNodes(queryEdge))(getNodes(contextEdge));

let containsNodes = (...nodes) => (edge) =>
    nodes.map(containsNode)
    .every(unaryCall(edge));

let getNeighborArray = (nabe) => (edge) => edge.getNeighbor(nabe);

let hasSameNodes = (argEdge) => (hostEdge) =>
    getNodes(hostEdge)
    .isEquivalent(getNodes(argEdge));

let intersects = (contextEdge) => (queryEdge) =>
    NodeArray.intersects(getNodes(contextEdge))(getNodes(queryEdge));
let isEquivalent = hasSameNodes;
// let hasSameWeight = comparitor(getWeight);
// state Functions
let compareNodes = (state) => ({
    hasSameNodes: evalNodes(nodeMaker(state))
});
let compareLabel = (state) => ({
    hasSameLabel: cLabel(labelMaker(state))
});
let compareWeight = (state) => ({
    hasSameWeight: hasSameWeight(weightMaker(state))
});
let equalityChecker = (state) => ({
    isEquivalent: compareNodes(state)
        .hasSameNodes
});
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
    // data methods
    weight: kestrel(wFunc(state)),
    label: kestrel(lFunc(state)),
    type: kestrel(tFunc(state)),
    nodes: kestrel(nFunc(state)),
    toString: kestrel(sFunc(state)),
    // comparitors
    hasSameNodes: evalNodes(nodeMaker(state)),
    hasSameLabel: cLabel(labelMaker(state)),
    hasSameWeight: hasSameWeight(weightMaker(state)),
    isEquivalent: compareNodes(state).hasSameNodes,
    // array methods
    containsNode: NodeArray.contains(nFunc(state)),
    getNeighbor: getNeighbor(nodeMaker(state)),
    nabeArray: getNeighbors(nodeMaker(state)),
    intersectsEdge: intersects(nodeMaker(state))

});

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
module.exports.hasSameWeight = hasSameWeight;
module.exports.hasSameLabel = cLabel;
module.exports.hasSameNodes = cNodes;
module.exports.containsNode = containsNode;
module.exports.containsNodes = containsNodes;
module.exports.checkForNode = checkForNode;
module.exports.evalNodes = evalNodes;