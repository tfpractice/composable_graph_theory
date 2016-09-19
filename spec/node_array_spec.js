describe('NodeArray', function() {
	let Node, NodeArray;
	let myNode, myArray, myAltArray, n1, n2, n3, n4;
	let n00, n01, n10, n11, n20, n21;
	let e0, e1, e2;
	beforeAll(function() {
		console.log('\n.........NodeArray Spec.........');
		Node = this.GR.Node;
		NodeArray = this.GR.NodeArray;
		// console.log(NodeArray.mixins);
	});

	beforeEach(function() {
		n1 = Node('n1', 0);
		n2 = Node('n2', 1);
		n3 = Node('n3', 2);
		n4 = Node('n4', 3);
		myNode = Node('NYC', {
			name: 'NYC',
		});
		myArray = NodeArray.spawn([myNode, n3, n4]);
		myAltArray = NodeArray.spawn([n1, n2, n3]);

	});

	describe('init', () => {
		it('is a typeof Array', () => {
			expect(myArray instanceof Array).toBeTrue();
		});
		it('has all the setMixin methods', () => {
			expect(myArray.contains).toBeTruthy();
			expect(myArray.isSubset).toBeTruthy();
			expect(myArray.isEquivalent).toBeTruthy();
			expect(myArray.findEquivalent).toBeTruthy();
			expect(myArray.intersects).toBeTruthy();
			expect(myArray.intersection).toBeTruthy();
			expect(myArray.hasDistinctElements).toBeTruthy();
			expect(myArray.difference).toBeTruthy();
			expect(myArray.union).toBeTruthy();
			expect(myArray.unite).toBeTruthy();
			expect(myArray.push).toBeTruthy();
		});
	});
	// describe('operators', () => {
	// 	describe('isPresent', () => {
	// 		it(
	// 			'returns a boolean regarding the persence of an element in an array',
	// 			() => {
	// 				expect(NodeArray.isPresent(n2)(
	// 					myArray)).toBeFalse();
	// 				expect(NodeArray.isPresent(n3)(
	// 					myArray)).toBeTrue();
	// 				expect(NodeArray.isPresent(n2)(myAltArray)).toBeTrue();
	// 			});
	// 	});
	// });
});