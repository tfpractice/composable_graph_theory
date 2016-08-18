describe('comparitor', function() {
    let comparitor, cFunc, cState, myComparitor;
    beforeAll(function() {
        console.log('\n.........comparitor Spec.........');
        comparitor = this.GR.FuncUtils.comparitor;
        cFunc = (state) => state.value;
        cState = {
            a: {
                value: 10
            },
            b: {
                value: 10
            },
            c: {
                value: 12
            }
        };
        myComparitor = comparitor(cFunc)(cState.a);

    });
    describe('when given a comparitor function', () => {
        it('returns a function', function() {
            expect(comparitor(cFunc)).toBeFunction();
        });

        describe('when given a arg obj', () => {
            it('returns a function', function() {
                expect(myComparitor).toBeFunction();
            });

            describe('when given another argument', () => {
                it('compares the return values of comparitor function called on both args', function() {
                    expect(myComparitor(cState.c)).toBeFalse();
                    expect(myComparitor(cState.b)).toBeTrue();
                });
            });
        });
    });
});