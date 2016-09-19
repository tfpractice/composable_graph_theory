// let nodes = ({ nodes = [] }) => nodes;
// let edges = ({ edges = [] }) => edges;
// let neighbors = ({ edges }) => (node) => edges.get(node);
// let contains = ({ nodes }) => (node) => nodes.has(node);
// let addEdge = (graph) => (n0) => (n1) => neighbors(graph)(n0);

const mGraph = (...elements) => {
	let gNodes = new Set(elements);
	let gEdges = new Map();
	let initAdj = elements.map(e => gEdges.set(e, new Map()));
	console.log(initAdj);
	let contains = (elem) => gNodes.has(elem);
	let addNode = (elem) => gNodes.add(elem) && gEdges.set(elem, new Map());
	let getNeighbors = (elem) => gEdges.get(elem);
	let addEdge = (src) => (dst) => (weight) => {
		getNeighbors(src).set(dst, weight) && addEdge(dst)(src)(weight);
		getNeighbors(dst).set(src, weight);
	};

	let removeEdge = (src) => (dst) =>
		getNeighbors(src).delete(dst) && removeEdge(dst)(src);
	let connected = (src) => (dst) => getNeighbors(src).has(dst);

	return {
		nodes: gNodes,
		edges: gEdges,
		contains: contains,
		addNode: addNode,
		getNeighbors: getNeighbors,
		addEdge: addEdge,
	};

};

module.exports = mGraph;