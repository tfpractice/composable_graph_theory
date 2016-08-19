describe('containify', function() {
    let containify, cFunc, cState, myContext, xContext, myQuery;
    beforeAll(function() {
        console.log('\n.........containify Spec.........');
        containify = this.GR.ArrayUtils.containify;
        cFunc = (query) => (el) => ((el + query) % 2) === 0;
        cState = containify(cFunc);
        myContext = [2, 6, 8, 10];
        xElements = [9, 3, 7, 5];

    });
    describe('when given a curryable function', () => {
        it('returns a function', function() {
            expect(cState).toBeFunction();
        });

        describe('when given a set of collection', () => {
            it('returns an object', function() {
                expect(cState(myContext)).toBeObject();
            });

            describe('contains', () => {
                it('applies the curried function to the query and calls it on each element', function() {
                    expect(cState(myContext).contains(2)).toBeTrue();
                });
            });
        });
    });
});