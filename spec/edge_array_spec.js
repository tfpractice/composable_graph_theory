fdescribe('EdgeArray', function() {

    let Node, NodeArray, Edge, EdgeArray;
    let edgesWithNode, edgeByNodes, edgesByArray, getNodes;
    let myNode, myEdge, myArray, myAltArray;
    let n00, n01, n10, n11, n20, n21, n30, n31;
    let e0, e1, e2, e3, e4;
    beforeAll(function() {
        console.log('\n.........EdgeArray Spec.........');
        Node = this.GR.Node;
        NodeArray = this.GR.NodeArray;
        Edge = this.GR.Edge;
        EdgeArray = this.GR.EdgeArray;
        edgesWithNode = EdgeArray.edgesWithNode
        edgeByNodes = EdgeArray.edgeByNodes
        edgesByArray = EdgeArray.edgesByArray
        getNodes = EdgeArray.getNodes;
        // edgeByNodes = EdgeArray.edgeByNodes
    });
    beforeEach(function() {
        [n00, n01, n10, n11, n20, n21, n30, n31] = ["n00", "n01", "n10", "n11", "n20", "n21", "n30", "n31"].map(Node);
        // console.log(n00);

        e0 = Edge(n00, n01);
        e1 = Edge(n10, n11);
        e2 = Edge(n20, n21, 10);
        e3 = Edge(n30, n31);
        e4 = Edge(n31, n00);
        myEdge = e0;
        // console.log(EdgeArray.instance);
        myArray = EdgeArray.instance([e0, e1, e4]);
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
    describe('methods', function() {

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
    describe('operators', () => {
        describe('edgesWithNode', () => {
            describe('when given an edgearray', () => {
                it('returns a function', function() {
                    expect(edgesWithNode(myArray)).toBeFunction();
                });
                describe('when given a node', () => {
                    it('returns all edges containing equivalent nodes', function() {
                        expect(edgesWithNode(myArray)(n00)).toContain(e4);
                    });
                });
            });
        });
        describe('edgeByNodes', () => {
            describe('when given an edgearray', () => {
                it('returns a function', function() {
                    expect(edgeByNodes(myArray)).toBeFunction();
                });
                describe('when given a source node', () => {
                    it('returns a function', function() {
                        expect(edgeByNodes(myArray)(n00)).toBeFunction();
                    });
                });
                describe('when given a dest node', () => {
                    it('returns all edges containing equivalent nodes', function() {
                        expect(edgeByNodes(myArray)(n00)(n01)).toBe(e0);
                    });
                });
            });
        });
        describe('edgesByArray', () => {
            describe('when given an edgearray', () => {
                it('returns a function', function() {
                    expect(edgesByArray(myArray)).toBeFunction();
                });
                describe('when given a list of nodes', () => {
                    it('returns all edges containing equivalent nodes', function() {
                        console.log(edgesByArray(myArray)(n00, n10));
                        expect(edgesByArray(myArray)(n00, n10)).toContain(e4);
                    });
                });
            });
        });
        describe('getNodes', () => {
            it('returns a NodeArray of all  the nodes contained in an EdgeArray', function() {
                // console.log(getNodes(myArray).length);

                // console.log(getNodes(EdgeArray.instance([])));
                expect(getNodes(myArray)).toBeArray();
            });
        });
    });
});