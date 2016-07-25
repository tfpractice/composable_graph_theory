fdescribe('assign', () => {
    let assign, actions, liftAnswer, f1, f2, f3, d_func;
    beforeAll(function() {
        console.log('\n.........assign Spec.........');
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
        let func1;
        beforeEach(function() {
            func1 = assign(f1);
        });
        it('returns a function awaiting a state', function() {
            expect(func1).toBeFunction();
        });
        it('returns a new object', function() {
            expect(func1(2)).toBeObject();
        });
        it('assigns the return value to a property on the new object', function() {
            expect(func1(2).f1).toBeFunction();
        });

    });
});