fdescribe('copy', function() {
    let copy, cFunc, cState, myElements, xElements;
    beforeAll(function() {
        console.log('\n.........copy Spec.........');
        copy = this.GR.ArrayUtils.copy;
        myElements = [2, 3, 4, 5];
        xElements = [9, 3, 7, 5];
    });
    it('is a function', function() {
        expect(copy).toBeFunction();
    });
    describe('when given a collection', () => {
        it('returns an empty array', function() {
            let copyed = copy(myElements);
            expect(copyed).toBeArray();
            expect(copyed).toContain(...myElements);
        });
    });
});