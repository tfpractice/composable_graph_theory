describe('factoryMixin', function() {
    let myFactory, factoryMixin;
    let reverser, doubler;
    let getFirst, getLast, getLength, copy;
    let rFactory, dFactory, rdcat;
    let queryA, contextA, xContext;
    beforeAll(function() {
        console.log('\n.........factoryMixin Spec.........');
        factoryMixin = this.GR.ArrayUtils.factoryMixin;
        reverser = (coll) => Array.from(coll).reverse();
        doubler = (coll) => coll.concat(coll);
        getFirst = (coll) => coll.slice(0, 1).pop();
        getLast = (coll) => coll.slice(-1).pop();
        getLength = (coll) => coll.length;
        myFactory = factoryMixin(reverser);
        rFactory = factoryMixin(reverser);
        dFactory = factoryMixin(doubler);
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
    describe('factoryMixin', () => {
        describe('when given a overriding function', () => {
            it('returns a function with properties', function() {
                expect(rFactory).toBeFunction();
                expect(dFactory).toBeFunction();
            });
            it('has the array spawning functions as properties', () => {
                expect(rFactory.concat).toBeFunction();
                expect(dFactory.concat).toBeFunction();
                expect(rFactory.slice).toBeFunction();
                expect(dFactory.slice).toBeFunction();
                expect(rFactory.splice).toBeFunction();
                expect(dFactory.splice).toBeFunction();
                expect(rFactory.filter).toBeFunction();
                expect(dFactory.filter).toBeFunction();
            });
        });

    });
    describe('when given a context', () => {
        it('returns an object', () => {
            // console.log(rFactory(contextA).concat.toString());
            expect(rFactory(contextA)).toBeObject();
            expect(dFactory(contextA)).toBeObject();
        });
        it('has all of the native_override functions', () => {
            expect(rFactory(contextA).concat).toBeFunction();
            expect(dFactory(contextA).concat).toBeFunction();
            expect(rFactory(contextA).slice).toBeFunction();
            expect(dFactory(contextA).slice).toBeFunction();
            expect(rFactory(contextA).splice).toBeFunction();
            expect(dFactory(contextA).splice).toBeFunction();
            expect(rFactory(contextA).filter).toBeFunction();
            expect(dFactory(contextA).filter).toBeFunction();
        });
        describe('when spawning a new array', () => {
            it('calls the factory function on the new array', () => {
                let dubCatA = dFactory(contextA).concat(
                    contextA
                );
                // console.log(dubCatA);
                expect(dubCatA.length).toEqual(contextA.length *
                    4);
            });
        });
    });
});