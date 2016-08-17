fdescribe('EdgeArray', function() {

    let Node, NodeArray, Edge, EdgeArray;
    let myNode, myArray, myAltArray;
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
        console.log(EdgeArray.instance);
        myArray = EdgeArray.instance([e0, e1]);
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
            console.log(myArray.map(eArr => eArr.nodes()));
            expect(myArray).toBeArray();
        });
    });
});