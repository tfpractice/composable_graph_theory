fdescribe('Node', function() {
	let Node;
	let NodeFactory, nf0, nf1, nf2;
	let myNode, n0, n00, n1, n2, n3;
	let myState, state0, state1, state2, state3;
	let typify, tFunc, nType;
	let datafy, dFunc, nData;
	let equatable, eqFunc, nEq;
	let labelize, lFunc, nLabel;
	let myExtension, t_lFunc, t_nLabel;

	beforeAll(function() {
		console.log('\n.........Node Spec.........');
		Node = this.GR.Node;
		NodeFactory = Node.NodeFactory;
		equalize = this.GR.MethodUtils.equalize;
		datafy = this.GR.MethodUtils.datafy;
		labelize = this.GR.MethodUtils.labelize;
		typify = this.GR.MethodUtils.typify;
		tFunc = (s) => "Node",
			dFunc = (state) => state.data;
		lFunc = (state) => state.label;
		eqFunc = state => arg => (labelize(lFunc)(state).sameLabel(arg));
		nType = typify(tFunc);
		nData = datafy(dFunc);
		nEq = equalize(eqFunc);
		nLabel = labelize(lFunc);
		myNode = Node(nType, nData, nLabel, nEq)
		t_lFunc = (state) => "factoryTest" + state.label,
			t_nLabel = labelize(t_lFunc);
		// myExtension = Node.extendNode(t_nLabel);
		myExtension = NodeFactory.subType(t_nLabel);

	});
	beforeEach(function() {
		state0 = {
			label: "node0",
			data: {
				position: 0
			}
		};
		n0 = myNode(state0.label, state0.data);
		nf0 = NodeFactory(state0);
		nf1 = NodeFactory(state1);
		nf2 = NodeFactory(state2);
		state1 = {
			label: "node1",
			data: {
				position: 1
			}
		};
		n1 = myNode(state1.label, state1.data);
		n00 = myNode(state0.label, state1.data);
		state2 = {
			label: "node2",
			data: {
				position: 2
			}
		};
		n2 = myNode(state2.label, state2.data);
		state3 = {
			label: "node3",
			data: {
				position: 3
			}
		};
		n3 = myNode(state3.label, state3.data);
	});
	it('is a function', function() {
		expect(Node).toBeFunction();
	});
	describe('.toString()', () => {
		it('returns "Node"', () => {});
	});
	describe('when given a set of mixins', () => {
		it('returns a function with operators', function() {
			expect(Node(nType, nData, nLabel, nEq)).toBeFunction();
		});
	});
	describe('when given a label and a data attribute', () => {
		describe('.Node(lable, data) ', () => {
			it('returns a new Node object', () => {
				expect(n2).toBeObject();
			});
			describe('#label()', () => {
				it('returns the first argument of the params list', () => {
					expect(n0.label).toBeFunction();
					expect(n0.label()).toBe('node0');
				});
			});
			describe('#type()', () => {
				it('returns `Node`', () => {
					expect(n0.type).toBeFunction();
					expect(n0.type()).toEqual('Node');
				});
			});
			describe('#data()', () => {
				it('returns the data argument', () => {
					expect(n0.data).toBeFunction();
					expect(n0.data().position).toBe(0);
				});
			});
			describe('#isEquivalent', () => {
				it('returns true if the two objects share label', () => {
					expect(n0.isEquivalent(n0)).toBeTrue();
				})
			});
		});
		describe('operators', () => {
			describe('getLabel(node)', () => {
				it('returns the nodes label', () => {
					expect(myNode.getLabel(n2)).toBe(n2.label());
				});
			});
			describe('getData(node)', () => {
				it('returns the nodes label', () => {
					expect(myNode.getData(n2)).toBe(n2.data());
				});
			});
			describe('getType(node)', () => {
				it('returns the nodes label', () => {
					expect(myNode.getType(n2)).toBe(n2.type());
				});
			});
			describe('isEquivalent(argNode)(srcNode)', () => {
				it('returns a boolean based on node equality', () => {
					expect(myNode.isEquivalent(n0)(n0)).toBeTrue();
					expect(myNode.isEquivalent(n0)(n2)).toBeFalse();
				});
			});
		});
	});
	describe('NodeFactory', () => {
		it('is a function', function() {
			expect(NodeFactory).toBeFunction();
		});
		describe('mixins', () => {
			it('has a mixins property', function() {
				expect(NodeFactory.mixins).toBeTruthy();
			});
		});
		describe('when given a state object', () => {
			it('returns a new Node object', () => {
				expect(nf2).toBeObject();
			});
			describe('#label()', () => {
				it('returns the first argument of the params list', () => {
					expect(nf0.label).toBeFunction();
					expect(nf0.label()).toBe('node0');
				});
			});
			describe('#type()', () => {
				it('returns `Node`', () => {
					expect(nf0.type).toBeFunction();
					expect(nf0.type()).toEqual('Node');
				});
			});
			describe('#data()', () => {
				it('returns the data argument', () => {
					expect(nf0.data).toBeFunction();
					expect(nf0.data().position).toBe(0);
				});
			});
			describe('#isEquivalent', () => {
				it('returns true if the two objects share label', () => {
					expect(nf0.isEquivalent(nf0)).toBeTrue();
				})
			});
		});
		describe('extension', () => {
			it('returns a new node type', function() {
				expect(myExtension).toBeFunction();
			});
			describe('label', () => {
				it('returns the first argument of the params list', () => {
					let exN0 = myExtension(state0);
					expect(exN0.label).toBeFunction();
					expect(exN0.label()).toBe('factoryTestnode0');
				});
			});
		});
	});
});