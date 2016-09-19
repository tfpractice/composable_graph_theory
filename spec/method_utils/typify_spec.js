describe('typify', () => {
    var typify, myFunc, state0, state1;
    let myType, sType0, sType1;
    let getType, sameType;
    let tStruct, stateOps;
    beforeAll(function() {
        console.log('\n.........typify Spec.........');
        typify = this.GR.MethodUtils.typify;
        tStruct = (type = 'myType') => ({ type });
        myFunc = (state) => state.type;
        myType = typify(myFunc);
        getType = myType.getType;
        sameType = myType.sameType;
        stateOps = typify.stateOps(myFunc);
    });

    beforeEach(function() {
        state0 = tStruct('state0');
        state1 = tStruct('state1');
        sType0 = myType(state0);
        sType1 = myType(state1);
    });

    it('is a function', () => {
        expect(typify).toBeFunction();
    });
    describe('when given an accessor function tFunc', () => {
        it('returns a second function awaiting a state object',
            () => {
                expect(myType).toBeFunction();
                expect(myType.getType).toBeFunction();
                expect(myType.sameType).toBeFunction();
            });
    });
    describe('operators', () => {
        describe('getType', () => {
            it('retrieves the type attribute ', () => {
                expect(getType(state0)).toBe(
                    'state0');
            });
        });
        describe('sameType', () => {
            it('compares getType on both objects', () => {
                expect(sameType(sType0)(sType1))
                    .toBeFalse();
            });
        });
    });
    describe('methods', () => {
        describe('type', () => {
            it('retrieves the type attribute ', () => {
                expect(sType0.type()).toBe(
                    'state0');
            });
        });
        describe('sameType', () => {
            it(
                'it compares the type() with getType() on the argument',
                () => {
                    expect(sType0.sameType(state0))
                        .toBeTrue();
                    expect(sType0.sameType(state1))
                        .toBeFalse();
                });
        });
    });
    describe('stateOps ', () => {
        describe('when when passed a typeFunction', () => {
            it('returns a function with props', () => {
                expect(stateOps).toBeFunction();
                expect(stateOps.getType).toBeFunction();
                expect(stateOps.sameType).toBeFunction();
            });
        });
        describe('when when passed a stateObject', () => {
            it('returns an object with props', () => {
                let s0 = stateOps(state0);
                expect(s0).toBeObject();
                expect(s0.type).toBeFunction();
                expect(s0.sameType).toBeFunction();
            });
            describe('type', () => {
                it(
                    'retrieves the type attribute ',
                    () => {
                        expect(stateOps(
                                state0)
                            .type()).toBe(
                            'state0');
                    });
            });
            describe('sameType', () => {
                it(
                    'it compares the tFunc on both state objects',
                    () => {
                        let s0 = stateOps(
                            state0);
                        expect(s0.sameType(
                            state0)).toBeTrue();
                        expect(s0.sameType(
                            state1)).toBeFalse();
                    });
            });
        });
    });
});