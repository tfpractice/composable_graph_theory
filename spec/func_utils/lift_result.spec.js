fdescribe('liftResult', () => {
    var are_equal, labelize, accessor_func, lab_func, state0, state1, s_obj0, s_obj1;
    let liftResult, f1, f1_lift, f2, f2_lift, f3, f3_lift, final, d_func;
    let lState;
    beforeAll(function() {
        console.log('\n.........liftResult Spec.........');
        liftResult = this.GR.FuncUtils.liftResult;
        labelize = this.GR.MethodUtils.labelize;
    });
    beforeEach(function() {
        f1 = (n) => 2 * n;
        f1_lift = liftResult(f1, (n) => n)
        f2 = (n) => n + 3;
        f2_lift = liftResult(f2, (n) => n)
        f3 = (n) => n * 3;
        f3_lift = liftResult(f3, (n) => n)
        final = (vals, state) => ({
            vals, state
        });
        lState = 4

    });
    it('is a function', () => {
        expect(liftResult).toBeFunction();
    });
    describe('when given an result and a stateFun', () => {
        it('returns a function', () => {
            expect(f1_lift).toBeFunction();
        });
        describe('when given args', () => {
            it('returns a function', () => {
                expect(f1_lift()).toBeFunction();
            });
            describe('when given a state value', () => {
                it('returns an object with result and state properties', () => {
                    let resObj = f1_lift()(lState);
                    expect(resObj).toBeObject();
                    expect(resObj.result).toBe(8);
                    expect(resObj.state).toBe(4);
                });
            });
        });
    });
});