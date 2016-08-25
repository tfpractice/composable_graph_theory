describe('sliceOverride', function() {
    let nativeOverride, sliceOverride;
    let reverser, doubler;
    let getFirst, getLast, getLength, copy;
    let rSlice, dSlice, rdcat;
    let queryA, contextA, xContext;
    beforeAll(function() {
        console.log('\n.........sliceOverride Spec.........');
        nativeOverride = this.GR.ArrayUtils.nativeOverride;
        sliceOverride = nativeOverride.sliceOverride;
        reverser = (coll) => Array.from(coll).reverse();
        doubler = (coll) => coll.concat(coll);
        getFirst = (coll) => coll.slice(0, 1).pop();
        getLast = (coll) => coll.slice(-1).pop();
        getLength = (coll) => coll.length;
        rSlice = sliceOverride(reverser);
        dSlice = sliceOverride(doubler);
    });
    beforeEach(function() {
        queryA = [1, 2, 3];
        contextA = [3, 4, 5];
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
    describe('sliceOverride', () => {
        describe('when given a overriding function', () => {
            it('returns a function', function() {
                expect(rSlice).toBeFunction();
                expect(dSlice).toBeFunction();
            });

        });
        describe('when given a context', () => {
            it('returns a function', () => {
                expect(rSlice(contextA)).toBeFunction();
                expect(rSlice(contextA)).toBeFunction();
            });
        });
        describe('when given arguments', () => {
            it('calls iFunc on [[array]]slice(context, args)', () => {
                let revQ = rSlice(queryA)(0)
                let qContext = queryA.slice(0);
                // console.log(revQ);
                expect(revQ).toBeArray();
                expect(getFirst(revQ)).toBe(getLast(qContext));
            });
        });
    });
});