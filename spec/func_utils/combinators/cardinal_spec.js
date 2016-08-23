describe('cardinal', () => {
    let combinators, thunkify, identity;
    let cardinal;
    let f0, f1, f2;
    let x, y, z;
    beforeAll(function() {
        console.log('\n.........cardinal Spec.........');
        thunkify = this.GR.FuncUtils.thunkify;
        identity = this.GR.FuncUtils.identity;
        combinators = this.GR.FuncUtils.combinators;
        cardinal = combinators.cardinal;
        x = 3;
        y = 2;
        z = 1;
        f0 = (g) => (h) => h * g;
        f1 = identity(y);
        f2 = identity(z);
    });
    it('is a function', () => {
        expect(cardinal).toBeFunction();
    });
    describe('when given curried function x', () => {
        it('returns  a function ', () => {
            expect(cardinal(f0)).toBeFunction();
        });
        describe('when given a value y', () => {
            it('passes y to the result of x on y ', () => {
                expect(cardinal(f0)(f1)).toBeFunction();
            });
            describe('when given a value z', () => {
                it('passes y to the result of x on z ', () => {
                    expect(cardinal(f0)(f1)(f2)).toBe(2);
                });
            });
        });
    });
});