describe('Node', function() {
    var GR = require('../graph_theory');
    var Node = GR.Node;
    var NodeState = Node.NodeState;

    var myNode;

    beforeAll(function() {
        console.log('\n.........Node Spec.........');
    });
    describe('NodeState', () => {
        let ns0, ns1, ns2, ns3;
        it('returns a new object', function() {
            console.log(NodeState);
            let myNode = NodeState(3, {
                name: 'myNode'
            });
            expect(myNode).toBeObject();

        });
    });
    describe('.makeNode() ', () => {
        it('returns a new Node object', function() {
            let myState = NodeState(2);
            let fNode = Node.makeNode(myState);
            expect(fNode).toBeObject();

        });

    });
});