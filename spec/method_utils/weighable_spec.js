describe('weighable', function() {
    let weighable, wFunc, wState, myWeight;
    beforeAll(function() {
        console.log('\n.........weighable Spec.........');
        weighable = this.GR.MethodUtils.weighable;
        wFunc = (state) => state.weight;
        wState = {
            weight: 10
        };
        myWeight = weighable(wFunc)(wState);
    });
    describe('when given a weight function', () => {
        it('returns a function', () => {
            expect(weighable(wFunc)).toBeFunction();
        });
        describe('when given a state obj', () => {
            it('returns an object', () => {
                expect(myWeight).toBeObject();
            });
            describe('weight', () => {
                it('returns the wfuc called on the state', () => {
                    expect(myWeight.weight()).toBe(10);
                });
            });
        });
    });
    describe('getWeight', () => {
        it('returns the weight value', () => {
            expect(weighable.getWeight(myWeight)).toBe(10);
        });
    });
    describe('sameWeight', () => {
        it('returns the weight value', () => {
            expect(weighable.sameWeight(myWeight)(myWeight)).toBeTrue();
        });
    });
});