fdescribe('are_equal', () => {
    var are_equal, labelize, accessor_func, lab_func, state0, state1, s_obj0, s_obj1;
    beforeAll(function() {
        console.log('\n.........Curry_equality Spec.........');
        are_equal = this.GR.Utils.are_equal;
        labelize = this.GR.Utils.labelize;
    });
    beforeEach(function() {
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
    describe('#are_equal(accessor_func)', () => {
        let equality_func, state_equality0, state_equality1;
        beforeEach(function() {
            equality_func = are_equal(accessor_func);
            state_equality0 = equality_func(s_obj0);
            state_equality1 = equality_func(s_obj1);
        });
        describe('when given a value function', () => {
            it('returns a second function awaiting a host object', function() {
                expect(equality_func).toBeFunction();
            });
            describe('when given a host object', () => {
                it('returns a third function awaiting a argument object', function() {
                    expect(state_equality0).toBeFunction();
                });
                describe('when given a argument object', () => {
                    // it('returns a function awaiting a argument object', function() {
                    //     expect(state_equality0).toBeFunction();
                    // });
                    // it('returns a are_equal() function', function() {
                    //     expect(state_equality0.are_equal).toBeFunction();
                    // });
                    // describe('#are_equal', () => {
                    it('executes the original function on both objects and compares return values', function() {
                        expect(state_equality0(s_obj0)).toBeTrue();
                    });
                });

            });
        });

    });
});