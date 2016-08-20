fdescribe('EdgeArray', function() {

    let Node, NodeArray, Edge, EdgeArray;
    let myNode, myEdge, myArray, myAltArray;
    let n00, n01, n10, n11, n20, n21, n30, n31;
    let e0, e1, e2, e3;
    beforeAll(function() {
        console.log('\n.........EdgeArray Spec.........');
        Node = this.GR.Node;
        NodeArray = this.GR.NodeArray;
        Edge = this.GR.Edge;
        EdgeArray = this.GR.EdgeArray;
    });
    beforeEach(function() {
        [n00, n01, n10, n11, n20, n21, n30, n31] = ["n00", "n01", "n10", "n11", "n20", "n21", "n30", "n31"].map(Node);
        // console.log(n00);

        e0 = Edge(n00, n01);
        e1 = Edge(n10, n11);
        e2 = Edge(n20, n21, 10);
        e3 = Edge(n30, n31);
        myEdge = e0;
        // console.log(EdgeArray.instance);
        myArray = EdgeArray.instance([e0, e1]);
        myAltArray = EdgeArray.instance([e0, e2, e3]);
        // myArray.push(n3);
        // myArray.push(n4);
        // myAltArray = EdgeArray.instance([n1]);
        // myAltArray.push(n2);
        // myAltArray.push(n3);
        // console.log(EdgeArray);
    });
    it('is an object', function() {
        expect(EdgeArray).toBeObject();
    });
    describe('instance', () => {
        it('returns an instance of EdgeArray', function() {
            // console.log(myArray.map(eArr => eArr.nodes()));
            expect(myArray).toBeArray();
        });
    });
    describe('contains()', () => {
        it('checks if any of the elements are equivalent to that provided', function() {
            expect(myArray.contains(myEdge)).toBeTrue();
        });
    });
    describe('isValid(argEdge', () => {
        it('returns true if argEdge is an instanceof Edge', function() {
            expect(myArray.isValid(myEdge)).toBeTrue();
        });
    });

    describe('#removeElement', () => {
        it('removes and Edge from the array', function() {
            myArray.removeElement(myEdge);
            expect(myArray.contains((myEdge))).toBeFalse();
        });
    });
    describe('#clear', function() {
        it('empties and returns the array ', function() {
            // console.log(myArray.clear());
            // console.log(myArray);
            expect(myArray.clear()).toBeEmptyArray();
        });
    });
    it('has all the setMixin methods', function() {
        expect(myArray.contains).toBeTruthy();
        expect(myArray.hasSameSize).toBeTruthy();
        expect(myArray.isSubset).toBeTruthy();
        expect(myArray.isEquivalent).toBeTruthy();
        expect(myArray.findEquivalentElement).toBeTruthy();
        expect(myArray.intersects).toBeTruthy();
        expect(myArray.intersection).toBeTruthy();
        expect(myArray.hasDistinctElements).toBeTruthy();
        expect(myArray.difference).toBeTruthy();
        expect(myArray.union).toBeTruthy();
        expect(myArray.unionize).toBeTruthy();
        expect(myArray.push).toBeTruthy();

    });
});