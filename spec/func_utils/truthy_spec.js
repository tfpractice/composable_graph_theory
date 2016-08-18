describe('truthy', function() {
    let truthy, tVal;
    beforeAll(function() {
        console.log('\n.........truthy Spec.........');
        truthy = this.GR.FuncUtils.truthy;
        tVal = 3;

    });
    describe('when given null', () => {
        it('returns false', function() {
            expect(truthy(null)).toBeFalse();
        });
    });
    describe('when given undefined', () => {
        it('returns false', function() {
            expect(truthy(undefined)).toBeFalse();
        });
    });
    describe('when given false', () => {
        it('returns true', function() {
            expect(truthy(false)).toBeFalse();
        });
    });
    describe('when given a truthy value', () => {
        it('returns true', function() {
            expect(truthy(tVal)).toBeTrue();
        });
    });
});