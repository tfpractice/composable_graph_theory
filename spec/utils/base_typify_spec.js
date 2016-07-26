fdescribe('baseTypify', () => {
    var baseTypify, accessor_func, n_accessor, nodeType, Node, state0, state1;
    beforeAll(function() {
        console.log('\n.........BaseTypify Spec.........');
        baseTypify = this.GR.Utils.baseTypify;
        Node = this.GR.Node;
    });
    beforeEach(function() {
        state0 = {
            type: "state0"
        };
        state1 = {
            type: "state1"
        };
        n_accessor = (obj) => obj.toString()


        // accessor_func = (state) => state.type();
        accessor_func = (state) => state.type;
    });

    describe('#baseTypifyFunction(accessor_func)', () => {
        let type_func, state_type0, state_type1;
        beforeEach(function() {
            type_func = baseTypify(accessor_func);
            nodeType = baseTypify(n_accessor)(Node);

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
                    expect(nodeType).toBeObject();
                });
                it('returns a baseType() function', function() {
                    expect(state_type0.baseType).toBeFunction();
                });
                describe('#type', () => {
                    it('executes the original function on the state object', function() {
                        expect(state_type0.baseType()).toEqual("state0");
                        expect(nodeType.baseType()).toEqual('Node');
                        // console.log(nodeType.baseType());
                    });
                });
            });

        });
    });
});