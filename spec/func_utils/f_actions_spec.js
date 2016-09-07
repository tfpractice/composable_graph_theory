describe('actions', function() {
    let actions, asArray, asObject;
    let myArrayActs, myObjActs;
    let f0, f1, f2, myFinal;
    let myState, state0, state1, state2, state3;
    let typify, tFunc, nType;
    let datafy, dFunc, nData;
    let equatable, eqFunc, nEq;
    let labelize, lFunc, nLabel;
    beforeAll(function() {
        console.log('\n.........actions Spec.........');

        // unaryCall = this.GR.FuncUtils.unaryCall;
        actions = this.GR.FuncUtils.actions;
        asArray = actions.asArray;
        asObject = actions.asObject;
        // f0 =
        // add2 = (arg) => arg + 2;
        // double = (arg) => arg * 2;
        // exp2 = (arg) => Math.pow(arg, 2);
        equalize = this.GR.MethodUtils.equalize;
        datafy = this.GR.MethodUtils.datafy;
        labelize = this.GR.MethodUtils.labelize;
        typify = this.GR.MethodUtils.typify;
        tFunc = (s) => "Node",
        dFunc = (state) => state.data;
        lFunc = (state) => state.label;
        // eqFunc = state => arg => (labelize(lFunc).sameLabel(lf));
        eqFunc = obj => arg => (obj.sameLabel(arg));
        nType = typify(tFunc);
        nData = datafy(dFunc);
        nEq = equalize(eqFunc);
        nLabel = labelize(lFunc);
        // myNode = Node(nType, nData, nLabel, nEq)
        myArrayActs = asArray([nType, nData, nLabel], eqFunc);
    });
    beforeEach(function() {
        state0 = {
            label: "node0",
            data: {
                position: 0
            }
        };
        // n0 = myNode(state0.label, state0.data);
        state1 = {
            label: "node1",
            data: {
                position: 1
            }
        };
        // n1 = myNode(state1.label, state1.data);
        n00 = myNode(state0.label, state1.data);
        state2 = {
            label: "node2",
            data: {
                position: 2
            }
        };
        // n2 = myNode(state2.label, state2.data);
        state3 = {
            label: "node3",
            data: {
                position: 3
            }
        };
        // n3 = myNode(state3.label, state3.data);
        // [n0, n1, n2, n3] = Array.from([
        //     [state0], state1, state2, state3
        // ], myNode);
        // console.log(n0);
        // n2 = myNode(2, 0);
        // myNode = Node(2, 0);
    });
    describe('asArray', () => {
        it('is a function', function() {

        });
    });

    describe('when given an argument', () => {
        // it('returns the argument', function() {
        // expect(actions(uArg)).toBe(2);

        // });
        // it('returns a function', function() {
        // expect(actions(myUnary)).toBeFunction();
        // });
        // describe('when given a function', () => {
        // it('invokes the function with the arg', function() {
        // expect(actions(myUnary(add2))).toBe(4);
        // expect(actions(myUnary(double))).toBe(4);
        // expect(actions(myUnary(exp2))).toBe(4);
        // });
        // });
    });
});