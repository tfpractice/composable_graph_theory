fdescribe('subArray', () => {
    let subArray, myArray, n0, n1;
    beforeAll(function() {
        console.log('\n.........subArray Spec.........');
        subArray = this.GR.Utils.subArray;
    });
    beforeEach(function() {
        myArray = subArray.subArray();
        state0 = {
            data: "state0"
        };
        state1 = {
            data: "state1"
        };
        accessor_func = (state) => state.data;
    });
    it('is an instance of Array', function() {
        expect(myArray instanceof Array).toBeTrue();
    });
    describe('.from', () => {
        it('returns a new Array', function() {
            // console.log(subArray)
            // console.log(subArray.subArray().from.toString())
            let fArray = subArray.subArray().from([1, 2]);
            expect(fArray instanceof Array).toBeTrue();
        });
    });
    describe('SA2', () => {
        it('retunrs a modified array', function() {
            expect(subArray.SA2([]) instanceof Array).toBeTrue();
        });
        describe('splice()', () => {
            it('returns a new subArray', function() {
                let a234 = subArray.SA2(subArray.subArray().from([2, 3, 4]));

                // console.log(a234.splice(1).splice());
            });
        });
    });
    describe('instance', () => {
        it('retunrs a modified array', function() {
            expect(subArray.instance([]) instanceof Array).toBeTrue();
        });
        describe('splice()', () => {
            it('returns a new subArray', function() {
                let sArr = [2, 3, 4];
                let a234 = subArray.instance(sArr);
                console.log(a234.forEach);
                a234 = a234.push(2);
                console.log("a234", [...a234]);
                console.log("sArr", sArr);
                // console.log(changed);

                // console.log(a234.splice(0).myMethod());
            });
        });
    });

});