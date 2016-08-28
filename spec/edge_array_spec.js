describe('EdgeArray', function() {
    let Node, NodeArray, Edge, EdgeArray;
    let edgesWithNode, edgeByNodes, edgesByArray, getNodes, getNeighbors;
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
        getNeighbors = EdgeArray.getNeighbors;
    });
    beforeEach(function() {
        [n00, n01, n10, n11, n20, n21, n30, n31] = ["n00", "n01", "n10",
            "n11", "n20", "n21", "n30", "n31"
        ].map(Node);
        e0 = Edge(n00, n01);
        e1 = Edge(n10, n11);
        e2 = Edge(n20, n21, 10);
        e3 = Edge(n30, n31);
        e4 = Edge(n31, n00);
        // n00.toString = () => "n00";
        // console.log(n00);
        myEdge = e0;
        myArray = EdgeArray.spawn([e0, e1, e4]);
        myAltArray = EdgeArray.spawn([e0, e2, e3]);
    });
    it('is an object', function() {
        expect(EdgeArray).toBeObject();
    });
    describe('spawn', () => {
        it('returns an spawn of EdgeArray', function() {
            expect(myArray).toBeArray();
        });
    });
    describe('methods', function() {
        describe('contains()', () => {
            it(
                'checks if any of the elements are equivalent to that provided',
                function() {
                    expect(myArray.contains(myEdge)).toBeTrue();
                });
        });
        describe('isValid(argEdge', () => {
            it('returns true if argEdge is an spawnof Edge',
                function() {
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
                    it(
                        'returns all edges containing equivalent nodes',
                        function() {
                            expect(edgesWithNode(myArray)(
                                n00)).toContain(e4);
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
                        expect(edgeByNodes(myArray)(n00))
                            .toBeFunction();
                    });
                });
                describe('when given a dest node', () => {
                    it(
                        'returns all edges containing equivalent nodes',
                        function() {
                            expect(edgeByNodes(myArray)(n00)
                                (n01)).toBe(e0);
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
                    it(
                        'returns all edges containing equivalent nodes',
                        function() {
                            expect(edgesByArray(myArray)(
                                n00, n10)).toContain(e4);
                        });
                });
            });
        });
        describe('getNodes', () => {
            it(
                'returns a NodeArray of all  the nodes contained in an EdgeArray',
                function() {
                    console.log(getNodes(EdgeArray.spawn([])));
                    expect(getNodes(myArray)).toBeArray();
                });
        });
        describe('getNeighbors', () => {
            describe('when given an array', () => {
                it('returns a function', function() {
                    expect(getNeighbors(myArray)).toBeFunction();
                });
            });
            describe('when given a node to exclude', () => {
                it(
                    'returns an array of all the nodes that neighbor the given node',
                    function() {
                        expect(getNeighbors(myArray)(n00)).toBeArray();
                    });
            });
        });
    });
});