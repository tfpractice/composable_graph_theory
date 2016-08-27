describe('validatorMixin', function() {
    let myValidator, validatorMixin;
    let isNegative, isEven;
    let getFirst, getLast, getLength, copy;
    let eValidator, dValidator, rdcat;
    let queryA, contextA, xContext;
    beforeAll(function() {
        console.log('\n.........validatorMixin Spec.........');
        validatorMixin = this.GR.ArrayUtils.validatorMixin;
        isNegative = (element) => element < 0 === true;
        isEven = (element) => element % 2 === 0;
        // getFirst = (element) => element.slice(0, 1).pop();
        // getLast = (element) => element.slice(-1).pop();
        // getLength = (element) => element.length;
        myValidator = validatorMixin(isNegative);
        eValidator = validatorMixin(isEven);
        dValidator = validatorMixin(isEven);
    });
    beforeEach(function() {
        queryA = [-1, -2, -3];
        contextA = [6, 4, 10];
        xContext = [9, 7];
    });
    // describe('instanceFunctions', () => {
    // describe('isNegative', () => {
    // it('takes an array and isNegatives its elements', () => {
    // let aRev = isNegative(queryA);
    // let aDub = isEven(queryA);
    // expect(getFirst(aRev)).toBe(getLast(queryA));
    // expect(aDub.length).toEqual(queryA.length * 2);
    // });
    // });
    // });
    describe('validatorMixin', () => {
        describe('when given a validator function', () => {
            it('returns a function with properties', function() {
                expect(eValidator).toBeFunction();
                // expect(dValidator).toBeFunction();
            });
            it('has the array spawning functions as properties', () => {
                expect(eValidator.isValid).toBeFunction();
                // expect(dValidator.concat).toBeFunction();
                // expect(eValidator.slice).toBeFunction();
                // expect(dValidator.slice).toBeFunction();
                // expect(eValidator.splice).toBeFunction();
                // expect(dValidator.splice).toBeFunction();
                // expect(eValidator.filter).toBeFunction();
                // expect(dValidator.filter).toBeFunction();
                // });
            });

            // });
            describe('when given a context', () => {
                it('returns an object', () => {
                    // console.log(eValidator(contextA).concat
                    //     .toString());
                    expect(eValidator(contextA)).toBeObject();
                    // expect(dValidator(contextA)).toBeObject();
                });
                it('returns a booleans isValid', () => {
                    expect(eValidator(contextA).isValid(2))
                        .toBeTrue();
                    // expect(dValidator(contextA).concat).toBeFunction();
                    // expect(eValidator(contextA).slice).toBeFunction();
                    // expect(dValidator(contextA).slice).toBeFunction();
                    // expect(eValidator(contextA).splice).toBeFunction();
                    // expect(dValidator(contextA).splice).toBeFunction();
                    // expect(eValidator(contextA).filter).toBeFunction();
                    // expect(dValidator(contextA).filter).toBeFunction();
                });
                // describe('when spawning a new array', () => {
                // it('calls the validator function on the new array', () => {
                // let dubCatA = dValidator(contextA).concat(
                // contextA
                // );
                // console.log(dubCatA);
                // expect(dubCatA.length).toEqual(contextA.length *
                // 4);
            });
        });
    });
});