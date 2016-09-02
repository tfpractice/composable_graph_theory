describe('union', function() {
    let union, queryA, contextA, xContext;
    let myMatcher, myUnion;
    let curriedContext, contextUnion;
    beforeAll(function() {
        console.log('\n.........union Spec.........');
        union = this.GR.ArrayUtils.union;
        queryA = [1, 2, 3];
        contextA = [1, 2, 3, 6, 4, 5];
        xContext = [9, 1];
        myMatcher = (srcArr) => (argArr) => srcArr.concat(...argArr);
        myUnion = union(myMatcher);
        curriedContext = myUnion(contextA);
        contextUnion = curriedContext.union;
    });
    describe('when given a union function', () => {
        it('return a function', () => {
            expect(union(myMatcher)).toBeFunction();
        });
        describe('when given a context object', () => {
            it('returns an object with a difference property', () => {
                expect(myUnion(queryA)).toBeObject();
                expect(myUnion(queryA).union).toBeTruthy();
            });

        });
        describe('difference(method)', () => {
            describe('when given a context Array', () => {
                it('returns a combined form of the objects', () => {
                    expect(contextUnion(queryA)).toBeTruthy();
                    expect(contextUnion(queryA)).toBeArray();
                    expect(contextUnion(queryA)).toContain(
                        6);
                });
            });
        });
    });
    describe('union.union', () => {
        it('is a function', () => {
            expect(union.union).toBeFunction();
        });
        describe('when given a query array', () => {
            it('returns a function', () => {
                expect(union.union(myMatcher)).toBeFunction();
            });
            describe('when given a context Array', () => {
                it(
                    'checks for presence of each element in the first array in the context array', () => {}
                );
            });
        });
    });
});