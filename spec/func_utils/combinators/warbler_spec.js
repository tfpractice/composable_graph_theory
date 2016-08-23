describe('warbler', () => {
    let combinators, thunkify, identity;
    let warbler;
    let f0, f1, f2;
    let x, y, z;
    beforeAll(function() {
        console.log('\n.........warbler Spec.........');
        thunkify = this.GR.FuncUtils.thunkify;
        identity = this.GR.FuncUtils.identity;
        combinators = this.GR.FuncUtils.combinators;
        warbler = combinators.warbler;
        x = 3;
        y = 2;
        z = 1;
        f0 = (g) => (h) => h * g;
        f1 = (g) => 2 + g;
        f2 = identity(x);
    });
    it('is a function', () => {
        expect(warbler).toBeFunction();
    });
    describe('when given function x', () => {
        it('returns  a function ', () => {
            expect(warbler(f0)).toBeFunction();
        });
        describe('when given a value y', () => {
            it('passes y to the result of x on y ', () => {
                expect(warbler(f0)(f2)).toBe(9);
            });
        });
    });
});