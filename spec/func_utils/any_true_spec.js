describe('anyTrue', function() {
    let anyTrue, f0, f1, f2;
    let cFunc, cState, myElements, xElements;
    beforeAll(function() {
        console.log('\n.........anyTrue Spec.........');
        anyTrue = this.GR.FuncUtils.anyTrue;
        f0 = () => true;
        f1 = () => false;
        f2 = (el) => () => el % 2 === 0;
        myElements = [f0, f1, f2(4)];
        xElements = [f1, f1, f1, f2(3)];
    });
    describe('when given a collection of functions', () => {
        describe('when some elements pass', () => {
            it('returns  true', function() {
                expect(anyTrue(...myElements)).toBeTrue();
            });
        });
        describe('when no elements pass', () => {
            it('returns  false', function() {
                expect(anyTrue(...xElements)).toBeFalse();
            });
        });
    });
});