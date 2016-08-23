describe('isEmpty', function() {
    let isEmpty, cFunc, cState, myElements, xElements;
    beforeAll(function() {
        console.log('\n.........isEmpty Spec.........');
        isEmpty = this.GR.ArrayUtils.isEmpty;
        myElements = [2, 3, 4, 5];
        xElements = [9, 3, 7, 5];
    });
    describe('when given a collection', () => {
        it('a boolean based on number of elements in array', function() {
            expect(isEmpty(myElements)).toBeFalse();
            expect(isEmpty([])).toBeTrue();
        });
    });
});