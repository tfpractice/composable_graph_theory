fdescribe('existy', function() {
    let existy;
    beforeAll(function() {
        console.log('\n.........existy Spec.........');
        existy = this.GR.FuncUtils.existy;

    });
    describe('when given null', () => {
        it('returns false', function() {
            expect(existy(null)).toBeFalse();
        });
    });
    describe('when given undefined', () => {
        it('returns false', function() {
            expect(existy(undefined)).toBeFalse();
        });
    });
    describe('when given false', () => {
        it('returns true', function() {
            expect(existy(false)).toBeTrue();
        });
    });
});