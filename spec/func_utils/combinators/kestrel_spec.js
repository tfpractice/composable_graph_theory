describe('kestrel', function() {
    let combinators, kestrel, f0, f1, f2;
    let x, y;
    // let cFunc, cState, myElements, xElements;
    beforeAll(function() {
        console.log('\n.........kestrel Spec.........');
        combinators = this.GR.FuncUtils.combinators;
        kestrel = combinators.kestrel;
        x = 30;
        y = 20;
        f0 = () => true;
        f1 = () => false;
        // f2 = (el) => () => el % 2 === 0;
        // myElements = [f0, f1, f2(4)];
        // xElements = [f1, f1, f1, f2(3)];
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