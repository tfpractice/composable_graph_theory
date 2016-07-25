fdescribe('datafy', () => {
    var datafy, accessor_func, state0, state1;
    beforeAll(function() {
        console.log('\n.........Datafy Spec.........');
        datafy = this.GR.Utils.datafy;
    });
    beforeEach(function() {
        state0 = {
            data: "state0"
        };
        state1 = {
            data: "state1"
        };
        // accessor_func = (state) => state.data();
        accessor_func = (state) => state.data;
    });
    describe('#datafyFunction(accessor_func)', () => {
        let data_func, state_data0, state_data1;
        beforeEach(function() {
            data_func = datafy(accessor_func);
            state_data0 = data_func(state0);
            state_data1 = data_func(state1);
        });
        describe('when given a value function', () => {
            it('returns a second function awaiting a state object', function() {
                expect(data_func).toBeFunction();
            });
            describe('when given a stateObject', () => {
                it('returns an object', function() {
                    expect(state_data0).toBeObject();
                });
                it('returns a data() function', function() {
                    expect(state_data0.data).toBeFunction();
                });
                describe('#data', () => {
                    it('executes the original function on the state object', function() {
                        expect(state_data0.data()).toEqual("state0");
                        expect(state_data1.data()).toEqual("state1");
                    });
                });

            });
        });

    });
});