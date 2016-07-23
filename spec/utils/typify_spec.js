fdescribe('typify', () => {
    var typify, accessor_func, state0, state1;
    beforeEach(function() {
        typify = this.GR.Utils.typify;
        state0 = {
            type: () => "state0"
        };
        state1 = {
            type: () => "state1"
        };
        // accessor_func = (state) => state.type();
        accessor_func = (state) => "theType";
    });
    describe('#typifyFunction(accessor_func)', () => {
        let type_func, state_type0, state_type1;
        beforeEach(function() {
            type_func = typify(accessor_func);
            state_type0 = type_func(state0);
            state_type1 = type_func(state1);
        });
        describe('when given a value function', () => {
            it('returns a second function awaiting a state object', function() {
                expect(type_func).toBeFunction();
            });
            describe('when given a stateObject', () => {
                it('returns an object', function() {
                    expect(state_type0).toBeObject();
                });
                it('returns a type() function', function() {
                    expect(state_type0.type).toBeFunction();
                });
                describe('#type', () => {
                    it('executes the original function on the state object', function() {
                        expect(state_type0.type()).toEqual("theType");
                    });
                });

            });
        });

    });
});