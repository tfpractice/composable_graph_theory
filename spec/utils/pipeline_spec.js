fdescribe('pipeline', () => {
    let pipeline, actions, liftAnswer, f1, f2, f3, d_func;
    beforeAll(function() {
        console.log('\n.........pipeline Spec.........');
        pipeline = this.GR.Utils.pipeline;
    });
    beforeEach(function() {
        f1 = (n) => 2 * n;
        f2 = (n) => n + 3;
        f3 = (n) => n * 3;
        d_func = (values, state) => ({
            values,
            state
        });
    });
    describe('when given an seed data and an array of actions', () => {
        let seedFunc;
        beforeEach(function() {
            seedFunc = pipeline(2, f1, f2, f3)
        });
        it('returns the result of iterated functions on the seed data', function() {
            expect(seedFunc).toBeNumber();
        });

    });
});