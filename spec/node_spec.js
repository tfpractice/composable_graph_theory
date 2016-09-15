fdescribe('Node', function() {
	let Node;
	let n0, n00, n1, n2, n3;
	let myState, state0, state1, state2, state3;
	let myExtension, t_lFunc, t_nLabel;
	beforeAll(function() {
		console.log('\n.........Node Spec.........');
		Node = this.GR.Node;
		equalize = this.GR.MethodUtils.equalize;
		datafy = this.GR.MethodUtils.datafy;
		labelize = this.GR.MethodUtils.labelize;
		typify = this.GR.MethodUtils.typify;
		tFunc = (s) => "Node";
		dFunc = (state) => state.data;
		lFunc = (state) => state.label;
		eqFunc = state => arg => (labelize(lFunc)(state).sameLabel(arg));
		nType = typify(tFunc);
		nData = datafy(dFunc);
		nEq = equalize(eqFunc);
		nLabel = labelize(lFunc);
		// myNode = Node(nType, nData, nLabel, nEq);
		t_lFunc = (state) => "factoryTest" + state.label;
		t_nLabel = labelize(t_lFunc);
		myExtension = Node.subType(t_nLabel);
	});
	beforeEach(function() {
		state0 = {
			label: "node0",
			data: {
				position: 0
			}
		};
		state1 = {
			label: "node1",
			data: {
				position: 1
			}
		};
		state2 = {
			label: "node2",
			data: {
				position: 2
			}
		};
		state3 = {
			label: "node3",
			data: {
				position: 3
			}
		};
		state00 = {
			label: "node0",
			data: {
				position: 1
			}
		};
		n0 = Node(state0);
		exn0 = myExtension(state0);
		n00 = Node(state00);
		exn00 = myExtension(state00);
		n1 = Node(state1);
		exn1 = myExtension(state1);
		n2 = Node(state2);
		exn2 = myExtension(state2);
		n3 = Node(state3);
		exn3 = myExtension(state3);
	});
	it('is a function', () => {
		expect(Node).toBeFunction();
	});
	it('default operators', () => {});
	describe('.toString()', () => {
		it('returns "Node"', () => {});
	});
	describe('when given a state obj{label, data} ', () => {
		it('returns a new Node object', () => {
			expect(n2).toBeObject();
		});
		describe('#label()', () => {
			it('returns the state label', () => {
				expect(n0.label).toBeFunction();
				expect(n0.label()).toBe('node0');
			});
		});
		describe('#data()', () => {
			it('returns the state data', () => {
				expect(n0.data).toBeFunction();
				expect(n0.data().position).toBe(0);
			});
		});
		describe('#type()', () => {
			it('returns `Node`', () => {
				expect(n0.type).toBeFunction();
				expect(n0.type()).toEqual('Node');
			});
		});
		describe('#isEquivalent', () => {
			it('returns true if the two objects share label', () => {
				expect(n0.isEquivalent(n0)).toBeTrue();
			})
		});
		describe('operators', () => {
			describe('getLabel(node)', () => {
				it('returns the nodes label', () => {
					expect(Node.getLabel(n2)).toEqual(n2.label());
				});
			});
			describe('getData(node)', () => {
				it('returns the nodes label', () => {
					expect(Node.getData(n2)).toBe(n2.data());
				});
			});
			describe('getType(node)', () => {
				it('returns the nodes label', () => {
					expect(Node.getType(n2)).toBe(n2.type());
				});
			});
			describe('isEquivalent(argNode)(srcNode)', () => {
				it('returns a boolean based on node equality', () => {
					expect(Node.isEquivalent(n0)(n0)).toBeTrue();
					expect(Node.isEquivalent(n0)(n2)).toBeFalse();
				});
			});
			describe('subType', () => {
				it('is a function', () => {
					expect(myExtension).toBeFunction();
				});
				describe('when given a new mixin', () => {
					it('returns a new node type', () => {
						expect(myExtension).toBeFunction();
					});
					it('has a mixins property', () => {
						expect(myExtension.mixins).toBeTruthy();
					});
					it('maintains all old mixins unless overwritten', () => {
						expect(exn0.label).toBeFunction();
						expect(exn0.data).toBeFunction();
						expect(exn0.type).toBeFunction();
						expect(exn0.isEquivalent).toBeFunction();
					});
					describe('new mixin (label)', () => {
						it('returns the new mixin function', () => {
							expect(exn0.label).toBeFunction();
							expect(exn0.label()).toBe('factoryTestnode0');
						});
					});
				});
			});
		});
	});
});