fdescribe('intersectable', function() {
    let intersectable, queryA, contextA, xContext;
    let myFunc, myIntersection;
    let curriedContext, contextIntersection;
    beforeAll(function() {
        console.log('\n.........intersectable Spec.........');
        intersectable = this.GR.ArrayUtils.intersectable;
        queryA = [1, 2, 3];
        contextA = [1, 2, 3, 6, 4, 5];
        xContext = [9, 1];
        let myContains = (srcArr) => (el) => srcArr.indexOf(el) > -1;
        let isAbsent = (srcArr) => (el) => !myContains(srcArr)(el);
        myFunc = (srcArr) => (argArr) => srcArr.some(myContains(argArr));
        myIntersection = intersectable(myFunc);
        curriedContext = myIntersection(contextA);
        contextIntersection = curriedContext.intersection;
    });
    describe('when given a intersectable function', () => {
        it('return a function', () => {
            expect(intersectable(myFunc)).toBeFunction();
        });
        describe('when given a context object', () => {
            it('returns an object with a difference property', () => {
                expect(myIntersection(contextA)).toBeObject();
                expect(myIntersection(contextA).intersection).toBeTruthy();
            });
            describe('difference(method)', () => {
                describe('when given a query object', () => {
                    it('checks for intersect elements', () => {
                        console.log(contextIntersection.toString());
                        expect(contextIntersection(queryA)).toBeTruthy();
                    });
                });
            });
        });
    });
    describe('intersectable.intersection', () => {
        it('is a function', () => {
            // expect(intersectable.intersection).toBeFunction();
        });
        describe('when given a query array', () => {
            it('returns a function', () => {
                // expect(intersectable.intersection(myFunc))
                // .toBeFunction();
            });
            describe('when given a context Array', () => {
                it(
                    'checks for presence of each element in the first array in the context array', () => {}
                );
            });
        });
    });
});