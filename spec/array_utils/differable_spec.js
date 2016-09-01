fdescribe('differable', function() {
    let differable, queryA, contextA, xContext;
    let myFunc, myDifference;
    let curriedContext, contextDifference;
    beforeAll(function() {
        console.log('\n.........differable Spec.........');
        differable = this.GR.ArrayUtils.differable;
        queryA = [1, 2, 3];
        contextA = [1, 2, 3, 6, 4, 5];
        xContext = [9, 1];
        let myContains = (srcArr) => (el) => srcArr.indexOf(el) > -1;
        let isAbsent = (srcArr) => (el) => !myContains(srcArr)(el);
        myFunc = (srcArr) => (argArr) => srcArr.filter(isAbsent(argArr));
        myDifference = differable(myFunc);
        curriedContext = myDifference(contextA);
        contextDifference = curriedContext.difference;
    });
    describe('when given a differable function', () => {
        it('return a function', () => {
            expect(differable(myFunc)).toBeFunction();
        });
        describe('when given a context object', () => {
            it('returns an object with a difference property', () => {
                expect(myDifference(contextA)).toBeObject();
                expect(myDifference(contextA).difference).toBeTruthy();
            });
            describe('difference(method)', () => {
                describe('when given a query object', () => {
                    it(
                        'returns the context elements absent from the query', () => {
                            let cqDifference =
                                contextDifference(queryA);
                            expect(cqDifference).toBeTruthy();
                            expect(cqDifference).toBeArray();
                            expect(cqDifference).toContain(
                                6);
                        });
                });
            });
        });
    });
    describe('differable.difference', () => {
        it('is a function', () => {
            expect(differable.difference).toBeFunction();
        });
        describe('when given a query array', () => {
            it('returns a function', () => {
                expect(differable.difference(myFunc)).toBeFunction();
            });
            describe('when given a context Array', () => {
                it(
                    'checks for presence of each element in the first array in the context array', () => {}
                );
            });
        });
    });
});