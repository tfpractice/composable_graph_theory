describe('finch', () => {
    let combinators, thunkify, identity;
    let finch;
    let f0, f1, f2;
    let x, y, z;
    beforeAll(function() {
        console.log('\n.........finch Spec.........');
        thunkify = this.GR.FuncUtils.thunkify;
        identity = this.GR.FuncUtils.identity;
        combinators = this.GR.FuncUtils.combinators;
        finch = combinators.finch;
        x = 3;
        y = 2;
        z = 1;
        f0 = (g) => (h) => h * g;
        f1 = identity(y);
        f2 = identity(z + 3);
    });
    it('is a function', () => {
        expect(finch).toBeFunction();
    });
    describe('when given  value x', () => {
        it('returns  a function ', () => {
            expect(finch(f1)).toBeFunction();
        });
        describe('when given a value y', () => {
            it('passes y to the result of x on y ', () => {
                expect(finch(f1)(f2)).toBeFunction();
            });
            describe('when given a curried function z', () => {
                it('passes y to the result of z on x ', () => {
                    expect(finch(f1)(f2)(f0)).toBe(8);
                });
            });
        });
    });
});