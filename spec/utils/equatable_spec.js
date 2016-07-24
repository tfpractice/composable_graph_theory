fdescribe('equalize', () => {
    var equalize, eo0, eo1, valFunc;
    beforeEach(function() {
        equalize = this.GR.Utils.equalize;
        eo0 = {
            val: () => 0
        };
        eo1 = {
            val: () => 1
        };
        valFunc = (obj) => obj.val();
    });
    describe('#equalize(valFunc)', () => {
        let eFunc, e0Ret, e1Ret;
        beforeEach(function() {
            eFunc = equalize(valFunc);
            e0Ret = eFunc(eo0);
            e1Ret = eFunc(eo1);
            // console.log(e0Ret.isEquivalent.toString(), e1Ret.isEquivalent.toString());
        });

        describe('when given a value function', () => {
            it('returns a function second function awaiting a host object', function() {
                expect(eFunc).toBeFunction();
            });
            describe('when given a hostObject', () => {
                it('returns an object', function() {
                    expect(e0Ret).toBeObject();
                });
                it('returns a isEquivalent() function', function() {
                    expect(e0Ret.isEquivalent).toBeFunction();
                });
                describe('#isEquivalent(altObj)', () => {
                    describe('mixed into a receiving object', () => {
                        let instance0, instance1;
                        beforeEach(function() {
                            instance0 = Object.assign(eo0, eFunc(eo0))
                            instance1 = Object.assign(eo1, eFunc(eo1))
                        });
                        describe('when both host and argObj have different values', () => {
                            it('executes the original value function on the host ', function() {
                                expect(instance0.isEquivalent(instance1)).toBeFalse();
                            });
                        });
                        describe('when both host and argObj have different values', () => {
                            it('executes the original value function on the host ', function() {
                                expect(instance0.isEquivalent(instance0)).toBeTrue();
                            });
                        });

                    });


                });

            });
        });
        // describe('when given a method from another source', () => {

        // });


    });
});