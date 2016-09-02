describe('distinctable', function() {
    let distinctable, queryA, contextA, xContext;
    let myFunc, myDistinction;
    let curriedContext, contextDistinction;
    beforeAll(function() {
        console.log('\n.........distinctable Spec.........');
        distinctable = this.GR.ArrayUtils.distinctable;
        queryA = [1, 2, 3];
        contextA = [1, 2, 3, 6, 4, 5];
        xContext = [9, 1];
        let myContains = (srcArr) => (el) => srcArr.indexOf(el) > -1;
        let isAbsent = (srcArr) => (el) => !myContains(srcArr)(el);
        myFunc = (srcArr) => (argArr) => srcArr.some(isAbsent(argArr));
        myDistinction = distinctable(myFunc);
        curriedContext = myDistinction(contextA);
        contextDistinction = curriedContext.hasDistinctElements;
    });
    describe('when given a distinctable function', () => {
        it('return a function', () => {
            expect(distinctable(myFunc)).toBeFunction();
        });
        describe('when given a context object', () => {
            it('returns an object with a difference property', () => {
                expect(myDistinction(contextA)).toBeObject();
                expect(myDistinction(contextA).hasDistinctElements).toBeTruthy();
            });
            describe('difference(method)', () => {
                describe('when given a query object', () => {
                    it('checks for distinct elements', () => {
                        expect(contextDistinction(queryA)).toBeTrue();
                    });
                });
            });
        });
    });
    describe('distinctable.hasDistinctElements', () => {
        it('is a function', () => {
            // expect(distinctable.hasDistinctElements).toBeFunction();
        });
        describe('when given a query array', () => {
            it('returns a function', () => {
                // expect(distinctable.hasDistinctElements(myFunc))
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