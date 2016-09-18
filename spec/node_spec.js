fdescribe('Node', function() {
	let Node;
	let n0, n00, n1, n2, n3;
	let myState, state0, state1, state2, state3;
	let myExtension, t_lFunc, t_nLabel;
	let nStruct;
	let stateX, nodeX, nodeXX;
	beforeAll(function() {
		console.log('\n.........Node Spec.........');
		Node = this.GR.Node;
		nStruct = (label = '', data = {}) => ({ label, data });
		const { equalize, datafy, labelize, typify } = this.GR.MethodUtils;
		tFunc = (s) => 'Node';
		dFunc = ({ data = {} }) => data;
		lFunc = ({ label = '' }) => label;
		eqFunc = state => arg => (labelize(lFunc)(state).sameLabel(arg));
		// EqFunc = ({ label: hostL = '' }) => ({ label: argL = '' }) =>
		// hostL !== argl
		nType = typify(tFunc);
		nData = datafy(dFunc);
		nEq = equalize(eqFunc);
		nLabel = labelize(lFunc);
		t_lFunc = ({ label = '' }) => 'factoryTest' + label;
		t_nLabel = labelize(t_lFunc);
		myExtension = Node.subType(t_nLabel);

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
			});
		});
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
				expect(Node.isEquivalent(nodeX)(nodeXX)).toBeTrue();
				// Expect(Node.isEquivalent(state0)(state0))
				// .toBeTrue();
				// expect(Node.isEquivalent(state0)(state2))
				// .toBeFalse();
			});
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
				expect(nodeX.isEquivalent).toBeFunction();
			});
			describe('new mixin (label)', () => {
				it('returns the new mixin function', () => {
					expect(exn0.label).toBeFunction();
					expect(exn0.label()).toBe('factoryTestnode0');
					expect(nodeX.isEquivalent(nodeXX)).toBeTrue();

				});
			});
		});
	});
});