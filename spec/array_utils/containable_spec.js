fdescribe('containable', () => {
    let containable, myFunc, context0, context1, xContext;
    let myContainment, sContainment0, sContainment1;
    let contains, notContains;
    beforeAll(function() {
        console.log('\n.........containable Spec.........');
        containable = this.GR.ArrayUtils.containable;
        myFunc = (query) => (el) => ((el + query) % 2) === 0;
        myContainment = containable(myFunc);
        contains = myContainment.contains;
        notContains = myContainment.notContains;
    });
    beforeEach(function() {
        context0 = [2, 6, 8, 10];
        context1 = [9, 3, 7, 5];
        sContainment0 = myContainment(context0);
        sContainment1 = myContainment(context1);
    });
    it('is a function', () => {
        expect(containable).toBeFunction();
    });
    fdescribe('when given an accessor function cFunc', () => {
        it('returns a second function awaiting a context object', () => {
            expect(myContainment).toBeFunction();
            expect(myContainment.contains).toBeFunction();
        });
    });
    describe('operators', () => {
        describe('contains', () => {
            it('compares vFunc on both objects', () => {
                expect(contains(sContainment0)(2)).toBeTrue();
                expect(contains(sContainment1)(2)).toBeFalse();
            });
        });
        describe('notContains', () => {
            it('compares vFunc on both objects', () => {
                expect(notContains(sContainment0)(7)).toBeTrue();
                expect(notContains(sContainment1)(7)).toBeFalse();
            });
        });
    });
    describe('methods', () => {
        describe('contains', () => {
            it('it compares the vFunc() on the argument', () => {
                expect(sContainment0.contains(4)).toBeTrue();
                expect(sContainment1.contains(4)).toBeFalse();
            });
        });
        describe('notContains', () => {
            it('it compares the vFunc() on the argument', () => {
                expect(sContainment0.notContains(4)).toBeTrue();
                expect(sContainment1.notContains(4)).toBeFalse();
            });
        });
    });
});