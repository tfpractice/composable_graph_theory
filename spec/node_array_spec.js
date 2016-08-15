describe('NodeArray', function() {
    let Node, NodeArray;
    let myNode, myArray, myAltArray, n1, n2, n3, n4;
    beforeAll(function() {
        console.log('\n.........NodeArray Spec.........');
        // subArray = this.GR.Utils.subArray;
        Node = this.GR.Node;
        NodeArray = this.GR.NodeArray;
    });
    beforeEach(function() {
        n1 = Node("n1", 0);
        n2 = Node("n2", 1);
        n3 = Node("n3", 2);
        n4 = Node("n4", 3);
        myNode = Node("NYC", {
            name: "NYC"
        });
        console.log(NodeArray.instance);
        myArray = NodeArray.instance([myNode]);
        myArray.push(n3);
        myArray.push(n4);
        myAltArray = NodeArray.instance([n1]);
        myAltArray.push(n2);
        myAltArray.push(n3);
        console.log(NodeArray);
    });
    describe('init', function() {
        it('is a typeof Array', function() {
            expect(myArray instanceof Array).toBeTrue();
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
});