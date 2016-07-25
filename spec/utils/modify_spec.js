fdescribe('modify', () => {
    let assign, modify, actions, modObj, f1, f2, f3, d_func;
    beforeAll(function() {
        console.log('\n.........modify Spec.........');
        modify = this.GR.Utils.modify;
        assign = this.GR.Utils.assign;
    });
    beforeEach(function() {
        f1 = (n) => ({
            "f1": (factor = 2) => factor * n
        });
        f2 = (n) => ({
            "f2": () => n + 3
        });
        f3 = (n) => ({
            "f3": () => n * 3
        });
        d_func = (values, state) => ({
            values,
            state
        });
    });
    describe('when given a stateHandler function', () => {
        let func2;
        beforeEach(function() {
            func2 = modify(f2);
        });
        it('returns a function awaiting a state', function() {
            expect(func2).toBeFunction();
        });
        describe('when called with a state object', () => {
            let f2state;
            beforeEach(function() {
                f2state = func2(2);
            });
            it('returns a function awaiting an object', function() {
                expect(f2state).toBeFunction();
            });
            describe('when given a hostObject', () => {
                let nullHost, f3state, f3Host;
                beforeEach(function() {
                    nullHost = f2state();
                    f3state = assign(f3)(4);
                    f3Host = f2state(f3state);
                });
                it('assigns the handlers return value to the specifed obeject', function() {
                    expect(nullHost.f2).toBeTruthy();
                    expect(f3Host.f2).toBeTruthy();
                });
            });
        });
    });
});