const Node = require('./node');
const NodeArray = require('./node_array');
const Edge = require('./edge');
const ArrayUtils = require('./array_utils');
const arrayOf = ArrayUtils.arrayOf;
const setMixin = ArrayUtils.setMixin;
const typeMixin = ArrayUtils.typeMixin;
const validatorMixin = ArrayUtils.validatorMixin;

let getNodes = (eArr) =>
    eArr.map(Edge.getNodes).reduce(NodeArray.binaryUnion, []);

let edgesWithNode = (eArr) => (nArg) =>
    eArr.filter(Edge.containsNode(nArg));

let edgesByArray = (eArr) => (...nArr) =>
    nArr.reduce((eSet, nNode) =>
        EdgeArray.union(eSet)(edgesWithNode(eArr)(nNode)), []);

let edgeByNodes = (eArr) => (n1) => (n2) =>
    eArr.find(Edge.containsNodes(n1, n2));

let getNeighbors = (eArr) => (nArg) =>
    edgesWithNode(eArr)(nArg)
    .map(Edge.getNeighborArray(nArg)).reduce(NodeArray
        .binaryUnion)

let EdgeArrayMixin = () => {
    let unaryFuncs = {
        // getNodes: getNodes,
        edgesWithNode: edgesWithNode,
        edgesByArray: edgesByArray,
        edgeByNodes: edgeByNodes,
        getNeighbors: getNeighbors,
    };
    let curryFuncs = (eArr = []) => Object.keys(unaryFuncs).reduce(
        (curried, fn) => Object.assign(curried, {
            [fn]: unaryFuncs[fn](eArr)
        }), {});
    console.log(curryFuncs([1, 2, 3]));

    return Object.assign(curryFuncs, unaryFuncs);
};
// let EdgeArray = arrayOf(EdgeArrayMixin(),let EdgeArray = arrayOf(EdgeArrayMixin(), validatorMixin((elem) => elem.type() ===

let EdgeArray = arrayOf(EdgeArrayMixin(), validatorMixin((elem) => elem.type() ===
    "Edge"), setMixin(Edge.isEquivalent), typeMixin(() => "EdgeArray"));

module.exports = EdgeArray;
module.exports.edgesWithNode = edgesWithNode;
module.exports.edgeByNodes = edgeByNodes;
module.exports.edgesByArray = edgesByArray;
module.exports.getNodes = getNodes;
module.exports.getNeighbors = getNeighbors;
module.exports.edgesWithNode = edgesWithNode;