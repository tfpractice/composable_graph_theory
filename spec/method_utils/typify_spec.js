describe('typify', () => {
    var typify, myFunc, state0, state1;
    let myType, sType0, sType1;
    let getType, sameType;
    beforeAll(function() {
        console.log('\n.........typify Spec.........');
        typify = this.GR.MethodUtils.typify;
        myFunc = (state) => state.type;
        myType = typify(myFunc);
        getType = myType.getType;
        sameType = myType.sameType;
    });
    beforeEach(function() {
        state0 = {
            type: "state0"
        };
        state1 = {
            type: "state1"
        };
        sType0 = myType(state0);
        sType1 = myType(state1);
    });
    it('is a function', () => {
        expect(typify).toBeFunction();
    });
    describe('when given an accessor function lFunc', () => {
        it('returns a second function awaiting a state object', () => {
            expect(myType).toBeFunction();
            expect(myType.getType).toBeFunction();
            expect(myType.sameType).toBeFunction();
        });
    });
    describe('operators', () => {
        describe('getType', () => {
            it('retrieves the type attribute ', () => {
                expect(getType(myType(state0))).toBe("state0");
            });
        });
        describe('sameType', () => {
            it('compares getType on both objects', () => {
                expect(sameType(sType0)(sType1)).toBeFalse();
            });
        });
    });
    describe('methods', () => {
        describe('type', () => {
            it('retrieves the type attribute ', () => {
                expect(sType0.type()).toBe("state0");
            });
        });
        describe('sameType', () => {
            it('it compares the type() with getType() on the argument', () => {
                expect(sType0.sameType(sType0)).toBeTrue();
                expect(sType0.sameType(sType1)).toBeFalse();
            });
        });
    });
});