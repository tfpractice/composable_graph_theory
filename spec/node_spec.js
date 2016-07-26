fdescribe('Node', function() {
    let Node;
    let myNode, ns0, ns1, ns2, ns3;
    beforeAll(function() {
        console.log('\n.........Node Spec.........');
        Node = this.GR.Node;
        // console.log(Node);
    });
    describe('.Node(lable, data) ', () => {
        let myState, n2;
        beforeEach(function() {
            n2 = Node(2, 0);
            // console.log(n2);
            myNode = Node(2, 0);
        });
        it('returns a new Node object', function() {
            expect(myNode).toBeObject();
        });
        describe('#label()', () => {
            it('has a #label method', function() {
                expect(myNode.label).toBeFunction();
            });
            it('returns the first argument of the params list', function() {
                expect(myNode.label()).toBe(2);
            });
        });
        describe('#type()', () => {
            it('has a #type method', function() {
                expect(myNode.type).toBeFunction();
            });
            it('returns `Node`', function() {
                expect(myNode.type()).toEqual('Node');
            });
        });
        describe('#data()', () => {
            it('has a #data method', function() {
                expect(myNode.data).toBeFunction();
            });
            it('returns the second argument', function() {
                expect(myNode.data()).toBe(0);
            });
        });
        describe('#isEquivalent', () => {
            it('returns true if the two objects share label', function() {
                // console.log(myNode.isEquivalent.toString());
                // console.log(n2.label());
                expect(myNode.isEquivalent(n2)).toBeTrue();
            });
        });
    });
});