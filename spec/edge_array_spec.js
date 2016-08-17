describe('EdgeArray', function() {
    let Node, NodeArray, EdgeArray;
    let myNode, myArray, myAltArray, n1, n2, n3, n4;
    beforeAll(function() {
        console.log('\n.........NodeArray Spec.........');
        // subArray = this.GR.Utils.subArray;
        Node = this.GR.Node;
        NodeArray = this.GR.NodeArray;
        EdgeArray = this.GR.EdgeArray;
    });
    beforeEach(function() {
        [n00, n01, n10, n11, n20, n21] = ["n00", "n01", "n10", "n11", "n20", "n21"].map(Node);
        // console.log(n00);
        e0 = Edge(n00, n01);
        e1 = Edge(n10, n11);
        e2 = Edge(n20, n21, 10);
    });
});