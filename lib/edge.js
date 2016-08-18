let Node = require('./node');
let NodeArray = require('./node_array');
let Utils = require('./graph_utils');
let ArrayUtils = require('./array_utils');
let labelize = Utils.labelize;
let composer = ArrayUtils.composeMixin;

let n0 = Node("n0");
let n1 = Node("n1");

let l_func = (state) => state.nodes.reduce((str, n, id, a) => (id < a.length - 1) ? (str + n.label() + "::") : str + n.label(), "");
let lab_maker = labelize(l_func);

let getNodes = (edge) => edge.nodes();
let nodify = (state) => ({
    nodes: () => NodeArray.instance(state.nodes)
});

let hasSameNodes = (hostEdge) => (argEdge) => host.nodes().isEquivalent(argEdge.nodes());
let isEquivalent = (hostEdge) => (argEdge) => hasSameNodes(hostEdge)(argEdge);
let hasSameWeight = (hostEdge) => (argEdge) => host.weight() === argEdge.weight();

let compareNodes = (state) => ({
    hasSameNodes: (argEdge) => NodeArray.instance(state.nodes).isEquivalent(argEdge.nodes())
});
let getLabel = (edge) => edge.label();
let compareLabel = (state) => ({
    hasSameName: (argEdge) => l_func(state) === argEdge.label()
});
// let getWeight = (edge) => edge.weight();
let compareWeight = (state) => ({
    hasSameWeight: (argEdge) => state.weight === argEdge.weight()
})
let equalityChecker = (state) => ({
    isEquivalent: (argEdge) => compareNodes(state).hasSameNodes(argEdge)
})
let hasNode = (state) => ({
    containsNode: (nodeArg) => NodeArray.instance(state.nodes).contains(nodeArg)
})
let toString = (state) => ({
    toString: () => `[ Edge ${l_func(state)} ]`,
});
let weightMaker = (state) => ({
    weight: () => state.weight
});
let getWeight = (state) => ({
    weight: () => state.weight,
});
let nabeMaker = (state) => ({
    getNeighbor: (nodeArg) =>
        NodeArray.instance(state.nodes).find(n => !n.isEquivalent(nodeArg))
});
let neighborArray = (state) => ({
    nabeArray: (xNode) => NodeArray.instance(state.nodes).excludeElement(xNode)
})
let stateFuncs = [lab_maker, neighborArray, compareWeight, equalityChecker, toString, nabeMaker, getWeight, compareLabel, compareNodes, hasNode, nodify];
let Edge = (n0, n1, w = 0) => {
    let state = {
        nodes: [n0, n1],
        weight: w
    };
    let mixObj = composer(...stateFuncs);
    return Object.assign({}, mixObj(state));
    console.log(mixObj);
    // return Object.assign({}, lab_maker(state), neighborArray(state), compareWeight(state), equalityChecker(state), toString(state), nabeMaker(state), getWeight(state), compareLabel(state), compareNodes(state), hasNode(state), nodify(state));
    // return {
    // nodes: () => NodeArray.instance([n0, n1]),
    // weight: () => w
    // }
};
module.exports = Edge
module.exports.getNodes = getNodes;