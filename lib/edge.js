let Node = require('./node');
let NodeArray = require('./node_array');
let Utils = require('./graph_utils');
let MethUtils = require('./method_utils');
let ArrayUtils = require('./array_utils');
let labelize = MethUtils.labelize;
let weighable = MethUtils.weighable;
let nodify = MethUtils.nodify;
let toStringify = MethUtils.toStringify;
// let nodify = MethUtils.nodify;
// let nodify = MethUtils.nodify;
// let nodify = MethUtils.nodify;
// let nodify = MethUtils.nodify;
// let nodify = MethUtils.nodify;
let composer = ArrayUtils.composeMixin;

// let n0 = Node("n0");
// let n1 = Node("n1");

let lFunc = (state) => state.nodes.reduce((str, n, id, a) => (id < a.length - 1) ? (str + n.label() + "::") : str + n.label(), "");
let wFunc = (state) => state.weight;
let nFunc = (state) => NodeArray.instance(state.nodes);
let sFunc = (state) => `[ Edge ${lFunc(state)} ]`;

let lab_maker = labelize(lFunc);
let weightMaker = weighable(wFunc);
let nodeMaker = nodify(nFunc);
let stringMaker = toStringify(sFunc);

// let nodify = (state) => ({
//     nodes: () => NodeArray.instance(state.nodes)
// });

let compareNodes = (state) => ({
    hasSameNodes: (argEdge) => NodeArray.instance(state.nodes).isEquivalent(argEdge.nodes())
});
let compareLabel = (state) => ({
    hasSameName: (argEdge) => lFunc(state) === argEdge.label()
});
// let weightAx = (edge) => edge.weight();
let compareWeight = (state) => ({
    hasSameWeight: (argEdge) => state.weight === argEdge.weight()
})
let equalityChecker = (state) => ({
    isEquivalent: (argEdge) => compareNodes(state).hasSameNodes(argEdge)
})
let hasNode = (state) => ({
    containsNode: (nodeArg) => NodeArray.instance(state.nodes).contains(nodeArg)
});
// let toString = (state) => ({
//     toString: () => `[ Edge ${lFunc(state)} ]`,
// });
// let weightMaker = (state) => ({
//     weight: () => state.weight
// });
// let weightAx = (state) => ({
//     weight: () => state.weight,
// });
let nabeMaker = (state) => ({
    getNeighbor: (nodeArg) =>
        NodeArray.instance(state.nodes).find(n => !n.isEquivalent(nodeArg))
});
let neighborArray = (state) => ({
    nabeArray: (xNode) => NodeArray.instance(state.nodes).excludeElement(xNode)
});
// instance operators/accessors
let getLabel = (edge) => edge.label();
let getWeight = (edge) => edge.weight();
let getNodes = (edge) => edge.nodes();
// let getLabel = (edge) => edge.label();
// let getLabel = (edge) => edge.label();


let hasSameNodes = (hostEdge) => (argEdge) => host.nodes().isEquivalent(argEdge.nodes());
let isEquivalent = (hostEdge) => (argEdge) => hasSameNodes(hostEdge)(argEdge);
let hasSameWeight = (hostEdge) => (argEdge) => host.weight() === argEdge.weight();

let stateFuncs = [lab_maker, weightMaker, nodeMaker, neighborArray, compareWeight, equalityChecker, stringMaker, nabeMaker, compareLabel, compareNodes, hasNode];


let Edge = (n0, n1, w = 0) => {
    let state = {
        nodes: [n0, n1],
        weight: w
    };
    let mixObj = composer(...stateFuncs);
    return Object.assign({}, mixObj(state));

};
module.exports = Edge
module.exports.getNodes = getNodes;
module.exports.getWeight = getWeight;
module.exports.getLabel = getLabel;