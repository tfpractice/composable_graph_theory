let makeEdges = (...elements) =>
	elements.reduce((eMap, next) =>
		eMap.set(next, new Map()), new Map());

let makeGraph = (...elements) => ({
	nodes: new Set(elements),
	edges: makeEdges(...elements),
});
let nodes = ({ nodes = new Set() }) => nodes;
let edges = ({ edges = new Map() }) => edges;
let neighbors = ({ edges }) => (node) => edges.get(node);
let contains = ({ nodes }) => (node) => nodes.has(node);

let addEdge = (graph) => (n0) => (n1, weight = 0) =>
	neighbors(graph)(n0).set(n1, weight) && neighbors(graph)(n1).set(n0, weight);

let removeEdge = (graph) => (n0) => (n1) =>
	neighbors(graph)(n0).delete(n1) && neighbors(graph)(n1).delete(n0);

let isAdjacent = (graph) => (n0) => (n1) =>
	neighbors(graph)(n0).has(n1) || neighbors(graph)(n1).has(n0);

const mGraph = (...elements) => {
	let gState = makeGraph(...elements);
	return {
		nodes: nodes(gState),
		edges: edges(gState),
		neighbors: neighbors(gState),
		contains: contains(gState),
		addEdge: addEdge(gState),
		removeEdge: removeEdge(gState),
		isAdjacent: isAdjacent(gState),
	};

};

module.exports = mGraph;