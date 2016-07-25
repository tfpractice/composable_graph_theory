fdescribe('actions', () => {
    var are_equal, labelize, accessor_func, lab_func, state0, state1, s_obj0, s_obj1;
    let actions, f1, f2, f3, d_func;
    beforeAll(function() {
        console.log('\n.........Actions Spec.........');
        actions = this.GR.Utils.actions;
        labelize = this.GR.Utils.labelize;
    });
    beforeEach(function() {
        f1 = (n) => 2 * n;
        f2 = (n) => n + 3;
        f3 = (n) => n * 3;
        d_func = (n, ns) => ({
            value: n,
            state: ns
        });

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
            seedFunc = actions([f1, f2, f3], d_func);
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