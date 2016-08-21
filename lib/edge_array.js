const Node = require('./node');
const NodeArray = require('./node_array');
const Edge = require('./edge');
const ArrayUtils = require('./array_utils');
const arrayOf = ArrayUtils.arrayOf;
const setMixin = ArrayUtils.setMixin;
const typeMixin = ArrayUtils.typeMixin;

let edgesWithNode = (eArr) => (nArg) => eArr.filter(Edge.containsNode(nArg));
let edgesByArray = (eArr) => (...nArr) => nArr.reduce((eSet, nNode) => eSet.unionize(edgesWithNode(eArr)(nNode)), EdgeArray.instance([]));
let edgeByNodes = (eArr) => (n1) => (n2) => eArr.find(Edge.containsNodes(n1, n2));
let getNodes = (eArr) => eArr.map(Edge.getNodes).reduce((pArr, nArr) => nArr.unionize(pArr), []);
let getNeighbors = (eArr) => (nArg) => edgesWithNode(eArr)(nArg).map(e => e.nabeArray(nArg)).reduce((pArr, nArr) => nArr.unionize(pArr), []);
// let getNeighbors = (eArr) => (nArg) => eArr.map(e => e.nabeArray(nArg)).reduce((pArr, nArr) => nArr.unionize(pArr)[]);
// eArr.reduce((p, n) => Edge.getNodes(n).unionize(pArr)
// (Edge.getNodes).reduce((pArr, nArr) => pArr.unionize(nArr), NodeArray.instance([]))
// }
let EdgeArray = arrayOf(Edge)(setMixin, typeMixin);

module.exports = EdgeArray;
module.exports.edgesWithNode = edgesWithNode;
module.exports.edgeByNodes = edgeByNodes;
module.exports.edgesByArray = edgesByArray;
module.exports.getNodes = getNodes;
module.exports.getNeighbors = getNeighbors;
// module.exports.edgesWithNode = edgesWithNode;