const Node = require('./node');
const NodeArray = require('./node_array');
const Edge = require('./edge');
const ArrayUtils = require('./array_utils');
const arrayOf = ArrayUtils.arrayOf;
const setMixin = ArrayUtils.setMixin;
const typeMixin = ArrayUtils.typeMixin;
const validatorMixin = ArrayUtils.validatorMixin;

let edgesWithNode = (eArr) => (nArg) =>
    eArr.filter(Edge.containsNode(nArg));

// let redEdge = (eArr, nextNode) => EdgeArray.union(eSet) edgesWithNode(eArr)(nextNode);
let edgesByArray = (eArr) => (...nArr) =>
    nArr.reduce((eSet, nNode) =>
        EdgeArray.union(eSet)(edgesWithNode(eArr)(nNode)), []);
// eSet.unionize(edgesWithNode(eArr)(nNode)), EdgeArray.spawn(
//     []));

let edgeByNodes = (eArr) => (n1) => (n2) =>
    eArr.find(Edge.containsNodes(n1, n2));

let getNodes = (eArr) =>
    eArr.map(Edge.getNodes).reduce(NodeArray.binaryUnion, []);

let getNeighbors = (eArr) => (nArg) =>
    edgesWithNode(eArr)(nArg)
    .map(Edge.getNeighborArray(nArg)).reduce(NodeArray
        .binaryUnion)

let EdgeArray = arrayOf(validatorMixin((elem) => elem.type() === "Edge"),
    setMixin(Edge.isEquivalent), typeMixin(() =>
        "EdgeArray"));

module.exports = EdgeArray;
module.exports.edgesWithNode = edgesWithNode;
module.exports.edgeByNodes = edgeByNodes;
module.exports.edgesByArray = edgesByArray;
module.exports.getNodes = getNodes;
module.exports.getNeighbors = getNeighbors;
// module.exports.edgesWithNode = edgesWithNode;