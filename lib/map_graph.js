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
let clearEdges = ({ edges }) => edges.clear();
let spreadKeys = (map) => [...map.keys()];
let spreadValues = (map) => [...map.values()];
let spreadEntries = (map) => [...map.entries()];
let lastKey = (map) => spreadKeys(map).pop();

let rmFirst = (set) => {
	let elem = [...set].shift();
	set.delete(elem);
	return elem;
};

let isAdjacent = (graph) => (n0) => (n1) =>
	neighbors(graph)(n0).has(n1) || neighbors(graph)(n1).has(n0);

let addEdge = (graph) => (n0) => (n1, weight = 0) =>
	neighbors(graph)(n0).set(n1, weight) && neighbors(graph)(n1).set(n0, weight);

let removeEdge = (graph) => (n0) => (n1) =>
	neighbors(graph)(n0).delete(n1) && neighbors(graph)(n1).delete(n0);

let reachable = ({ edges }) => (iNode) => (termNode) =>
	bfs({ edges })(iNode).has(termNode);

let pathHasNode = (path) => (node) => path.has(node);
let x_pathHasNode = (path) => (node) => !pathHasNode(path)(node);
let pathHasEntry = (path) => ([key, val]) => path.has(key);
let x_pathHasEntry = (path) => ([key, val]) => !pathHasEntry(path)([key, val]);

let unvisitedNeighbors = ({ edges }) => (path) => (node) =>
	spreadKeys(neighbors({ edges })(node)).filter(x_pathHasNode(path));

let unvisitedEntries = ({ edges }) => (path) => (node) =>
	spreadEntries(neighbors({ edges })(node)).filter(x_pathHasEntry(path));

let pathString = (path) =>
	spreadKeys(path).reduce((str, next, id, coll) =>
		id === (coll.length - 1) ?
		(str + next + ' }') :
		(str + next + ' => '), '{ ');

let edgeString = ([source, nabes]) =>
	'{ Edge ' + source + ' } >> [ ' + spreadKeys(nabes) + ' ]\n';

let showGraph = ({ edges }) =>
	spreadEntries(edges).reduce((str, [node, nabes], id) =>
		str + edgeString([node, nabes]),
		'Showing Graph\n');
let components = ({ edges }) => {
	let cMap = new Map();

	let visitComponent = (path = new Set()) => (node) => {
		path.add(node);
		cMap.set(node, path);
		for (let [nabe, next] of edges.get(node)) {
			if (!path.has(nabe)) { visitComponent(path)(nabe); }
		}
	};

	for (let [node, nabes] of edges) {
		if (!cMap.has(node)) { visitComponent(new Set())(node); }
	}

	return cMap;
};

let dfs = ({ edges }) => (iNode) => {
	let path = new Map()
		.set(iNode, {
			pred: null,
			edgeCount: 0,
			pathWeight: 0,
		});
	let dVisit = (path) => {
		let pred = lastKey(path);
		let { edgeCount: pCount, pathWeight: pWeight } = path.get(pred);
		let nextNabes = new Map(unvisitedEntries({ edges })(path)(pred));
		for (let [nabe, weight] of nextNabes) {
			path.set(nabe, {
				pred,
				edgeCount: pCount + 1,
				pathWeight: pWeight + weight,
			});
			dVisit(path);
		};
	};

	dVisit(path);
	return path;
};

let bfs = ({ edges }) => (iNode) => {
	var bPath = new Map()
		.set(iNode, {
			pred: null,
			pathWeight: 0,
			edgeCount: 0,
		});
	var bQueue = new Set().add(iNode);
	while (bQueue.size > 0) {
		let pred = rmFirst(bQueue);
		let nextNabes = new Map(unvisitedEntries({ edges })(bPath)(pred));
		let { edgeCount: pCount, pathWeight: pWeight } = bPath.get(pred);
		for (let [nabe, weight] of nextNabes) {
			bPath.set(nabe, {
				pred,
				edgeCount: pCount + 1,
				pathWeight: pWeight + weight,
			});
			bQueue.add(nabe);
		};
	}

	return bPath;
};

let dijkstra = ({ edges }) => (iNode) => {
	let reachables = bfs({ edges })(iNode);
	let inspectQueue = new Set().add(iNode);
	let solutionSet = new Map()
		.set(iNode, {
			pred: null,
			edgeCount: 0,
			pathWeight: 0,
		});
	while (inspectQueue.size > 0) {
		let pred = rmFirst(inspectQueue);
		let nextNabes = neighbors({ edges })(pred);

		let { edgeCount: dCount, pathWeight: dWeight } = solutionSet.get(
			pred);
		for (let [nabe, weight] of nextNabes) {
			let { edgeCount: rCount, pathWeight: rWeight } = reachables.get(
				nabe);
			let dMap = { pred: pred, edgeCount: dCount + 1, pathWeight: dWeight +
					weight, };
			let sMap = ((dWeight + weight) < rWeight) ? dMap : reachables.get(
				pred);
			if (!solutionSet.has(nabe)) {
				inspectQueue.add(nabe);
				solutionSet.set(nabe, sMap);
			}
		}
	}

	return solutionSet;
};

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
exports.nodes = nodes;
exports.dfs = dfs;
exports.bfs = bfs;
exports.dijkstra = dijkstra;
exports.reachable = reachable;
exports.components = components;
exports.pathString = pathString;
exports.showGraph = showGraph;
exports.edges = edges;
exports.neighbors = neighbors;
exports.contains = contains;
exports.addEdge = addEdge;
exports.removeEdge = removeEdge;
exports.isAdjacent = isAdjacent;
exports.clearEdges = clearEdges;
exports.pathHasNode = pathHasNode;
exports.x_pathHasNode = x_pathHasNode;
exports.unvisitedNeighbors = unvisitedNeighbors;
exports.unvisitedEntries = unvisitedEntries;
//
//
//
//