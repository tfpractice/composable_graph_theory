fdescribe('native', function() {
    let native, pushProxy, pop;
    let queryA, contextA, xContext;
    beforeAll(function() {
        console.log('\n.........native Spec.........');
        native = this.GR.ArrayUtils.native;
        pushProxy = native.pushProxy;
        queryA = [1, 2, 3];
        contextA = [3, 4, 5];
        xContext = [9, 7];
    });
    describe('pushProxy', () => {
        describe('when given a context', () => {
            it('returns a function', function() {
                expect(pushProxy(contextA)).toBeFunction();
            });
        });
        describe('when given arguments', () => {
            it(
                'calls array.prototype.pushProxy on the context\
                 with the args',
                function() {
                    let oldLength = contextA.length;
                    console.log(contextA);
                    pushProxy(contextA)(8);
                    console.log(contextA);
                    expect(contextA.length).toBe(oldLength + 1);
                    expect(
                        pushProxy(contextA)(8)).toBeArray();
                });
        });
    });
    // describe('when given a query array', () => {
    //     it('returns a function', function() {
    //         expect(native(queryA)).toBeFunction();
    //     });
    //     describe('when given a context Array', () => {
    //         it('compares the lengths', function() {
    //             expect(native(queryA)(contextA)).toBeTrue();
    //             expect(native(queryA)(xContext)).toBeFalse();
    //         });
    //     });
    // });
});