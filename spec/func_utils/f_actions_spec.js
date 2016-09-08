fdescribe('actions', function() {
    let actions, asArray, asObject;
    let myArrayActs, myObjActs;
    let myState, state0, state1, state2, state3;
    let typify, tFunc, nType;
    let datafy, dFunc, nData;
    let equatable, eqFunc, nEq;
    let labelize, lFunc, nLabel;
    let liftResult, f1, f1_lift, f2, f2_lift, f3, f3_lift, final, myFinal, d_func;
    let aFin, oFin;
    let lState;
    beforeAll(function() {
        console.log('\n.........liftResult Spec.........');
        liftResult = this.GR.FuncUtils.liftResult;
        labelize = this.GR.MethodUtils.labelize;
    });
    beforeAll(function() {
        console.log('\n.........actions Spec.........');
        actions = this.GR.FuncUtils.actions;
        asArray = actions.asArray;
        asObject = actions.asObject;
        equalize = this.GR.MethodUtils.equalize;
        datafy = this.GR.MethodUtils.datafy;
        labelize = this.GR.MethodUtils.labelize;
        typify = this.GR.MethodUtils.typify;
        tFunc = (s) => "Node",
        dFunc = (state) => state.data;
        lFunc = (state) => state.label;
        eqFunc = obj => arg => (obj.sameLabel(arg));
        nType = typify(tFunc);
        nData = datafy(dFunc);
        nEq = equalize(eqFunc);
        nLabel = labelize(lFunc);
        // myArrayActs = asArray([nType, nData, nLabel], eqFunc);
        f1 = (n) => 2 * n;
        f1_lift = liftResult(f1, (n) => n)
        f2 = (n) => n + 3;
        f2_lift = liftResult(f2, (n) => n)
        f3 = (n) => n * 3;
        f3_lift = liftResult(f3, (n) => n)
        final = (values, state) => ({
            values, state
        });
        aFin = (values, state) => ({
            values, state
        });
        oFin = (composite, state) => ({
            composite, state
        });
        myArrayActs = asArray([f1_lift(), f2_lift(), f3_lift()], aFin);
        myObjActs = asObject([f1_lift(), f2_lift(), f3_lift()], aFin);

        lState = 4
    });
    beforeEach(function() {
        state0 = {
            label: "node0",
            data: {
                position: 0
            }
        };
        state1 = {
            label: "node1",
            data: {
                position: 1
            }
        };
        state2 = {
            label: "node2",
            data: {
                position: 2
            }
        };
        state3 = {
            label: "node3",
            data: {
                position: 3
            }
        };
    });
    describe('asArray', () => {
        it('is a function', () => {
            expect(asArray).toBeFunction();
        });
        describe('when given an array of liftedFunctions and a final', () => {
            it('returns a function', () => {
                expect(myArrayActs).toBeFunction();
            });
            describe('when given state data', () => {
                it('retuns an object with state and result properties', () => {
                    let aRes = myArrayActs(2);
                    console.log(aRes);
                    expect(aRes).toBeObject();
                    expect(aRes.values).toBeArray();
                    expect(aRes.state).toBe(2);
                });
            });
        });
    });
    describe('asObject', () => {
        it('is a function', () => {
            expect(asObject).toBeFunction();
        });
        describe('when given an array of liftedFunctions and a final', () => {
            it('returns a function', () => {
                expect(myObjActs).toBeFunction();
            });
            describe('when given state data', () => {
                it('retuns an object with state and result properties', () => {
                    let oRes = myObjActs(2);
                    console.log(oRes);
                    // expect(oRes).toBeObject();
                    // expect(oRes.composite).toBeArray();
                    // expect(oRes.state).toBe(2);
                });
            });
        });
    });
    describe('when given an argument', () => {});
});