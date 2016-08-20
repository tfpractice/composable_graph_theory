describe('intersects', function() {
    let intersects, queryA, contextA, xContext;
    let eqFun, myEq;
    beforeAll(function() {
        console.log('\n.........intersects Spec.........');
        intersects = this.GR.ArrayUtils.intersects;
        eqFun = (context) => (query) => context.some(e => e === query);
        myEq = intersects(eqFun)
        queryA = [1, 2, 3];
        contextA = [3, 4, 5];
        xContext = [9, 7];
    });
    describe('when given an equality function', () => {
        it('returns a function', function() {
            expect(intersects(eqFun)).toBeFunction();
        });
    });
    describe('when given a context array', () => {
        it('returns a function', function() {
            expect(myEq(queryA)).toBeFunction();
        });
        describe('when given an array that shares elements', () => {
            it('returns  true', function() {
                expect(myEq(contextA)(queryA)).toBeTrue();
            });
        });
        describe('when given an array that shares elements', () => {
            it('returns false', function() {
                expect(myEq(contextA)(xContext)).toBeFalse();
            });
        });
    });
});