describe('toStringify', function() {
    let toStringify, sFunc, sState, myStringer;
    beforeAll(function() {
        console.log('\n.........toStringify Spec.........');
        toStringify = this.GR.MethodUtils.toStringify;
        sFunc = (state) => state.toString;
        sState = {
            toString: 10
        };
        myStringer = toStringify(sFunc)(sState);

    });
    describe('when given a toString function', () => {
        it('returns a function', function() {
            expect(toStringify(sFunc)).toBeFunction();
        });

        describe('when given a state obj', () => {
            it('returns an object', function() {
                expect(myStringer).toBeObject();
            });

            describe('toString', () => {
                it('returns the wfuc called on the state', function() {
                    expect(myStringer.toString()).toBe(10);
                });
            });
        });
    });
});