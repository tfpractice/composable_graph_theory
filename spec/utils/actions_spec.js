fdescribe('actions', () => {
    var are_equal, labelize, accessor_func, lab_func, state0, state1, s_obj0, s_obj1;
    let actions, liftAnswer, f1, lf1, sf1, f2, lf2, sf2, f3, lf3, sf3, d_func;
    beforeAll(function() {
        console.log('\n.........Actions Spec.........');
        actions = this.GR.Utils.actions;
        liftAnswer = this.GR.Utils.liftAnswer;
        labelize = this.GR.Utils.labelize;
    });
    beforeEach(function() {
        f1 = (n) => 2 * n;
        sf1 = () => (state) => {
            let ans = f1(state);
            return {
                answer: ans,
                state: ans
            };
        };
        f2 = (n) => n + 3;
        sf2 = () => (state) => {
            let ans = f2(state);
            return {
                answer: ans,
                state: ans
            };
        };
        f3 = (n) => n * 3;
        sf3 = () => (state) => {
            let ans = f3(state);
            return {
                answer: ans,
                state: ans
            };
        };
        lf1 = () => (state) => {
            let ans = f1(state);
            return {
                answer: ans,
                state: ans
            };
        };
        lf2 = () => (state) => {
            let ans = f2(state);
            return {
                answer: ans,
                state: ans
            };
        };
        lf3 = () => (state) => {
            let ans = f3(state);
            return {
                answer: ans,
                state: ans
            };
        };
        d_func = (values, state) => ({
            values,
            state
        });
        sd_func = (vals, state) => vals;
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
    describe('when given an array of actions and a done function', () => {
        let seedFunc;
        beforeEach(function() {
            seedFunc = actions([lf1(), lf2(), lf3()], d_func);
        });
        it('returns a function awaiting seed data', function() {
            expect(seedFunc).toBeFunction();
        });
        describe('when given a seed value', () => {
            it('returns an object with a value and state ', function() {
                expect(seedFunc(2)).toBeObject();
            });
        });
    });
});