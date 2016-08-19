describe('allTrue', function() {
    let allTrue, f0, f1, f2;
    let cFunc, cState, myElements, xElements;
    beforeAll(function() {
        console.log('\n.........allTrue Spec.........');
        allTrue = this.GR.FuncUtils.allTrue;
        f0 = () => true;
        f1 = () => false;
        f2 = (el) => () => el % 2 === 0;
        myElements = [f0, f2(2), f2(4)];
        xElements = [f1, f1, f1, f2(3)];
    });
    describe('when given a collection of functions', () => {
        describe('when some elements pass', () => {
            it('returns  true', function() {
                expect(allTrue(...myElements)).toBeTrue();
            });
        });
        describe('when no elements pass', () => {
            it('returns  false', function() {
                expect(allTrue(...xElements)).toBeFalse();
            });
        });
    });
});