describe('thrush', () => {
    let combinators, thunkify, identity;
    let thrush;
    let f0, f1, f2;
    let x, y, z;
    beforeAll(function() {
        console.log('\n.........thrush Spec.........');
        thunkify = this.GR.FuncUtils.thunkify;
        identity = this.GR.FuncUtils.identity;
        combinators = this.GR.FuncUtils.combinators;
        thrush = combinators.thrush;
        x = 3;
        y = 2;
        z = 1;
        f0 = (g) => (h) => h * g;
        f1 = (g) => 2 + g;
        f2 = identity(x);
    });
    it('is a function', () => {
        expect(thrush).toBeFunction();
    });
    describe('when given value x', () => {
        it('returns  a function ', () => {
            expect(thrush(f2)).toBeFunction();
        });
        describe('when given a function y', () => {
            it('passes y to the result of x on y ', () => {
                expect(thrush(f2)(f1)).toBe(5);
            });
        });
    });
});