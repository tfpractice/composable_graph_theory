fdescribe('Node', function() {
    let Node;
    let myNode, ns0, ns1, ns2, ns3;
    let myState, n2;
    beforeAll(function() {
        console.log('\n.........Node Spec.........');
        Node = this.GR.Node;
        // console.log(Node);
    });
    beforeEach(function() {
        n2 = Node(2, 0);
        myNode = Node(2, 0);
    });
    describe('.toString()', () => {
        it('returns "Node"', () => {
            expect(Node.toString()).toBe('Node');
        });
    });
    describe('.Node(lable, data) ', () => {

        it('returns a new Node object', () => {
            expect(myNode).toBeObject();
        });
        it('matches the #type of each instance', () => {
            expect(n2.type()).toBe(Node.toString());
        });
        describe('#label()', () => {
            it('has a #label method', () => {
                expect(myNode.label).toBeFunction();
            });
            it('returns the first argument of the params list', () => {
                expect(myNode.label()).toBe(2);
            });
        });
        describe('#type()', () => {
            it('has a #type method', () => {
                expect(myNode.type).toBeFunction();
            });
            it('returns `Node`', () => {
                expect(myNode.type()).toEqual('Node');
            });
        });
        describe('#data()', () => {
            it('has a #data method', () => {
                expect(myNode.data).toBeFunction();
            });
            it('returns the second argument', () => {
                expect(myNode.data()).toBe(0);
            });
        });
        describe('#isEquivalent', () => {
            it('returns true if the two objects share label', () => {
                expect(myNode.isEquivalent(n2)).toBeTrue();
            });
        });
    });
    describe('operators', () => {
        describe('getLabel(node)', () => {
            it('returns the nodes label', () => {
                expect(Node.getLabel(n2)).toBe(n2.label());
            });
        });
        describe('getData(node)', () => {
            it('returns the nodes label', () => {
                expect(Node.getData(n2)).toBe(n2.data());
            });
        });
        describe('getType(node)', () => {
            it('returns the nodes label', () => {
                expect(Node.getType(n2)).toBe(n2.type());
            });
        });
        describe('isEquivalent(argNode)(srcNode)', () => {
            it('returns a boolean based on node equality', () => {
                expect(Node.isEquivalent(n2)(myNode)).toBeTrue();
            });
        });
    });
});