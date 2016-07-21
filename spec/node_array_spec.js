describe('NodeArray', function() {
    var GR = require('../graph_theory');
    var Node = GR.Node;
    var NodeArray = GR.NodeArray;
    var myNode, myArray, myAltArray, n1, n2, n3, n4;
    beforeAll(function() {
        console.log('\n.........NodeArray Spec.........');
    });
    beforeEach(function() {
        n1 = Node.makeNode("n1", 0);
        n2 = Node.makeNode("n2", 1);
        n3 = Node.makeNode("n3", 2);
        n4 = Node.makeNode("n4", 3);
        myNode = Node.makeNode("NYC", {
            name: "NYC"
        });
        myArray = NodeArray.makeArray(myNode);
        myArray.push(n3);
        myArray.push(n4);
        myAltArray = NodeArray.makeArray(n1);
        myAltArray.push(n2);
        myAltArray.push(n3);
        console.log(NodeArray);
    });
    describe('init', function() {
        it('is a typeof Array', function() {
            expect(myArray instanceof Array).toBeTrue();
        });
    });
});