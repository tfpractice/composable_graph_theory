fdescribe('Factory', function() {
    let Factory, fState;
    let myFactory, n0, n00, n1, n2, n3;
    let myState, state0, state1, state2, state3;
    let typify, tFunc, nType;
    let datafy, dFunc, nData;
    let equatable, eqFunc, nEq;
    let labelize, lFunc, nLabel;
    beforeAll(function() {
        console.log('\n.........Factory Spec.........');
        Factory = this.GR.MethodUtils.factory;
        equalize = this.GR.MethodUtils.equalize;
        datafy = this.GR.MethodUtils.datafy;
        labelize = this.GR.MethodUtils.labelize;
        typify = this.GR.MethodUtils.typify;
        tFunc = (s) => "Factory",
        dFunc = (state) => state.data;
        lFunc = (state) => state.label;
        eqFunc = state => arg => (labelize(lFunc)(state).sameLabel(arg));
        nType = typify(tFunc);
        nData = datafy(dFunc);
        nEq = equalize(eqFunc);
        nLabel = labelize(lFunc);
        myFactory = Factory(nType, nData, nLabel, nEq)
    });
    beforeEach(function() {
        state0 = {
            label: "node0",
            data: {
                position: 0
            }
        };
        n0 = myFactory(state0);
        state1 = {
            label: "node1",
            data: {
                position: 1
            }
        };
        n1 = myFactory(state1);
        n00 = myFactory({
            state: state0.state,
            label: state1.label
        });
        state2 = {
            label: "node2",
            data: {
                position: 2
            }
        };
        n2 = myFactory(state2);
        state3 = {
            label: "node3",
            data: {
                position: 3
            }
        };
        n3 = myFactory(state3);
    });
    it('is a function', function() {
        expect(Factory).toBeFunction();
    });
    describe('.toString()', () => {
        it('returns "Factory"', () => {});
    });
    describe('when given a set of mixins', () => {
        it('returns a function with operators', function() {
            expect(Factory(nType, nData, nLabel, nEq)).toBeFunction();
        });
    });
    describe('when given a state object', () => {
        describe('.Factory(label, data) ', () => {
            it('returns a new Factory object', () => {
                expect(n2).toBeObject();
            });
            describe('#label()', () => {
                it('returns the first argument of the params list', () => {
                    expect(n0.label).toBeFunction();
                    expect(n0.label()).toBe('node0');
                });
            });
            describe('#type()', () => {
                it('returns `Factory`', () => {
                    expect(n0.type).toBeFunction();
                    expect(n0.type()).toEqual('Factory');
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
                    expect(n0.isEquivalent(n0)).toBeTrue();
                })
            });
        });
        describe('operators', () => {
            describe('getLabel(node)', () => {
                it('returns the nodes label', () => {
                    expect(myFactory.getLabel(n2)).toBe(n2.label());
                });
            });
            describe('getData(node)', () => {
                it('returns the nodes label', () => {
                    expect(myFactory.getData(n2)).toBe(n2.data());
                });
            });
            describe('getType(node)', () => {
                it('returns the nodes label', () => {
                    expect(myFactory.getType(n2)).toBe(n2.type());
                });
            });
            describe('isEquivalent(argFactory)(srcFactory)', () => {
                it('returns a boolean based on node equality', () => {
                    expect(myFactory.isEquivalent(n0)(n0)).toBeTrue();
                    expect(myFactory.isEquivalent(n0)(n2)).toBeFalse();
                });
            });
        });
    });
});