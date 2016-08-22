describe('nativeProxy', function() {
    let nativeProxy, pushProxy, spliceProxy;
    let queryA, contextA, xContext;
    beforeAll(function() {
        console.log('\n.........nativeProxy Spec.........');
        nativeProxy = this.GR.ArrayUtils.nativeProxy;
        pushProxy = nativeProxy.pushProxy;
        spliceProxy = nativeProxy.spliceProxy;
        queryA = [1, 2, 3];
        contextA = [3, 4, 5];
        xContext = [9, 7];
    });
    beforeEach(function() {
        queryA = [1, 2, 3];
        contextA = [3, 4, 5];
        xContext = [9, 7];
    });
    describe('pushProxy', () => {
        describe('when given a context', () => {
            it('returns a function', () => {
                expect(pushProxy(contextA)).toBeFunction();
            });
        });
        describe('when given arguments', () => {
            it(
                'calls array.prototype.pushProxy on the context with the args', () => {
                    let oldLength = contextA.length;
                    pushProxy(contextA)(8);
                    expect(contextA.length).toBe(oldLength + 1);
                    expect((pushProxy(contextA)(8))).toBeArray();
                });
        });
    });
    describe('spliceProxy', () => {
        describe('when given a context', () => {
            it('returns a function', () => {
                expect(spliceProxy(contextA)).toBeFunction();
            });
        });
        describe('when given arguments', () => {
            it(
                'calls array.prototype.splice on the context with the args', () => {
                    let splArr = spliceProxy(contextA)(1);
                    expect(splArr).toBeArray();
                    expect(splArr).not.toContain(3);
                });
        });
    });
});