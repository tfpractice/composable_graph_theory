describe('lark', function() {
    let combinators, thunkify, f0, f1, f2;
    let lark;
    let x, y;
    beforeAll(function() {
        console.log('\n.........lark Spec.........');
        thunkify = this.GR.FuncUtils.thunkify;
        combinators = this.GR.FuncUtils.combinators;
        lark = combinators.lark;
        x = 30;
        y = 20;
        f0 = thunkify(x);
        f1 = thunkify(y);
        f2 = (y) => 2 * y;
    });
    describe('lark', () => {
        it('is a function', function() {
            expect(lark).toBeFunction();
        });
        describe('when given function x', () => {
            it('returns  a function ', function() {
                expect(lark(f2)).toBeFunction();
            });
            describe('when given a second function', () => {
                it('calls x on y called upon itself', function() {
                    expect(lark(f2)(f1)).toBe(40);
                });
            });
        });
    });
});