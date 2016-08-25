fdescribe('filterOverride', function() {
    let nativeOverride, filterOverride;
    let reverser, doubler;
    let getFirst, getLast, getLength, copy;
    let rFilter, dFilter, rdcat;
    let queryA, contextA, xContext;
    beforeAll(function() {
        console.log('\n.........filterOverride Spec.........');
        nativeOverride = this.GR.ArrayUtils.nativeOverride;
        filterOverride = nativeOverride.filterOverride;
        reverser = (coll) => Array.from(coll).reverse();
        doubler = (coll) => coll.concat(coll);
        getFirst = (coll) => coll.slice(0, 1).pop();
        getLast = (coll) => coll.slice(-1).pop();
        getLength = (coll) => coll.length;
        rFilter = filterOverride(reverser);
        dFilter = filterOverride(doubler);
    });
    beforeEach(function() {
        queryA = [1, 2, 3, 11, 12, 14];
        contextA = [3, 4, 5, 13, 14, 15];
        xContext = [9, 7];
    });
    describe('instanceFunctions', () => {
        describe('reverser', () => {
            it('takes an array and reverses its elements', () => {
                let aRev = reverser(queryA);
                let aDub = doubler(queryA);
                expect(getFirst(aRev)).toBe(getLast(queryA));
                expect(aDub.length).toEqual(queryA.length * 2);
            });
        });
    });
    describe('filterOverride', () => {
        describe('when given a overriding function', () => {
            it('returns a function', function() {
                expect(rFilter).toBeFunction();
                expect(dFilter).toBeFunction();
            });

        });
        describe('when given a context', () => {
            it('returns a function', () => {
                expect(rFilter(contextA)).toBeFunction();
                expect(rFilter(contextA)).toBeFunction();
            });
        });
        describe('when given arguments', () => {
            it('calls iFunc on [[array]]filter(context, args)', () => {
                let revQ = rFilter(queryA)((x) => x > 9)
                let qContext = queryA.filter((x) => x > 9);
                console.log(revQ);
                expect(revQ).toBeArray();
                expect(getFirst(revQ)).toBe(getLast(qContext));
            });
        });
    });
});