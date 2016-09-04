describe('equalize', () => {
    var equalize, myFunc, state0, state1;
    let myEquivalence, sEquivalence0, sEquivalence1;
    let getEquivalence, isEquivalent;
    beforeAll(function() {
        console.log('\n.........equalize Spec.........');
        equalize = this.GR.MethodUtils.equalize;
        myFunc = (state) => (arg) => state.weight === arg.weight;
        myEquivalence = equalize(myFunc);
        isEquivalent = myEquivalence.isEquivalent;
    });
    beforeEach(function() {
        state0 = {
            weight: "state0"
        };
        state1 = {
            weight: "state1"
        };
        sEquivalence0 = myEquivalence(state0);
        sEquivalence1 = myEquivalence(state1);
    });
    it('is a function', () => {
        expect(equalize).toBeFunction();
    });
    describe('when given an accessor function lFunc', () => {
        it('returns a second function awaiting a state object', () => {
            expect(myEquivalence).toBeFunction();
            // expect(myEquivalence.getEquivalence).toBeFunction();
            expect(myEquivalence.isEquivalent).toBeFunction();
        });
    });
    describe('operators', () => {
        describe('getEquivalence', () => {
            it('retrieves the weight attribute ', () => {
                // expect(getEquivalence(myEquivalence(state0))).toBe(
                // "state0");
            });
        });
        describe('isEquivalent', () => {
            it('compares getEquivalence on both objects', () => {
                expect(isEquivalent(state0)(state0)).toBeTrue();
                expect(isEquivalent(state0)(state1)).toBeFalse();
            });
        });
    });
    describe('methods', () => {

        describe('isEquivalent', () => {
            it('it compares the eqFunc() on the argument', () => {
                expect(sEquivalence0.isEquivalent(state0)).toBeTrue();
                expect(sEquivalence1.isEquivalent(state0)).toBeFalse();
            });
        });
    });
});