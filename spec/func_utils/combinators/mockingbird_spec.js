describe('mockingbird', function() {
    let combinators, thunkify, f0, f1, f2;
    let mockingbird;
    let x, y;
    beforeAll(function() {
        console.log('\n.........mockingbird Spec.........');
        thunkify = this.GR.FuncUtils.thunkify;
        combinators = this.GR.FuncUtils.combinators;
        mockingbird = combinators.mockingbird;
        x = thunkify(30);
        y = thunkify(20);
        f0 = () => true;
        f1 = () => false;
    });
    describe('mockingbird', () => {
        it('is a function', function() {
            expect(mockingbird).toBeFunction();
        });
        describe('when given function x', () => {
            it('returns  the function called on itself', function() {
                expect(mockingbird(x)).toBe(x());
            });

        });
    });
});