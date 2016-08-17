fdescribe('unaryCall', function() {
    let unaryCall, add2, double, exp2, uArg, myUnary;
    beforeAll(function() {
        console.log('\n.........unaryCall Spec.........');

        unaryCall = this.GR.FuncUtils.unaryCall;
        add2 = (arg) => arg + 2;
        double = (arg) => arg * 2;
        exp2 = (arg) => Math.pow(arg, 2);

    });
    beforeEach(function() {
        uArg = 2;
        myUnary = unaryCall(uArg);

    });
    describe('when given an argument', () => {
        it('returns a function', function() {
            expect(myUnary).toBeFunction();
        });
        describe('when given a function', () => {
            it('invokes the function with the arg', function() {
                expect(myUnary(add2)).toBe(4);
                expect(myUnary(double)).toBe(4);
                expect(myUnary(exp2)).toBe(4);
            });
        });
    });
});