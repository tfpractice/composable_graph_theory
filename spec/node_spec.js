describe('Node', function() {
    var GR = require('../graph_theory');
    var Node = GR.Node;
    var NodeState = Node.NodeState;
    var myNode, ns0, ns1, ns2, ns3;

    beforeAll(function() {
        console.log('\n.........Node Spec.........');
    });
    describe('NodeState', () => {

        it('returns a new object', function() {
            let myNode = NodeState(3, {
                name: 'myNode'
            });
            expect(myNode).toBeObject();

        });
    });
    describe('.makeNode() ', () => {
        let myState, fNode, n2;
        beforeEach(function() {
            myState = NodeState(2, 0);
            ns0 = NodeState(0);
            ns2 = NodeState(2, 0);
            n2 = Node.makeNode(ns2);
            fNode = Node.makeNode(myState);
        });
        it('returns a new Node object', function() {
            expect(fNode).toBeObject();
        });

        it('has a #label', function() {
            expect(fNode.label).toBeTruthy();
        });
        describe('#isEquivalent', () => {
            it('returns true if the two objects share label', function() {
                expect(fNode.isEquivalent(n2)).toBeTrue();
            });
        });
    });
});