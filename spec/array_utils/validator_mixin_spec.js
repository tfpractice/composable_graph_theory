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
        myValidator = validatorMixin(isNegative);
        eValidator = validatorMixin(isEven);
        dValidator = validatorMixin(isEven);
    });
    beforeEach(function() {
        queryA = [-1, -2, -3];
        contextA = [6, 4, 10];
        xContext = [9, 7];
    });
    describe('validatorMixin', () => {
        describe('when given a validator function', () => {
            it('returns a function with properties', function() {
                expect(eValidator).toBeFunction();
            });
            it('has the array spawning functions as properties', () => {
                expect(eValidator.isValid).toBeFunction();
            });
            describe('when given a context', () => {
                it('returns an object', () => {
                    expect(eValidator(contextA)).toBeObject();
                });
                it('returns a booleans isValid', () => {
                    expect(eValidator(contextA).isValid(2))
                        .toBeTrue();
                });
            });
        });
    });
});