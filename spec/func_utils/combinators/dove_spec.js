fdescribe('dove', () => {
    let combinators, thunkify, identity;
    let dove;
    let f0, f1, f2, f3;
    let x, y, z;
    beforeAll(function() {
        console.log('\n.........dove Spec.........');
        thunkify = this.GR.FuncUtils.thunkify;
        identity = this.GR.FuncUtils.identity;
        combinators = this.GR.FuncUtils.combinators;
        dove = combinators.dove;
        x = 3;
        y = 2;
        z = 1;
        f0 = (g) => (h) => h * g;
        f1 = identity(y);
        f2 = (g) => 2 * identity(g);
        f3 = identity(x)
    });
    it('is a function', () => {
        expect(dove).toBeFunction();
    });
    describe('when given function x', () => {
        it('returns  a function ', () => {
            expect(dove(f2)).toBeFunction();
        });
        describe('when given a value y', () => {
            it('retuns a function', () => {
                expect(dove(f0)(f1)).toBeFunction();
            });
            describe('when given a function  z', () => {
                it('calls x on y called on z', () => {
                    expect(dove(f0)(f1)(f2)).toBeFunction();
                });
                describe('when given a value  w', () => {
                    it('calls x on y called on z', () => {
                        expect(dove(f0)(f1)(f2)(f3)).toBe(
                            12);
                    });
                });
            });
        });

    });
});