fdescribe('clear', () => {
    let clear, cFunc, cState, myElements, xElements;
    beforeAll(function() {
        console.log('\n.........clearable Spec.........');
        clear = this.GR.ArrayUtils.clear;
        myElements = [2, 3, 4, 5];
        xElements = [9, 3, 7, 5];
    });
    fit('is a function', () => {
        expect(clear).toBeFunction();
    });
    describe('when given a clFunc', () => {
        it('returns a function with a clear property', () => {
            expect(clear()).toBeFunction();
            expect(clear().clear).toBeFunction();
        });
        describe('operators', () => {
            describe('clear', () => {
                it('calls clear on the argument', () => {
                    expect(clear).toBeFunction();
                });
            });
        });
        describe('when given a collection', () => {
            it('returns an empty array', () => {
                let cleared = clear();
                expect(cleared(myElements).clear()).toBeEmptyArray();
            });
        });
    });

});