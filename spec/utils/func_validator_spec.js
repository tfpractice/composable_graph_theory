fdescribe('funcValidator', function() {
    let funcValidator, myFunc, argFunc, argMessage;
    beforeAll(function() {
        // arrayOf = this.GR.Utils.arrayUtils.arrayOf;
        funcValidator = this.GR.Utils.funcValidator;

        // Node = this.GR.Node;
    });
    beforeEach(function() {
        argFunc = (num) => num % 2 === 0;
        argMessage = "number must be even";
        myFunc = funcValidator(argMessage, argFunc);
        // nMix = baseMixin(Node);
        // 
    });

    it('returns a object ', function() {
        expect((myFunc)).toBeFunction();
    });
    it('has a message property', function() {
        expect(myFunc.message).toBeTruthy();
    });

});