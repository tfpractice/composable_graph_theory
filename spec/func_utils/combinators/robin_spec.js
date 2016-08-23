describe('robin', () => {
    let combinators, thunkify, identity;
    let robin;
    let f0, f1, f2;
    let x, y, z;
    beforeAll(function() {
        console.log('\n.........robin Spec.........');
        thunkify = this.GR.FuncUtils.thunkify;
        identity = this.GR.FuncUtils.identity;
        combinators = this.GR.FuncUtils.combinators;
        robin = combinators.robin;
        x = 3;
        y = 2;
        z = 1;
        f0 = (g) => (h) => h * g;
        f1 = identity(y);
        f2 = identity(z + 3);
    });
    it('is a function', () => {
        expect(robin).toBeFunction();
    });
    describe('when given  value x', () => {
        it('returns  a function ', () => {
            expect(robin(f1)).toBeFunction();
        });
        describe('when given a curried function y', () => {
            it('passes y to the result of x on y ', () => {
                expect(robin(f1)(f0)).toBeFunction();
            });
            describe('when given a value z', () => {
                it('passes y to the result of x on z ', () => {
                    expect(robin(f1)(f0)(f2)).toBe(8);
                });
            });
        });
    });
});