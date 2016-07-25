fdescribe('liftAnswer', () => {
    var are_equal, labelize, accessor_func, lab_func, state0, state1, s_obj0, s_obj1;
    let actions, f1, lf1, f2, lf2, f3, lf3, d_func;
    beforeAll(function() {
        console.log('\n.........liftAnswer Spec.........');
        liftAnswer = this.GR.Utils.liftAnswer;
        labelize = this.GR.Utils.labelize;
    });
    beforeEach(function() {
        f1 = (n) => 2 * n;
        lf1 = (f1) => (state) => {
            let ans = f1(state);
            return {
                answer: ans,
                state: ans
            };
        };
        f2 = (n) => n + 3;
        lf2 = (f2) => (state) => {
            let ans = f2(state);
            return {
                answer: ans,
                state: ans
            };
        };
        f3 = (n) => n * 3;
        lf3 = (f3) => (state) => {
            let ans = f3(state);
            return {
                answer: ans,
                state: ans
            };
        };
        d_func = (n, ns) => ({
            values: n,
            state: ns
        });
        sd_func = (vals) => vals;

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
    describe('when given an answer and a stateFun', () => {
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
                it('retuns an object with answer and state properties', function() {
                    console.log(lf1_args(2));
                    expect(lf1_args(2)).toBeObject();
                });
            });
        });
    });
    // describe('when given an array of actions and a done function', () => {
    // let seedFunc;
    // beforeEach(function() {
    // seedFunc = actions([lf1(), lf2(), lf3()], d_func);
    // });
    // it('returns a function awaiting seed data', function() {
    // expect(seedFunc).toBeFunction();
    // });
    // describe('when given a seed value', () => {
    // it('returns an object with a value and state ', function() {
    // console.log(seedFunc(2));
    // expect(seedFunc(2)).toBeObject();
    // });
    // });
    // });
});