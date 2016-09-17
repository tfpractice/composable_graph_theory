fdescribe('weighable', () => {
    var weighable, myFunc, state0, state1;
    let myWeight, sWeight0, sWeight1;
    let getWeight, sameWeight;
    beforeAll(function () {
        console.log('\n.........weighable Spec.........');
        weighable = this.GR.MethodUtils.weighable;
        myFunc = (state) => state.weight;
        myWeight = weighable(myFunc);
        getWeight = myWeight.getWeight;
        sameWeight = myWeight.sameWeight;
    });

    beforeEach(function () {
        state0 = {
            weight: 'state0',
        };
        state1 = {
            weight: 'state1',
        };
        sWeight0 = myWeight(state0);
        sWeight1 = myWeight(state1);
    });

    it('is a function', () => {
        expect(weighable).toBeFunction();
    });
    describe('when given an accessor function lFunc', () => {
        it('returns a second function awaiting a state object', () => {
            expect(myWeight).toBeFunction();
            expect(myWeight.getWeight).toBeFunction();
            expect(myWeight.sameWeight).toBeFunction();
        });
    });
    describe('operators', () => {
        describe('getWeight', () => {
            it('retrieves the weight attribute ', () => {
                expect(getWeight(myWeight(state0))).toBe(
                    'state0');
            });
        });
        describe('sameWeight', () => {
            it('compares getWeight on both objects', () => {
                expect(sameWeight(sWeight0)(sWeight1)).toBeFalse();
            });
        });
    });
    describe('methods', () => {
        describe('weight', () => {
            it('retrieves the weight attribute ', () => {
                expect(sWeight0.weight()).toBe('state0');
            });
        });
        describe('sameWeight', () => {
            it(
                'it compares the weight() with getWeight() on the argument',
                () => {
                    expect(sWeight0.sameWeight(sWeight0)).toBeTrue();
                    expect(sWeight0.sameWeight(sWeight1)).toBeFalse();
                });
        });
    });
});
