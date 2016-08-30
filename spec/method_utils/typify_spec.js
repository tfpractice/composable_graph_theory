describe('typify', () => {
    var typify, accessor_func, state0, state1;
    beforeAll(function() {
        console.log('\n.........Typify Spec.........');
        typify = this.GR.MethodUtils.typify;
    });
    beforeEach(function() {
        state0 = {
            type: () => "state0"
        };
        state1 = {
            type: () => "state1"
        };
        // accessor_func = (state) => state.type();
        accessor_func = (state) => "theType";
    });
    describe('getType', function() {
        it('calls the type functio', function() {
            expect(typify.getType(state0)).toBe("state0");
        });
    });
    describe('sameType', () => {
        it('compares two objects by type', function() {
            expect(typify.sameType(state0)(state0)).toBeTrue();
            expect(typify.sameType(state0)(state1)).toBeFalse();
        });
    });
    describe('#typify(accessor_func)', () => {
        let type_func, state_type0, state_type1;
        beforeEach(function() {
            type_func = typify(accessor_func);
            state_type0 = type_func(state0);
            state_type1 = type_func(state1);
        });
        describe('when given a value function', () => {
            it('returns a second function awaiting a state object',
                function() {
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
                    it(
                        'executes the original function on the state object',
                        function() {
                            expect(state_type0.type()).toEqual(
                                "theType");
                        });
                });

            });
        });

    });
});