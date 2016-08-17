fdescribe('identity', function() {
    let identity, unaryCall, add2, double, exp2, uArg, myUnary;
    beforeAll(function() {
        console.log('\n.........identity Spec.........');

        unaryCall = this.GR.FuncUtils.unaryCall;
        identity = this.GR.FuncUtils.identity;
        add2 = (arg) => arg + 2;
        double = (arg) => arg * 2;
        exp2 = (arg) => Math.pow(arg, 2);

    });
    beforeEach(function() {
        uArg = 2;
        myUnary = unaryCall(uArg);

    });
    describe('when given an argument', () => {
        it('returns the argument', function() {
            expect(identity(uArg)).toBe(2);

        });
        it('returns a function', function() {
            expect(identity(myUnary)).toBeFunction();
        });
        describe('when given a function', () => {
            it('invokes the function with the arg', function() {
                expect(identity(myUnary(add2))).toBe(4);
                expect(identity(myUnary(double))).toBe(4);
                expect(identity(myUnary(exp2))).toBe(4);
            });
        });
    });
});