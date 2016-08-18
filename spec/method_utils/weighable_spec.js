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
        it('returns a function', function() {
            expect(weighable(wFunc)).toBeFunction();
        });

        describe('when given a state obj', () => {
            it('returns an object', function() {
                expect(myWeight).toBeObject();
            });

            describe('weight', () => {
                it('returns the wfuc called on the state', function() {
                    expect(myWeight.weight()).toBe(10);
                });
            });
        });
    });
});