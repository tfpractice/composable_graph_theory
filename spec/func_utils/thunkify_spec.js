describe('thunkify', function() {
    let thunkify, f0, f1, f2;
    let cFunc, cState, myElements, xElements;
    beforeAll(function() {
        console.log('\n.........thunkify Spec.........');
        thunkify = this.GR.FuncUtils.thunkify;
        f0 = () => true;
        f1 = () => false;
        f2 = (el) => el % 2 === 0;

    });
    describe('when given a function ', () => {
        describe('when some elements pass', () => {
            it('returns a function', function() {
                expect(thunkify(f0)).toBeFunction();
            });
        });
        describe('when no elements pass', () => {
            it('returns  the evaluated function', function() {
                expect(thunkify(f0)()).toBeTrue();
            });
        });
    });
});