fdescribe('intersectable', function() {
    let intersectable, queryA, contextA, xContext;
    let myFunc, myIntersect;
    let myContains;
    let curriedContext, contextIntersect;
    beforeAll(function() {
        console.log('\n.........intersectable Spec.........');
        intersectable = this.GR.ArrayUtils.intersectable;
        queryA = [1, 2, 3];
        contextA = [1, 2, 3, 6, 4, 5];
        xContext = [9, 1];
        myContains = (srcArr) => (el) => srcArr.indexOf(el) > -1;
        myFunc = (context) => (query) => context.filter(myContains(query));
        myIntersect = intersectable(myFunc);
        curriedContext = myIntersect(contextA);
        contextIntersect = curriedContext.intersects;
    });
    describe('when given a intersectable function', () => {
        it('return a function', () => {
            expect(intersectable(myFunc)).toBeFunction();
        });
        describe('when given a context object', () => {
            it('returns an object with a intersection property', () => {
                expect(myIntersect(contextA)).toBeObject();
                expect(myIntersect(contextA).intersection).toBeTruthy();
            });
            describe('intersection(method)', () => {
                describe('when given a query object', () => {
                    it('checks for intersect elements', () => {
                        expect(contextIntersect(queryA)).toBeTruthy();
                    });
                });
            });
        });
    });
    describe('intersectable.intersection', () => {
        it('is a function', () => {});
        describe('when given a query array', () => {
            it('returns a function', () => {});
            describe('when given a context Array', () => {
                it(
                    'checks for presence of each element in the first array in the context array', () => {}
                );
            });
        });
    });
});