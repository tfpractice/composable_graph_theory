describe('validify', () => {
    var validify, accessor_func, state0, state1;
    beforeAll(function() {
        console.log('\n.........Validify Spec.........');
        validify = this.GR.Utils.validify;
    });
    beforeEach(function() {
        state0 = {
            valid: true
        };
        state1 = {
            valid: false
        };
        // accessor_func = (state) => state.isValid();
        accessor_func = (obj) => obj.valid;
    });
    describe('#validifyFunction(accessor_func)', () => {
        let valid_func, state_valid0, state_valid1;
        beforeEach(function() {
            valid_func = validify(accessor_func);
            state_valid0 = valid_func(state0);
            state_valid1 = valid_func(state1);
        });
        describe('when given a value function', () => {
            it('returns a second function awaiting a state object', function() {
                expect(valid_func).toBeFunction();
            });
            describe('when given a stateObject', () => {
                it('returns an object', function() {
                    expect(state_valid0).toBeObject();
                });
                it('returns an isValid function', function() {
                    expect(state_valid0.isValid).toBeFunction();
                });
                describe('#isValid', () => {
                    it('executes the original function on the state object', function() {
                        expect(state_valid0.isValid(state0)).toBeTrue();
                        expect(state_valid0.isValid(state1)).toBeFalse();
                    });
                });

            });
        });

    });
});