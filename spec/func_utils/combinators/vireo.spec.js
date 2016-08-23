describe('vireo', () => {
    let combinators, thunkify, identity;
    let vireo;
    let f0, f1, f2;
    let x, y, z;
    beforeAll(function() {
        console.log('\n.........vireo Spec.........');
        thunkify = this.GR.FuncUtils.thunkify;
        identity = this.GR.FuncUtils.identity;
        combinators = this.GR.FuncUtils.combinators;
        vireo = combinators.vireo;
        x = 3;
        y = 2;
        z = 1;
        f0 = (g) => (h) => h * g;
        f1 = identity(y);
        f2 = identity(z + 3);
    });
    it('is a function', () => {
        expect(vireo).toBeFunction();
    });
    describe('when given  value x', () => {
        it('returns  a function ', () => {
            expect(vireo(f1)).toBeFunction();
        });
        describe('when given a value y', () => {
            it('passes y to the result of x on y ', () => {
                expect(vireo(f1)(f2)).toBeFunction();
            });
            describe('when given a curried function z', () => {
                it('passes y to the result of z on x ', () => {
                    expect(vireo(f1)(f2)(f0)).toBe(8);
                });
            });
        });
    });
});