fdescribe('isSubset', function() {
    let isSubset, queryA, contextA, xContext;
    let myMatcher, mySubset, gtSubset, herringMatcher;
    let herrContext;
    beforeAll(function() {
        console.log('\n.........isSubset Spec.........');
        isSubset = this.GR.ArrayUtils.isSubset;
        queryA = [1, 2, 3];
        contextA = [1, 2, 3, 6, 4, 5];
        xContext = [9, 1];
        herrContext = [6, 4, 5];
        herringMatcher = (queryA) => (el) => queryA.some(e => e > el);
        myMatcher = (queryA) => (el) => queryA.some(e => e === el);;
        mySubset = isSubset(myMatcher);
        gtSubset = isSubset(herringMatcher);

    });
    describe('when given a matcher function', () => {
        it('return a function', function() {
            expect(isSubset(myMatcher)).toBeFunction();
        });
        describe('when given a query array', () => {
            it('returns a function', function() {
                expect(mySubset(queryA)).toBeFunction();
            });
            describe('when given a context Array', () => {
                it('checks that every element in the query array passes the matcher function on the context', function() {
                    expect(mySubset(queryA)(contextA)).toBeTrue();
                    expect(mySubset(contextA)(queryA)).toBeFalse();
                    expect(mySubset(queryA)(xContext)).toBeFalse();
                });
            });
        });

    });
    describe('when not given a matcher function', () => {
        it('return a function', function() {
            expect(isSubset()).toBeFunction();
        });
        describe('when given a query array', () => {
            it('returns a function', function() {
                expect(isSubset(queryA)).toBeFunction();
            });
            describe('when given a context Array', () => {
                it('checks for presence of each element in the first array in the context array', function() {
                    expect(isSubset()(queryA)(contextA)).toBeTrue();
                    expect(isSubset()(queryA)(xContext)).toBeFalse();
                });
            });
        });
    });









});