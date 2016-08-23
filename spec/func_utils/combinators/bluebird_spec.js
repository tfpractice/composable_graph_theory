describe('bluebird', () => {
    let combinators, thunkify, identity;
    let bluebird;
    let f0, f1, f2;
    let x, y, z;
    beforeAll(function() {
        console.log('\n.........bluebird Spec.........');
        thunkify = this.GR.FuncUtils.thunkify;
        identity = this.GR.FuncUtils.identity;
        combinators = this.GR.FuncUtils.combinators;
        bluebird = combinators.bluebird;
        x = 30;
        y = 20;
        z = 10;
        f0 = (g) => 2 * g;
        f1 = (g) => 2 + g;
        f2 = identity(x);
    });
    describe('bluebird', () => {
        it('is a function', () => {
            expect(bluebird).toBeFunction();
        });
        describe('when given function x', () => {
            it('returns  a function ', () => {
                expect(bluebird(f2)).toBeFunction();
            });
            describe('when given a function y', () => {
                it('retuns a function', () => {
                    expect(bluebird(f0)(f1)).toBeFunction();
                });
                describe('when given a value  z', () => {
                    it('calls x on y called on z', () => {
                        expect(bluebird(f0)(f1)(f2)).toBe(
                            (64));
                    });
                });
            });

        });
    });
});