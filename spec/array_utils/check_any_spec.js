describe('checkAny', function() {
    let checkAny, cFunc, cState, myElements, xElements;
    beforeAll(function() {
        console.log('\n.........checkAny Spec.........');
        checkAny = this.GR.ArrayUtils.checkAny;
        cFunc = (el) => el % 2 === 0;
        cState = checkAny(cFunc);
        myElements = [2, 3, 4, 5];
        xElements = [9, 3, 7, 5];
    });
    describe('when given a function', () => {
        it('returns a function', function() {
            expect(cState).toBeFunction();
        });
        describe('when given a collection', () => {
            describe('when some elements pass', () => {
                it('returns  true', function() {
                    expect(cState(myElements)).toBeTrue();
                });
            });
            describe('when no elements pass', () => {
                it('returns  false', function() {
                    expect(cState(xElements)).toBeFalse();
                });
            });
        });
    });
});