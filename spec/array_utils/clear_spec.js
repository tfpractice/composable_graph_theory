fdescribe('clear', function() {
    let clear, cFunc, cState, myElements, xElements;
    beforeAll(function() {
        console.log('\n.........clear Spec.........');
        clear = this.GR.ArrayUtils.clear;
        myElements = [2, 3, 4, 5];
        xElements = [9, 3, 7, 5];
    });
    it('is a function', function() {
        expect(clear).toBeFunction();
    });
    describe('when given a collection', () => {
        it('returns an empty array', function() {
            let cleared = clear(myElements);
            expect(myElements).toBeEmptyArray();
        });
    });
});