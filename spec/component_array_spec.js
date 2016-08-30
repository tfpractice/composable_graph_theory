describe('ComponentArray', function() {
    let Node, NodeArray, Edge, EdgeArray, ComponentArray;
    let edgesWithNode, edgeByNodes, edgesByArray, getNodes, getNeighbors;
    let myNode, myEdge, myComponent, myArray, myAltArray;
    let n00, n01, n10, n11, n20, n21, n30, n31, n40, n41, n50, n51;
    let e0, e1, e2, e3, e4;
    let a0, a1, a2, a3, a4;
    beforeAll(function() {
        console.log('\n.........ComponentArray Spec.........');
        Node = this.GR.Node;
        NodeArray = this.GR.NodeArray;
        Edge = this.GR.Edge;
        EdgeArray = this.GR.EdgeArray;
        ComponentArray = this.GR.ComponentArray;
        edgesWithNode = EdgeArray.edgesWithNode;
        edgeByNodes = EdgeArray.edgeByNodes;
        edgesByArray = EdgeArray.edgesByArray;
        getNodes = EdgeArray.getNodes;
        getNeighbors = EdgeArray.getNeighbors;
    });
    beforeEach(function() {
        [n00, n01, n10, n11, n20, n21, n30, n31, n40, n41, n50, n51] =
            ["n00", "n01", "n10",
            "n11", "n20", "n21", "n30", "n31", "n40", "n41", "n50",
            "n51"
        ].map(Node);
        a0 = NodeArray.spawn([n00, n01]);
        a1 = NodeArray.spawn([n10, n11]);
        a2 = NodeArray.spawn([n20, n21]);
        a3 = NodeArray.spawn([n30, n31]);
        a4 = NodeArray.spawn([n31, n00]);

        e0 = Edge(n00, n01);
        e1 = Edge(n10, n11);
        e2 = Edge(n20, n21, 10);
        e3 = Edge(n30, n31);
        e4 = Edge(n31, n00);
        // n00.toString = () => "n00";
        // console.log(n00);
        myComponent = a0;
        myArray = ComponentArray.spawn([a0, a1, a4]);
        myAltArray = ComponentArray.spawn([a0, a2, a3]);
    });
    it('is an object', () => {
        expect(ComponentArray).toBeObject();
    });
    describe('spawn', () => {
        it('returns an spawn of EdgeArray', () => {
            console.log(myArray);
            expect(myArray).toBeArray();
        });
    });
    describe('methods', () => {
        describe('contains()', () => {
            it(
                'checks if any of the elements are equivalent to that provided', () => {
                    expect(myArray.contains(myComponent)).toBeTrue();
                });
        });
        describe('isValid(argEdge', () => {
            it('returns true if argEdge is an spawnof Edge', () => {
                expect(myArray.isValid(myComponent)).toBeTrue();
            });
        });
        describe('#removeElement', () => {
            it('removes and Edge from the array', () => {
                myArray.removeElement(myComponent);
                expect(myArray.contains((myComponent))).toBeFalse();
            });
        });
        describe('#clear', () => {
            it('empties and returns the array ', () => {
                expect(myArray.clear()).toBeEmptyArray();
            });
        });
    });
    describe('operators', () => {
        describe('hasIntersectingComponent', () => {
            it(
                'checks if any of the elements interesect the argument', () => {
                    // console.log(myArray);
                    expect(ComponentArray.hasIntersectingComponent(
                        myArray)(a4)).toBeTrue();
                    expect(ComponentArray.hasIntersectingComponent(
                        myArray)(a1)).toBeFalse();
                });

        });
        describe('findIntersectingComponent', () => {
            it('returns the NodeArray which interesects the arg', () => {
                expect(ComponentArray.findIntersectingComponent(
                    myArray)(a4)).toBe(a0);
            });
        });
        describe('mergeComponents', () => {
            it('unites the context and the arg', function() {
                let myLen = myArray.length;
                console.log(myArray.length);

                ComponentArray.mergeComponents(myArray)(
                    myAltArray);
                console.log(myArray.length);
            });

        });
    });
});