fdescribe('mGraph', function() {
	let Node, mGraph;
	let n0, n00, n1, n2, n3, n4, n5, n6;
	let myGraph;
	let myState, state0, state1, state2, state3, state4, state5, state6;
	let myExtension, t_lFunc, t_nLabel;
	let nStruct;
	let stateX, nodeX, nodeXX;
	let nodes, edges, neighbors;
	let contains, addEdge, removeEdge, isAdjacent;
	beforeAll(function() {
		console.log('\n.........mapGraph Spec.........');
		({ Node, mGraph } = this.GR);
		({
			nodes,
			edges,
			neighbors,
			contains,
			addEdge,
			removeEdge,
			isAdjacent,
			clearEdges,
			dfs,
			pathHasNode,
			x_pathHasNode,
			unvisitedNeighbors,
			unvisitedEntries,
		} = mGraph);
		nStruct = (label = '', data = {}) => ({ label, data });
	});

	beforeEach(function() {
		state0 = nStruct('node0', { position: 0 });
		state1 = nStruct('node1', { position: 1 });
		state2 = nStruct('node2', { position: 2 });
		state3 = nStruct('node3', { position: 3 });
		state4 = nStruct('node4', { position: 4 });
		state5 = nStruct('node5', { position: 5 });
		state6 = nStruct('node6', { position: 6 });
		state00 = nStruct('node0', { position: 1 });
		stateX = nStruct('nodeX', { position: 0 });
		nodeX = Node(stateX);
		nodeXX = Node(stateX);
		n0 = Node(state0);
		n1 = Node(state1);
		n2 = Node(state2);
		n3 = Node(state3);
		n4 = Node(state4);
		n5 = Node(state5);
		n6 = Node(state6);
		myGraph = mGraph(n0, n1, n2, n3, n4, n5, n6);
	});

	it('is a function', function() {
		expect(mGraph).toBeFunction();
	});

	describe('operators', () => {
		describe('nodes', () => {
			it('is a set', () => {
				expect(nodes(myGraph) instanceof Set).toBeTrue();
			});
		});
		describe('edges', () => {
			it('is a Map', () => {
				expect(edges(myGraph) instanceof Map).toBeTrue();
			});
		});
		describe('neighbors(node)', () => {
			it('returns the associated nodes edges entry', () => {
				expect(neighbors(myGraph)(n0) instanceof Map).toBeTrue();
			});
		});
		describe('contains', () => {
			it('it checks the node[Set] for the presence of an object', () => {
				expect(contains(myGraph)(n1)).toBeTrue();
				expect(contains(myGraph)('hello')).toBeFalse();
			});
		});
		describe('addEdge(n0)(n1,weight)', () => {
			it('updates each nodes edge entry', () => {
				addEdge(myGraph)(n0)(n1, 2);
				expect(neighbors(myGraph)(n0).has(n1)).toBeTrue();
				expect(neighbors(myGraph)(n0).get(n1)).toBe(2);
			});
		});
		describe('removeEdge', () => {
			it('removes an entry from the edgs map', () => {
				addEdge(myGraph)(n0)(n1, 2);
				removeEdge(myGraph)(n0)(n1);
				expect(neighbors(myGraph)(n0).has(n1)).toBeFalse();
				expect(neighbors(myGraph)(n0).get(n1)).toBeUndefined();
			});
		});
		describe('isAdjacent', () => {
			it('is checks for a node in the neighbor map', () => {
				addEdge(myGraph)(n0)(n1, 2);
				expect(neighbors(myGraph)(n1).has(n0)).toBeTrue();
				expect(isAdjacent(myGraph)(n1)(n0)).toBeTrue();
			});
		});
		describe('clearEdges', () => {
			it('sets the edges.size to 0', function() {
				addEdge(myGraph)(n0)(n1, 2);
				clearEdges(myGraph);
				expect(myGraph.edges.size).toBe(0);
			});
		});

	});
	describe('traversal functions', () => {
		let myPath;
		beforeEach(function() {
			// addEdge(myGraph)(n0)(n1, 2);
			// addEdge(myGraph)(n0)(n2, 4);
			// addEdge(myGraph)(n1)(n4, 6);
			// addEdge(myGraph)(n1)(n6, 8);
			// addEdge(myGraph)(n2)(n3, 7);
			// addEdge(myGraph)(n5)(n4, 7);

			addEdge(myGraph)(n0)(n1, 2);
			addEdge(myGraph)(n1)(n2, 4);
			addEdge(myGraph)(n2)(n3, 6);
			addEdge(myGraph)(n3)(n4, 8);
			addEdge(myGraph)(n4)(n5, 7);
			addEdge(myGraph)(n5)(n6, 7);
			myPath = dfs(myGraph)(n0);
		});

		describe('dfs', () => {
			it('returns a map of nodes and neighbors', function() {
				expect((dfs(myGraph)(n0) instanceof Map)).toBeTrue();
			});
		});
		describe('pathHasNode', () => {
			it('checks if a path contains node', function() {
				expect(pathHasNode(myPath)(n0)).toBeTrue();
			});
		});
		describe('x_pathHasNode', () => {
			it('checks if a path lacks node', function() {
				expect(x_pathHasNode(myPath)(n0)).toBeFalse();
			});
		});
		describe('unvisitedNeighbors', () => {
			it('returns nodes not in path', function() {
				let myPath = new Map().set(n0, {});
				let currNabes = unvisitedNeighbors(myGraph)(myPath)(n0);
				expect(currNabes).toContain(n1);
			});
		});
		describe('unvisitedEntries', () => {
			it('returns nodes not in path', function() {
				let myPath = new Map().set(n0, {});
				let currNabes = unvisitedEntries(myGraph)(myPath)(n0);
				expect(currNabes).toContain([n1, 2]);
			});
		});
	});
	// describe('when given a set of elements', () => {
	// 	it('retuns an object', function() {
	// 		expect(mGraph(n0, n1, n2, n3)).toBeObject();
	// 		expect(myGraph.nodes).toBeTruthy();
	// 		expect(myGraph.edges).toBeTruthy();
	// 		expect(myGraph.neighbors).toBeTruthy();
	// 		expect(myGraph.contains).toBeTruthy();
	// 		expect(myGraph.addEdge).toBeTruthy();
	// 		expect(myGraph.removeEdge).toBeTruthy();
	// 		expect(myGraph.isAdjacent).toBeTruthy();
	// 	});

	// 	describe('nodes', () => {
	// 		it('is a set', () => {
	// 			expect(myGraph.nodes instanceof Set).toBeTrue();
	// 		});
	// 	});
	// 	describe('edges', () => {
	// 		it('is a Map', () => {
	// 			expect(myGraph.edges instanceof Map).toBeTrue();
	// 		});
	// 	});
	// 	describe('neighbors(node)', () => {
	// 		it('returns the associated nodes edges entry', () => {
	// 			expect(myGraph.neighbors(n0) instanceof Map).toBeTrue();
	// 		});
	// 	});
	// 	describe('contains', () => {
	// 		it('it checks the node[Set] for the presence of an object', () => {
	// 			expect(myGraph.contains(n1)).toBeTrue();
	// 			expect(myGraph.contains('hello')).toBeFalse();
	// 		});
	// 	});
	// 	describe('addEdge(n0)(n1,weight)', () => {
	// 		it('updates each nodes edge entry', () => {
	// 			myGraph.addEdge(n0)(n1, 2);
	// 			expect(myGraph.neighbors(n0).has(n1)).toBeTrue();
	// 			expect(myGraph.neighbors(n0).get(n1)).toBe(2);
	// 		});
	// 	});
	// 	describe('removeEdge', () => {
	// 		it('removes an entry from the edgs map', () => {
	// 			myGraph.addEdge(n0)(n1, 2);
	// 			myGraph.removeEdge(n0)(n1);
	// 			expect(myGraph.neighbors(n0).has(n1)).toBeFalse();
	// 			expect(myGraph.neighbors(n0).get(n1)).toBeUndefined();
	// 		});
	// 	});
	// 	describe('isAdjacent', () => {
	// 		it('is checks for a node in the neighbor map', () => {
	// 			myGraph.addEdge(n0)(n1, 2);
	// 			expect(myGraph.neighbors(n1).has(n0)).toBeTrue();
	// 			expect(myGraph.isAdjacent(n1)(n0)).toBeTrue();
	// 		});
	// 	});
	// });

});