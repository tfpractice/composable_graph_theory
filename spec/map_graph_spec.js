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

		// console.log(n0.isEquivalent(n000));
		n0 = Node(state0);

		n1 = Node(state1);

		n2 = Node(state2);

		n3 = Node(state3);
		myGraph = mGraph(n0, n1, n2, n3);
	});

	it('is an object', function() {
		expect(myGraph).toBeObject();
	});
});