describe('spliceOverride', function() {
    let nativeOverride, spliceOverride;
    let reverser, doubler;
    let getFirst, getLast, getLength, copy;
    let rSplice, dSplice, rdcat;
    let queryA, contextA, xContext;
    beforeAll(function() {
        console.log('\n.........concatOverride Spec.........');
        nativeOverride = this.GR.ArrayUtils.nativeOverride;
        spliceOverride = nativeOverride.spliceOverride;
        reverser = (coll) => Array.from(coll).reverse();
        doubler = (coll) => coll.concat(coll);
        getFirst = (coll) => coll.slice(0, 1).pop();
        getLast = (coll) => coll.slice(-1).pop();
        getLength = (coll) => coll.length;
        rSplice = spliceOverride(reverser);
        dSplice = spliceOverride(doubler);
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
    describe('spliceOverride', () => {
        describe('when given a overriding function', () => {
            it('returns a function', function() {
                expect(rSplice).toBeFunction();
                expect(dSplice).toBeFunction();
            });

        });
        describe('when given a context', () => {
            it('returns a function', () => {
                expect(rSplice(contextA)).toBeFunction();
                expect(rSplice(contextA)).toBeFunction();
            });
        });
        describe('when given arguments', () => {
            it('calls iFunc on [[array]]splice(context, args)', () => {
                let qContext = queryA.slice(0);
                let revQ = rSplice(queryA)(0)
                expect(revQ).toBeArray();
                expect(getFirst(revQ)).toBe(getLast(qContext));
            });
        });
    });
});