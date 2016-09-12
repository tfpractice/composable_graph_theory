describe('datafy', () => {
    var datafy, myFunc, state0, state1;
    let myData, sData0, sData1;
    let getData, sameData;
    beforeAll(function() {
        console.log('\n.........datafy Spec.........');
        datafy = this.GR.MethodUtils.datafy;
        myFunc = (state) => state.data;
        myData = datafy(myFunc);
        getData = myData.getData;
        sameData = myData.sameData;
    });
    beforeEach(function() {
        state0 = {
            data: "state0"
        };
        state1 = {
            data: "state1"
        };
        sData0 = myData(state0);
        sData1 = myData(state1);
    });
    it('is a function', () => {
        expect(datafy).toBeFunction();
    });
    describe('when given an accessor function lFunc', () => {
        it('returns a second function awaiting a state object', () => {
            expect(myData).toBeFunction();
            expect(myData.getData).toBeFunction();
            expect(myData.sameData).toBeFunction();
        });
    });
    describe('operators', () => {
        describe('getData', () => {
            it('retrieves the data attribute ', () => {
                expect(getData(myData(state0))).toBe("state0");
            });
        });
        describe('sameData', () => {
            it('compares getData on both objects', () => {
                expect(sameData(sData0)(sData1)).toBeFalse();
            });
        });
    });
    describe('methods', () => {
        describe('data', () => {
            it('retrieves the data attribute ', () => {
                expect(sData0.data()).toBe("state0");
            });
        });
        describe('sameData', () => {
            it('it compares the data() with getData() on the argument', () => {
                expect(sData0.sameData(sData0)).toBeTrue();
                expect(sData0.sameData(sData1)).toBeFalse();
            });
        });
    });
});