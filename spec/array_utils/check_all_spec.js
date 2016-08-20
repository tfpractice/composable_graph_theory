describe('checkAll', function() {
    let checkAll, cFunc, cState, myElements, xElements;
    beforeAll(function() {
        console.log('\n.........checkAll Spec.........');
        checkAll = this.GR.ArrayUtils.checkAll;
        cFunc = (el) => el % 2 === 0;
        cState = checkAll(cFunc);
        myElements = [2, 4, 6, 6];
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