describe('equalize', () => {
    var equalize, myFunc, state0, state1;
    let myEquivalence, sEquivalence0, sEquivalence1;
    let isEquivalent;
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
            expect(myEquivalence.isEquivalent).toBeFunction();
        });
    });
    describe('operators', () => {

        describe('isEquivalent', () => {
            it('compares eqFunc on both objects', () => {
                expect(isEquivalent(sEquivalence0)(state0)).toBeTrue();
                expect(isEquivalent(sEquivalence0)(state1)).toBeFalse();
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