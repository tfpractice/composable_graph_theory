fdescribe('Equatable', () => {
    var Equatable, eo0, eo1, valFunc;
    beforeEach(function() {
        Equatable = this.GR.Utils.Equatable;
        eo0 = {
            val: 0
        };
        eo1 = {
            val: 1
        };
        valFunc = (obj) => obj.val
    });
    describe('#equalizeFunction(host, valFunc)', () => {
        let eFunc, e0Ret, e1Ret;
        beforeEach(function() {
            eFunc = Equatable.equalizeFunction(valFunc);
            e0Ret = eFunc(eo0);
            e1Ret = eFunc(eo1);
        });

        describe('when given a value function', () => {
            it('returns a function second function awaiting a host object', function() {
                expect(eFunc).toBeFunction();
            });
            describe('when given a hostObject', () => {
                // it('returns a function second function awaiting a host object', function() {
                //     expect(eFunc).toBeFunction();
                // });
                it('returns an object', function() {
                    expect(e0Ret).toBeObject();
                });
                it('returns a isEquivalent() function', function() {
                    expect(e0Ret.isEquivalent).toBeFunction();
                });

                describe('#isEquivalent(altObj)', () => {
                    describe('when both host and argObj have different values', () => {
                        it('executes the original value function on the host ', function() {
                            expect(e0Ret.isEquivalent(eo1)).toBeFalse();
                        });
                    });
                    describe('when both host and argObj have different values', () => {
                        it('executes the original value function on the host ', function() {
                            expect(e0Ret.isEquivalent(eo0)).toBeTrue();
                        });
                    });
                    // it('executes the original value function on the host ', function() {
                    //     expect(e0Ret.isEquivalent(eo0)).toEqual(0);
                    // });
                    // it('executes the original value function on the host ', function() {
                    // expect(e0Ret.isEquivalent(eo1)).toEqual(1);
                    //  });
                });

            });
        });
        // describe('when given a method from another source', () => {

        // });


    });
});