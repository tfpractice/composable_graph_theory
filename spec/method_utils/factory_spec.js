fdescribe('factory', function() {
    let factory, fState;
    let myfactory, n0, n00, n1, n2, n3, subN0;
    let myExtension;
    let myState, state0, state1, state2, state3;
    let typify, tFunc, nType;
    let datafy, dFunc, nData;
    let equatable, eqFunc, nEq;
    let labelize, lFunc, nLabel;
    let t_lFunc, t_nLabel;
    beforeAll(function() {
        console.log('\n.........factory Spec.........');
        factory = this.GR.MethodUtils.factory;
        equalize = this.GR.MethodUtils.equalize;
        datafy = this.GR.MethodUtils.datafy;
        labelize = this.GR.MethodUtils.labelize;
        typify = this.GR.MethodUtils.typify;
        tFunc = (s) => "factory",
        dFunc = (state) => state.data;
        lFunc = (state) => state.label;
        t_lFunc = (state) => "factoryTest" + state.label,
        eqFunc = state => arg => (labelize(lFunc)(state).sameLabel(arg));
        nType = typify(tFunc);
        nData = datafy(dFunc);
        nEq = equalize(eqFunc);
        nLabel = labelize(lFunc);
        t_nLabel = labelize(t_lFunc);
        myfactory = factory(nType, nData, nLabel, nEq)
        myExtension = myfactory.subType(t_nLabel);
    });
    beforeEach(function() {
        state0 = {
            label: "node0",
            data: {
                position: 0
            }
        };
        n0 = myfactory(state0);
        state1 = {
            label: "node1",
            data: {
                position: 1
            }
        };
        n1 = myfactory(state1);
        n00 = myfactory({
            state: state0.state,
            label: state1.label
        });
        state2 = {
            label: "node2",
            data: {
                position: 2
            }
        };
        n2 = myfactory(state2);
        state3 = {
            label: "node3",
            data: {
                position: 3
            }
        };
        n3 = myfactory(state3);
        subN0 = myExtension(state0);
    });
    it('is a function', function() {
        expect(factory).toBeFunction();
    });
    describe('.toString()', () => {
        it('returns "factory"', () => {});
    });
    describe('when given a set of mixins', () => {
        it('returns a function with operators', function() {
            expect(factory(nType, nData, nLabel, nEq)).toBeFunction();
        });
    });
    describe('when given a state object', () => {
        describe('.factory(label, data) ', () => {
            it('returns a new factory object', () => {
                expect(n2).toBeObject();
            });
            describe('#label()', () => {
                it('returns the first argument of the params list', () => {
                    expect(n0.label).toBeFunction();
                    expect(n0.label()).toBe('node0');
                });
            });
            describe('#type()', () => {
                it('returns `factory`', () => {
                    expect(n0.type).toBeFunction();
                    expect(n0.type()).toEqual('factory');
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
                    expect(myfactory.getLabel(n2)).toBe(n2.label());
                });
            });
            describe('getData(node)', () => {
                it('returns the nodes label', () => {
                    expect(myfactory.getData(n2)).toBe(n2.data());
                });
            });
            describe('getType(node)', () => {
                it('returns the nodes label', () => {
                    expect(myfactory.getType(n2)).toBe(n2.type());
                });
            });
            describe('isEquivalent(argfactory)(srcfactory)', () => {
                it('returns a boolean based on node equality', () => {
                    expect(myfactory.isEquivalent(n0)(n0)).toBeTrue();
                    expect(myfactory.isEquivalent(n0)(n2)).toBeFalse();
                });
            });
        });
    });
    describe('mixins', () => {
        it('is an array', () => {
            expect(myfactory.mixins).toBeArray();
        });
        it('is nonenumerable', () => {
            expect(Object.keys(myfactory)).not.toContain('mixins');
        });
    });
    describe('subType', () => {
        it('is a function', () => {
            expect(myExtension).toBeFunction();
        });
        it('is nonenumerable', () => {
            expect(Object.keys(myfactory)).not.toContain('subType');
        });
        describe('when given more mixins', () => {
            it('applies new mixins to factory', () => {
                expect(subN0.label).toBeFunction();
                expect(subN0.label()).toBe('factoryTestnode0');
            });
        });
    });
    describe('subType', () => {
        describe('when given a factory', () => {
            it('returns an augmented  factory', () => {
                expect(factory.subType(myfactory)).toBeFunction();
            });
            describe('when given more mixins', () => {
                it('applies new mixins to factory', () => {
                    let mySubFact = factory.subType(myfactory)(
                        t_nLabel);
                    let subTypeN0 = mySubFact(state0);
                    expect(factory.subType(myfactory)(t_nLabel)).toBeFunction();
                    expect(subTypeN0.label).toBeFunction();
                    expect(subTypeN0.label()).toBe('factoryTestnode0');
                });
            });
        });
    });
});