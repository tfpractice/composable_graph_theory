fdescribe('equalize', () => {
    var equalize, eo0, eo1, valFunc;
    let state_object_comp, myEst;
    let eState0, eState1, getVal, valMaker, myMaker, state_equality;
    beforeAll(function() {
        console.log('\n.........Equalize Spec.........');
        equalize = this.GR.Utils.equalize;
        getVal = (state) => state.val;
        valFunc = (obj) => obj.val();
        valMaker = (fun) => (state) => ({
            val: () => fun(state)
        });
        state_object_comp = (state) => (arg) => getVal(state) === valFunc(arg);
        myMaker = valMaker(getVal);
        myEst = equalize(state_object_comp);
    });
    beforeEach(function() {
        eState0 = {
            val: 0
        };
        eState1 = {
            val: 1
        };
        eo0 = Object.assign({}, myEst(eState0), myMaker(eState0));
        eo1 = Object.assign({}, myEst(eState1), myMaker(eState1));
    });
    describe('equalize', () => {
        describe('when given a comparison function', () => {
            it('returns a function awaiting a host', function() {
                expect(myEst).toBeFunction();
            });
            describe('when given a host', () => {
                it('retuns an object with an isEquivalent method', function() {
                    expect(myEst(eState0)).toBeObject();
                });
            });
            describe('when given an argument', () => {
                it('compares the return value of the function called on both the host and arg', function() {
                    expect(eo0.isEquivalent(eo0)).toBeTrue();
                    expect(eo0.isEquivalent(eo1)).toBeFalse();
                });
            });
        });
    });
});