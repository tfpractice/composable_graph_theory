fdescribe('typeMixin', function() {
    let typeMixin;
    let isNegative, isEven;
    let getFirst, getLast, getLength, copy;
    let mytypeMaker, dtypeMaker, rdcat;
    let queryA, contextA, xContext;
    beforeAll(function() {
        console.log('\n.........typeMixin Spec.........');
        typeMixin = this.GR.ArrayUtils.typeMixin;
        isNegative = (element) => "special";
        isEven = (element) => element % 2 === 0;
        mytypeMaker = typeMixin(isNegative);
        // mytypeMaker = typeMixin(isEven);
        // dtypeMaker = typeMixin(isEven);
    });
    beforeEach(function() {
        queryA = [-1, -2, -3];
        contextA = [6, 4, 10];
        xContext = [9, 7];
    });
    describe('typeMixin', () => {
        describe('when given a typeMaker function', () => {
            it('returns a function with properties', function() {
                expect(mytypeMaker).toBeFunction();
            });
            it('has the array spawning functions as properties', () => {
                expect(mytypeMaker.type).toBeFunction();
            });
            describe('when given a context', () => {
                it('returns an object', () => {
                    expect(mytypeMaker(contextA)).toBeObject();
                });
                it('returns a booleans isValid', () => {
                    expect(mytypeMaker(contextA).type(2)).toBe(
                        "special");
                });
            });
        });
    });
});