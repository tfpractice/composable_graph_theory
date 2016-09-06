// fdescribe('datafy', () => {
//     var datafy, accessor_func, state0, state1;
//     beforeAll(function() {
//         console.log('\n.........Datafy Spec.........');
//         datafy = this.GR.MethodUtils.datafy;
//     });
//     beforeEach(function() {
//         state0 = {
//             data: "state0"
//         };
//         state1 = {
//             data: "state1"
//         };
//         // accessor_func = (state) => state.data();
//         accessor_func = (state) => state.data;
//     });
//     describe('#datafyFunction(accessor_func)', () => {
//         let data_func, state_data0, state_data1;
//         beforeEach(function() {
//             data_func = datafy(accessor_func);
//             state_data0 = data_func(state0);
//             state_data1 = data_func(state1);
//         });
//         describe('when given a value function', () => {
//             it('returns a second function awaiting a state object', function() {
//                 expect(data_func).toBeFunction();
//             });
//             describe('when given a stateObject', () => {
//                 it('returns an object', function() {
//                     expect(state_data0).toBeObject();
//                 });
//                 it('returns a data() function', function() {
//                     expect(state_data0.data).toBeFunction();
//                 });
//                 describe('#data', () => {
//                     it(
//                         'executes the original function on the state object',
//                         function() {
//                             expect(state_data0.data()).toEqual(
//                                 "state0");
//                             expect(state_data1.data()).toEqual(
//                                 "state1");
//                         });
//                 });

//             });
//         });

//     });
// });

fdescribe('datafy', () => {
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