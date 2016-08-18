describe('not', function() {
    let not, add2, isGreaterThan, isEven, morethan2, double, exp2, uArg, myUnary;
    beforeAll(function() {
        console.log('\n.........not Spec.........');

        // unaryCall = this.GR.FuncUtils.unaryCall;
        not = this.GR.FuncUtils.not;
        isGreaterThan = (subtrahend) => (arg) => arg > subtrahend;
        morethan2 = isGreaterThan(2);
        isEven = (arg) => arg % 2 === 0;
        add2 = (arg) => arg + 2;
        double = (arg) => arg * 2;
        exp2 = (arg) => Math.pow(arg, 2);
        uArg = 2;
    });
    it('negates the return value of the argument function', function() {

        expect(not(true)).toBeFalse();
        expect(not(not(true))).toBeTrue();
        expect(not(false)).toBeTrue();
    });
    describe('when given a condition', () => {
        it('negates the return value', function() {
            let gt2 = morethan2(uArg);
            expect(not(gt2)).toBeTrue();
        });
    });


});