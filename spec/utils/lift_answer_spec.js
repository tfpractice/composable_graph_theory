fdescribe('liftAnswer', () => {
    var are_equal, labelize, accessor_func, lab_func, state0, state1, s_obj0, s_obj1;
    let actions, f1, lf1, f2, lf2, f3, lf3, d_func;
    beforeAll(function() {
        console.log('\n.........liftAnswer Spec.........');
        liftAnswer = this.GR.Utils.liftAnswer;
        labelize = this.GR.MethodUtils.labelize;
    });
    beforeEach(function() {
        f1 = (n) => 2 * n;
        lf1 = () => (state) => {
            let res = f1(state);
            return {
                reswer: res,
                state: res
            };
        };
        f2 = (n) => n + 3;
        lf2 = () => (state) => {
            let res = f2(state);
            return {
                reswer: res,
                state: res
            };
        };
        f3 = (n) => n * 3;
        lf3 = () => (state) => {
            let res = f3(state);
            return {
                reswer: res,
                state: res
            };
        };
        d_func = (n, ns) => ({
            values: n,
            state: ns
        });
        sd_func = (vals, st) => vals;

        lab_func = labelize((state) => state.val);
        state0 = {
            val: "state0"
        };
        state1 = {
            val: "state1"
        };
        s_obj0 = Object.assign({}, lab_func(state0));
        s_obj1 = Object.assign({}, lab_func(state1));
        accessor_func = (obj) => obj.label();
        // accessor_func = (state) => state.equality();
    });
    describe('when given an reswer and a stateFun', () => {
        let lift_f1;
        beforeEach(function() {
            lift_f1 = liftAnswer(f1);
        });
        it('retunrs a function awaitiong args', function() {
            expect(lift_f1).toBeFunction();
        });
        describe('when given args', () => {
            let lf1_args;
            beforeEach(function() {
                lf1_args = lift_f1();
            });
            it('returns a function awaiting state', function() {
                expect(lf1_args).toBeFunction();
            });
            describe('when given a state', () => {
                it('retuns an object with reswer and state properties',
                    function() {
                        expect(lf1_args(2)).toBeObject();
                    });
            });
        });
    });

});