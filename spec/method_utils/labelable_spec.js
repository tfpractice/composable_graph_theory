fdescribe('labelize', () => {
    var labelize, myFunc, state0, state1;
    let myLabel, sLabel0, sLabel1;
    let getLabel, sameLabel;
    beforeAll(function() {
        console.log('\n.........Labelize Spec.........');
        labelize = this.GR.MethodUtils.labelize;
        myFunc = (state) => state.label();
        myLabel = labelize(myFunc);
        getLabel = myLabel.getLabel;
        sameLabel = myLabel.sameLabel;
    });
    beforeEach(function() {
        state0 = {
            label: () => "state0"
        };
        state1 = {
            label: () => "state1"
        };
        sLabel0 = myLabel(state0);
        sLabel1 = myLabel(state1);
    });
    it('is a function', function() {
        expect(labelize).toBeFunction();
    });
    describe('when given an accessor function lFunc', () => {
        it('returns a second function awaiting a state object', () => {
            expect(myLabel).toBeFunction();
            expect(myLabel.getLabel).toBeFunction();
            expect(myLabel.sameLabel).toBeFunction();
        });
    });
    describe('operators', () => {
        describe('getLabel', () => {
            it('retrieves the label attribute ', () => {
                expect(getLabel(myLabel(state0))).toBe("state0");
            });
        });
        describe('sameLabel', () => {
            it('compares getLabel on both objects', () => {
                expect(sameLabel(sLabel0)(sLabel1)).toBeFalse();
            });
        });
    });
    describe('methods', () => {
        describe('label', () => {
            it('retrieves the label attribute ', () => {
                expect(sLabel0.label()).toBe("state0");
            });
        });
        describe('sameLabel', () => {
            it('it compares the label() with getLabel() on the argument', () => {
                expect(sLabel0.sameLabel(state0)).toBeTrue();
                expect(sLabel0.sameLabel(state1)).toBeFalse();
            });
        });
    });
});