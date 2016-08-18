describe('invokeIf', function() {
    let invokeIf, sqr4, myInvocation;
    let isGreaterThan, morethan2, exp2;
    beforeAll(function() {
        console.log('\n.........invokeIf Spec.........');
        invokeIf = this.GR.FuncUtils.invokeIf;
        exp2 = (arg) => Math.pow(arg, 2);
        isGreaterThan = (subtrahend) => (arg) => arg > subtrahend;
        morethan2 = isGreaterThan(2);
        myInvocation = invokeIf(morethan2);
        sqr4 = () => exp2(4);
    });
    describe('when given condition', () => {
        it('returns a function', function() {
            expect(invokeIf(morethan2)).toBeFunction();
        });
        describe('when given a function', () => {
            describe('when the condition is false', () => {
                it('returns undefined', function() {
                    expect(invokeIf(false)(sqr4)).toBeUndefined();
                });
            });
            describe('when the condition is true', () => {
                it('returns the return val of the function', function() {
                    expect(myInvocation(sqr4)).toBe(16);
                });
            });
        });
    });
});