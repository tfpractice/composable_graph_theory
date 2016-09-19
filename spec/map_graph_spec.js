fdescribe('mGraph', function() {
	let Node, mGraph;
	let n0, n00, n1, n2, n3;
	let myGraph;
	let myState, state0, state1, state2, state3;
	let myExtension, t_lFunc, t_nLabel;
	let nStruct;
	let stateX, nodeX, nodeXX;
	beforeAll(function() {
		console.log('\n.........mapGraph Spec.........');
		({ Node, mGraph } = this.GR);
		nStruct = (label = '', data = {}) => ({ label, data });
	});

	beforeEach(function() {
		state0 = nStruct('node0', { position: 0 });
		state1 = nStruct('node1', { position: 1 });
		state2 = nStruct('node2', { position: 2 });
		state3 = nStruct('node3', { position: 3 });
		state00 = nStruct('node0', { position: 1 });
		stateX = nStruct('nodeX', { position: 0 });
		nodeX = Node(stateX);
		nodeXX = Node(stateX);
		n0 = Node(state0);
		n1 = Node(state1);
		n2 = Node(state2);
		n3 = Node(state3);
		myGraph = mGraph(n0, n1, n2, n3);
	});

	it('is a function', function() {
		expect(mGraph).toBeFunction();
	});

	describe('when given a set of elements', () => {
		it('retuns an object', function() {
			expect(mGraph(n0, n1, n2, n3)).toBeObject();
			expect(myGraph.nodes).toBeTruthy();
			expect(myGraph.edges).toBeTruthy();
			expect(myGraph.neighbors).toBeTruthy();
			expect(myGraph.contains).toBeTruthy();
			expect(myGraph.addEdge).toBeTruthy();
			expect(myGraph.removeEdge).toBeTruthy();
			expect(myGraph.isAdjacent).toBeTruthy();
		});

		describe('nodes', () => {
			it('is a set', () => {
				expect(myGraph.nodes instanceof Set).toBeTrue();
			});
		});
		describe('edges', () => {
			it('is a Map', () => {
				expect(myGraph.edges instanceof Map).toBeTrue();
			});
		});
		describe('neighbors(node)', () => {
			it('returns the associated nodes edges entry', () => {
				expect(myGraph.neighbors(n0) instanceof Map).toBeTrue();
			});
		});
		describe('contains', () => {
			it('it checks the node[Set] for the presence of an object', () => {
				expect(myGraph.contains(n1)).toBeTrue();
				expect(myGraph.contains('hello')).toBeFalse();
			});
		});
		describe('addEdge(n0)(n1,weight)', () => {
			it('updates each nodes edge entry', () => {
				myGraph.addEdge(n0)(n1, 2);
				expect(myGraph.neighbors(n0).has(n1)).toBeTrue();
				expect(myGraph.neighbors(n0).get(n1)).toBe(2);
			});
		});
		describe('removeEdge', () => {
			it('removes an entry from the edgs map', () => {
				myGraph.addEdge(n0)(n1, 2);
				myGraph.removeEdge(n0)(n1);
				expect(myGraph.neighbors(n0).has(n1)).toBeFalse();
				expect(myGraph.neighbors(n0).get(n1)).toBeUndefined();
			});
		});
		describe('isAdjacent', () => {
			it('is checks for a node in the neighbor map', () => {
				myGraph.addEdge(n0)(n1, 2);
				expect(myGraph.neighbors(n1).has(n0)).toBeTrue();
				expect(myGraph.isAdjacent(n1)(n0)).toBeTrue();
			});
		});
	});

	it('is an object', () => {
		expect(myGraph).toBeObject();
	});
});