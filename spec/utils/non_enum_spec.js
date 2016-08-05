fdescribe('nonEnum', () => {
    var nonEnum, accessor_func, obj0, obj1;
    beforeAll(function() {
        console.log('\n.........nonEnum Spec.........');
        nonEnum = this.GR.Utils.nonEnum;
    });
    beforeEach(function() {
        obj0 = {
            iterFunct: () => 'I am iterable',
            xIterFunct: () => 'I am not iterable',
            data: "state0"
        };
        obj1 = {
            iterFunct: () => 'I am iterable',
            xIterFunct: () => 'I am not iterable',
            data: "state1"
        };
        accessor_func = (state) => state.data;
    });
    describe('Object.keys() beforeCalled on object ', () => {
        it('should return all keys...', function() {
            expect(Object.keys(obj0)).toContain("iterFunct", "xIterFunct", "data");
        });
        describe('nonEnum', () => {
            let xe0, rmIt0;
            beforeEach(function() {
                xe0 = nonEnum(obj0);
                sProps = (Object.keys(obj0).map(k => k.toString()));
                rmIt0 = xe0(...sProps);
            });
            describe('when given an obkject', () => {
                it('returns a function awaiting a key', () => {
                    expect(xe0).toBeFunction();
                });
                describe('when given a property key', () => {
                    it('should remove the property from enumeration', () => {
                        expect(Object.keys(obj0)).not.toContain("iterFunct");
                    });
                });
            });
        });
    });
});