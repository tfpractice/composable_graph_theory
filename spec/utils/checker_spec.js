describe('checker', function() {
    let funcValidator, checker, myChecker, evenVal, multVal, isEven, isMult, evenMsg, multMsg;
    beforeAll(function() {
        console.log('\n.........checker Spec.........');
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
    });
    describe('when given a series of validators', () => {
        it('returns a function ', function() {
            expect((myChecker)).toBeFunction();
        });
        describe('when given arguments', () => {
            describe('when given invalid input', () => {
                it('retunrs a non-empty array', function() {
                    expect(myChecker(17)).not.toBeEmptyArray();
                });
            });
            describe('when given valid input', () => {
                it('retunrs a empty array', function() {
                    expect(myChecker(18)).toBeEmptyArray();
                });
            });
        });
    });
});