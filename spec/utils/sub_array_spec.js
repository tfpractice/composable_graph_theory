fdescribe('subArray', () => {
    let subArray, myArray;
    beforeAll(function() {
        console.log('\n.........subArray Spec.........');
        subArray = this.GR.Utils.subArray;
    });
    beforeEach(function() {
        myArray = subArray();
        state0 = {
            data: "state0"
        };
        state1 = {
            data: "state1"
        };
        // accessor_func = (state) => state.data();
        accessor_func = (state) => state.data;
    });
    it('is an instance of Array', function() {
        expect(myArray instanceof Array).toBeTrue();
    });
    describe('.from', () => {
        it('returns a new Array', function() {

            console.log(subArray.from.toString())
            // let fArray = Array.prototype.from([1, 2]);
        });
    });
});