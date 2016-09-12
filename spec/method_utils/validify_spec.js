describe('validify', () => {
    var validify, accessor_func, state0, state1;
    beforeAll(function() {
        console.log('\n.........Validify Spec.........');
        validify = this.GR.MethodUtils.validify;
    });
    beforeEach(function() {
        state0 = {
            valid: true
        };
        state1 = {
            valid: false
        };
        accessor_func = (obj) => obj.valid;
    });
    describe('#validifyFunction(accessor_func)', () => {
        let valid_func, state_valid0, state_valid1, compFunc;
        beforeEach(function() {
            compFunc = () => true;
            valid_func = validify(accessor_func);
            state_valid0 = valid_func(compFunc);
            state_valid1 = valid_func(compFunc);
        });
        describe('when given an accessor function', () => {
            it(
                'returns a second function awaiting a state object'
                , function() {
                    expect(valid_func).toBeFunction();
                });
            describe('when given a comparisonFunction', () => {
                it('returns an isValid function'
                    , function() {
                        expect(state_valid0.isValid).toBeFunction();
                    });
                describe('#isValid', () => {
                    it(
                        'executes the accessor function on arg and compares it to the value returned  from compFunc'
                        , function() {
                            expect(
                                state_valid0
                                .isValid(
                                    state0
                                )).toBeTrue();
                            expect(
                                state_valid0
                                .isValid(
                                    state1
                                )).toBeFalse();
                        });
                });
            });
        });
    });
});