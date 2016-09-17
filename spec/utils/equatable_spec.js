describe('equalize', () => {
    var equalize, myFunc, state0, state1;
    let myEquivalence, sEquivalence0, sEquivalence1;
    let isEquivalent, notEquivalent;
    beforeAll(function() {
        console.log('\n.........equalize Spec.........');
        equalize = this.GR.MethodUtils.equalize;
        stateOps = equalize.stateOps(myFunc);
        eqStruct = (weight = '') => ({ weight });
        myFunc = ({ weight: w0 = 6 }) => ({ weight: w1 = 6 }) =>
            w0 === w1;
        myEquivalence = equalize(myFunc);
        isEquivalent = myEquivalence.isEquivalent;
        notEquivalent = myEquivalence.notEquivalent;
    });

    beforeEach(function() {
        state0 = eqStruct(0);
        state1 = eqStruct(1);
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
                expect(isEquivalent(sEquivalence0)(state0))
                    .toBeTrue();
                expect(isEquivalent(sEquivalence0)(state1))
                    .toBeFalse();
            });
        });
        describe('notEquivalent', () => {
            it('compares eqFunc on both objects', () => {
                expect(notEquivalent(sEquivalence0)(
                    state1)).toBeTrue();
                expect(notEquivalent(sEquivalence0)(
                    state0)).toBeFalse();
            });
        });
    });
    describe('methods', () => {
        describe('isEquivalent', () => {
            it('it compares the eqFunc() on the argument', () => {
                expect(sEquivalence0.isEquivalent(state0))
                    .toBeTrue();
                expect(sEquivalence1.isEquivalent(state0))
                    .toBeFalse();
            });
        });
        describe('notEquivalent', () => {
            it('it compares the eqFunc() on the argument', () => {
                expect(sEquivalence0.notEquivalent(state1))
                    .toBeTrue();
                expect(sEquivalence1.notEquivalent(state1))
                    .toBeFalse();
            });
        });
    });
});