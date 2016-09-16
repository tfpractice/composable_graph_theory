describe('concatOverride', function () {
  let nativeOverride, concatOverride;
  let reverser, doubler;
  let getFirst, getLast, getLength, copy;
  let rConcat, dConcat, rdcat;
  let queryA, contextA, xContext;
  beforeAll(function () {
    console.log('\n.........concatOverride Spec.........');
    nativeOverride = this.GR.ArrayUtils.nativeOverride;
    concatOverride = nativeOverride.concatOverride;
    reverser = (coll) => Array.from(coll).reverse();
    doubler = (coll) => coll.concat(coll);
    getFirst = (coll) => coll.slice(0, 1).pop();
    getLast = (coll) => coll.slice(-1).pop();
    getLength = (coll) => coll.length;
    rConcat = concatOverride(reverser);
    dConcat = concatOverride(doubler);
  });

  beforeEach(function () {
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
  describe('concatOverride', () => {
    describe('when given a overriding function', () => {
      it('returns a function', function () {
        expect(rConcat).toBeFunction();
        expect(dConcat).toBeFunction();
      });
    });
    describe('when given a context', () => {
      it('returns a function', () => {
        expect(rConcat(contextA)).toBeFunction();
        expect(rConcat(contextA)).toBeFunction();
      });
    });
    describe('when given arguments', () => {
      it('calls iFunc on [[array]]concat(context, args)', () => {
        let revQ = rConcat(queryA)(contextA);
        let qContext = queryA.concat(contextA);
        expect(revQ).toBeArray();
        expect(getFirst(revQ)).toBe(getLast(qContext));
      });
    });
  });
});
