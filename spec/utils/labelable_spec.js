fdescribe('Labelable', () => {
    var Labelable, decoyFunc;
    beforeEach(function() {
        Labelable = this.GR.Utils.Labelable;
        decoyFunc = (arg) => "I am the decoy function";
    });
    describe('#labelizeFunction(lFunc)', () => {
        let lRet;
        beforeEach(function() {
            lRet = Labelable.labelizeFunction(decoyFunc);
        });
        it('returns an object', function() {
            expect(lRet).toBeObject();
        });
        it('returns a label() function', function() {
            expect(lRet.label).toBeFunction();
        });
        describe('returned label', () => {
            it('executes the original function arg', function() {
                expect(lRet.label()).toEqual("I am the decoy function");
            });

        });
    });
});