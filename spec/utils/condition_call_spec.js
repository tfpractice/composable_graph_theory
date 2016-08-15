describe('conditionCall', function() {
    let conditionCall, funcValidator, checker, doubleIf, myChecker, evenVal, multVal, isEven, isMult, evenMsg, multMsg;
    beforeAll(function() {
        console.log('\n.........conditionCall Spec.........');
        conditionCall = this.GR.Utils.conditionCall;
        funcValidator = this.GR.Utils.funcValidator;
        checker = this.GR.Utils.checker;
    });
    beforeEach(function() {
        isEven = (num) => num % 2 === 0;
        isMult = (divisor) => (num) => num % divisor === 0;
        evenMsg = "number must be even";
        multMsg = "number must be divisible by "
        evenVal = funcValidator(evenMsg)(isEven);
        multVal = funcValidator(multMsg)(isMult(3));
        myChecker = checker(evenVal, multVal);
        doubleIf = conditionCall(evenVal, multVal)((n) => n * 2);
    });
    describe('when given a series of validators', () => {
        it('returns a function ', function() {
            expect((conditionCall(evenVal, multVal))).toBeFunction();
        });
        describe('when given a function', () => {
            it('returns a function awaiting arguments', function() {
                expect(doubleIf).toBeFunction();
            });
            describe('when given invalid input', () => {
                it('retunrs a non-empty array', function() {
                    expect(() => (doubleIf(17))).toThrow();
                });
            });
            describe('when given valid input', () => {
                it('retunrs a empty array', function() {
                    expect(doubleIf(18)).toBe(36);
                });
            });
        });
    });
});