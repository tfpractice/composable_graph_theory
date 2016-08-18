describe('composeMixin', function() {
    let composeMixin, m0, m1, mxarg, myComp;
    beforeAll(function() {
        console.log('\n.........composeMixin Spec.........');
        funcValidator = this.GR.Utils.funcValidator;
        checker = this.GR.Utils.checker;
        composeMixin = this.GR.ArrayUtils.composeMixin;
    });
    beforeEach(function() {
        m0 = (Base) => ({
            method0: () => "i am method0"
        });
        m1 = (Base) => ({
            method1: () => "i am method1"
        })
        mxarg = {};
        myComp = composeMixin(m0, m1);
    });
    describe('when given a series of mixins', () => {
        it('returns a function ', function() {
            expect((myComp)).toBeFunction();
        });
        describe('when given arg object', () => {
            beforeEach(function() {
                myComp = myComp(mxarg)
            });
            it('retunrs an object containing mixin methods', function() {
                expect(myComp).toBeObject();
                expect(myComp.method0).toBeTruthy();
                expect(myComp.method1).toBeTruthy();
            });
            describe('when given valid input', () => {
                it('retunrs a empty array', function() {});
            });
        });
    });
});