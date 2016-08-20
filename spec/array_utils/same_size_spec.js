describe('sameSize', function() {
    let sameSize, queryA, contextA, xContext;
    beforeAll(function() {
        console.log('\n.........sameSize Spec.........');
        sameSize = this.GR.ArrayUtils.sameSize;
        queryA = [1, 2, 3];
        contextA = [3, 4, 5];
        xContext = [9, 7];
    });
    describe('when given a query array', () => {
        it('returns a function', function() {
            expect(sameSize(queryA)).toBeFunction();
        });
        describe('when given a context Array', () => {
            it('compares the lengths', function() {
                expect(sameSize(queryA)(contextA)).toBeTrue();
                expect(sameSize(queryA)(xContext)).toBeFalse();
            });
        });
    });
});