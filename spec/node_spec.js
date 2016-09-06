fdescribe('Node', function() {
    let Node;
    let myNode, n0, n00, n1, n2, n3;
    let myState, state0, state1, state2, state3;
    let typify, tFunc, nType;
    let datafy, dFunc, nData;
    let equatable, eqFunc, nEq;
    let labelize, lFunc, nLabel;
    beforeAll(function() {
        console.log('\n.........Node Spec.........');
        Node = this.GR.Node;
        equalize = this.GR.MethodUtils.equalize;
        datafy = this.GR.MethodUtils.datafy;
        labelize = this.GR.MethodUtils.labelize;
        typify = this.GR.MethodUtils.typify;
        tFunc = (s) => "Node",
        dFunc = (state) => state.data;
        lFunc = (state) => state.label;
        // eqFunc = state => arg => (labelize(lFunc).sameLabel(lf));
        eqFunc = state => arg => (labelize(lFunc)(state).sameLabel(arg));

        nType = typify(tFunc);
        nData = datafy(dFunc);
        nEq = equalize(eqFunc);
        nLabel = labelize(lFunc);
        myNode = Node(nType, nData, nLabel, nEq)
    });
    beforeEach(function() {
        state0 = {
            label: "node0",
            data: {
                position: 0
            }
        };
        n0 = myNode(state0.label, state0.data);
        state1 = {
            label: "node1",
            data: {
                position: 1
            }
        };
        n1 = myNode(state1.label, state1.data);
        n00 = myNode(state0.label, state1.data);
        state2 = {
            label: "node2",
            data: {
                position: 2
            }
        };
        n2 = myNode(state2.label, state2.data);
        state3 = {
            label: "node3",
            data: {
                position: 3
            }
        };
        n3 = myNode(state3.label, state3.data);
        // [n0, n1, n2, n3] = Array.from([
        //     [state0], state1, state2, state3
        // ], myNode);
        // console.log(n0);
        // n2 = myNode(2, 0);
        // myNode = Node(2, 0);
    });
    it('is a function', function() {
        expect(Node).toBeFunction();
    });
    describe('.toString()', () => {
        it('returns "Node"', () => {
            // expect(Node.toString()).toBe('Node');
        });
    });
    describe('when given a set of mixins', () => {
        it('returns a function with operators', function() {
            expect(Node(nType, nData, nLabel, nEq)).toBeFunction();
        });
    });
    describe('when given a label and a data attribute', () => {
        describe('.Node(lable, data) ', () => {
            it('returns a new Node object', () => {
                expect(n2).toBeObject();
            });
            describe('#label()', () => {
                it('returns the first argument of the params list', () => {
                    expect(n0.label).toBeFunction();
                    expect(n0.label()).toBe('node0');
                });
            });
            describe('#type()', () => {
                it('returns `Node`', () => {
                    expect(n0.type).toBeFunction();
                    expect(n0.type()).toEqual('Node');
                });
            });
            describe('#data()', () => {
                it('returns the data argument', () => {
                    expect(n0.data).toBeFunction();
                    expect(n0.data().position).toBe(0);
                });
            });
            describe('#isEquivalent', () => {
                it('returns true if the two objects share label', () => {
                    console.log(n0.isEquivalent.toString());
                    expect(n0.isEquivalent((n0))).toBeTrue();
                    // expect(n0.isEquivalent(n00)).toBeTrue();
                    // expect(n0.isEquivalent(n2)).toBeFalse();
                })
            });
        });
        describe('operators', () => {
            describe('getLabel(node)', () => {
                it('returns the nodes label', () => {
                    expect(myNode.getLabel(n2)).toBe(n2.label());
                });
            });
            describe('getData(node)', () => {
                it('returns the nodes label', () => {
                    expect(myNode.getData(n2)).toBe(n2.data());
                });
            });
            describe('getType(node)', () => {
                it('returns the nodes label', () => {
                    expect(myNode.getType(n2)).toBe(n2.type());
                });
            });
            describe('isEquivalent(argNode)(srcNode)', () => {
                it('returns a boolean based on node equality', () => {
                    // expect(myNode.isEquivalent(n00)(n0)).toBeTrue();
                    expect(myNode.isEquivalent(n0)(n0)).toBeTrue();
                    expect(myNode.isEquivalent(n0)(n2)).toBeFalse();

                });
            });
        });
    });
});