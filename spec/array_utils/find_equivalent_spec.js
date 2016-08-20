describe('findEquivalent', function() {
    let findEquivalent, queryA, contextA, xContext;
    let eqFun, myEq;
    beforeAll(function() {
        console.log('\n.........findEquivalent Spec.........');
        findEquivalent = this.GR.ArrayUtils.findEquivalent;
        eqFun = (query) => (current) => current === query;
        myEq = findEquivalent(eqFun)
        queryA = [1, 2, 3];
        contextA = [3, 4, 5];
        xContext = [9, 7];
    });
    describe('when given an equality function', () => {
        it('returns a function', function() {
            expect(findEquivalent(eqFun)).toBeFunction();
        });
    });
    describe('when given a context array', () => {
        it('returns a function', function() {
            expect(myEq(queryA)).toBeFunction();
        });
        describe('when given an element present in the context', () => {
            it('returns the equivalentelement', function() {
                expect(myEq(contextA)(3)).toBe(3);
            });
        });
        describe('when given an element not present in the context', () => {
            it('returns undefined', function() {
                expect(myEq(contextA)(2)).toBeUndefined();
            });
        });
    });
});