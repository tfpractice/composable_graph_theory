describe('kestrel', function() {
    let combinators, kestrel, f0, f1, f2;
    let thunkify;
    let x, y;
    beforeAll(function() {
        console.log('\n.........kestrel Spec.........');
        thunkify = this.GR.FuncUtils.thunkify;
        combinators = this.GR.FuncUtils.combinators;
        kestrel = combinators.kestrel;
        x = thunkify(30);
        y = thunkify(20);
        f0 = () => true;
        f1 = () => false;
    });
    describe('kestrel', () => {
        it('is a function', function() {
            expect(kestrel).toBeFunction();
        });
        describe('when given argument x', () => {
            it('returns  a function', function() {
                expect(kestrel(x)).toBeFunction(); //
            });
            describe('when given a second argument', () => {
                it('returns  the first', function() {
                    expect(kestrel(x)(y)).toBe(x);
                });
            });
        });
    });
});