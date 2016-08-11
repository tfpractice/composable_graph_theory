fdescribe('funcValidator', function() {
    let funcValidator, myFunc, argFunc, argMessage;
    beforeAll(function() {
        console.log('\n.........funcValidator Spec.........');
        funcValidator = this.GR.Utils.funcValidator;
    });
    beforeEach(function() {
        argFunc = (num) => num % 2 === 0;
        argMessage = "number must be even";
        myFunc = funcValidator(argMessage)(argFunc);
    });
    it('returns a object ', function() {
        expect((myFunc)).toBeFunction();
    });
    it('has a message property', function() {
        expect(myFunc.message).toBeTruthy();
    });
});