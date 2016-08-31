fdescribe('labelize', () => {
    var labelize, val_func, state0, state1;
    beforeAll(function() {
        console.log('\n.........Labelize Spec.........');
        labelize = this.GR.MethodUtils.labelize;
    });
    beforeEach(function() {
        state0 = {
            label: () => "state0"
        };
        state1 = {
            label: () => "state1"
        };
        val_func = (state) => state.label();
    });
    describe('#labelizeFunction(val_func)', () => {
        let lab_func, state_label0, state_label1;
        beforeEach(function() {
            lab_func = labelize(val_func);
            state_label0 = lab_func(state0);
            state_label1 = lab_func(state1);
        });
        describe('when given a value function', () => {
            it('returns a second function awaiting a state object', () => {
                expect(lab_func).toBeFunction();
            });
            describe('when given a stateObject', () => {
                it('returns an object', () => {
                    expect(state_label0).toBeObject();
                });
                it('returns a label() function', () => {
                    expect(state_label0.label).toBeFunction();
                });
                it('returns an #islabelize attribute', () => {
                    // expect(state_label0.islabelize).toBeTruthy();
                });
                describe('#label', () => {
                    it(
                        'executes the original function on the state object', () => {
                            expect(state_label0.label()).toEqual(
                                "state0");
                        });
                });
                describe('#label', () => {
                    it(
                        'executes the original function on the state object', () => {
                            expect(state_label1.label()).toEqual(
                                "state1");
                        });
                });
            });
            describe('getLabel', () => {
                it('returns the label of the object', () => {
                    expect(labelize.getLabel(state0)).toBe(
                        "state0");
                });
            });
            describe('sameLabel', () => {
                it('compares the labels of two objects', () => {
                    console.log(labelize.getLabel(state0));
                    expect(labelize.sameLabel(state0)(
                        state0)).toBeTrue();
                    expect(labelize.sameLabel(state1)(
                        state0)).toBeFalse();
                });
            });
        });
    });
});