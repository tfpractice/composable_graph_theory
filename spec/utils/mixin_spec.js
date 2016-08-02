describe('mixin', () => {
    let mixin, actions, liftAnswer, f1, f2, f3, d_func;
    beforeAll(function() {
        console.log('\n.........mixin Spec.........');
        mixin = this.GR.Utils.mixin;
    });
    beforeEach(function() {
        f1 = (n) => ({
            "f1": (factor = 2) => factor * n
        });
        f2 = (n) => ({
            "f2": () => n + 3
        });
        f3 = (n) => ({
            "f3": () => n * 3
        });
        d_func = (values, state) => ({
            values,
            state
        });
    });
    describe('when given an object function', () => {
        let mob1;
        beforeEach(function() {
            mob1 = mixin({
                val: 2
            });
        });
        it('returns a function awaiting a mixin', function() {
            expect(mob1).toBeFunction();
        });
        it('returns a new object', function() {
            expect(mob1(f1(2))).toBeObject();
        });
        it('mixins the return value to a property on the new object', function() {
            // console.log(mob1(f1(2)));
            expect(mob1(f1(2)).f1).toBeFunction();
        });

    });
});