describe('curry_equality', () => {
    let curry_equality, labelize, hostAccess, accessor_func, lab_func;
    let state0, state1, state2, state3, s_obj0, s_obj1, s_obj2, s_obj3;
    beforeAll(function() {
        console.log('\n.........Curry_equality Spec.........');
        curry_equality = this.GR.Utils.curry_equality;
        labelize = this.GR.MethodUtils.labelize;
    });
    beforeEach(function() {
        lab_func = labelize((state) => state.val);
        state0 = {
            val: "state0"
        };
        state1 = {
            val: "state1"
        };
        state2 = {
            val: "state0"
        };
        state3 = {
            val: "state3"
        };
        s_obj0 = Object.assign({}, lab_func(state0));
        s_obj1 = Object.assign({}, lab_func(state1));
        s_obj2 = Object.assign({}, lab_func(state2));
        s_obj3 = Object.assign({}, lab_func(state3));
        accessor_func = (obj) => obj.label();
        hostAccess = (obj) => obj.label();
    });
    describe('#curry_equality(accessor_func)', () => {
        let equality_func, compare_to_state0, compare_to_state1;
        beforeEach(function() {
            equality_func = curry_equality(accessor_func);
            compare_to_state0 = equality_func.compareToHost(s_obj0);
            compare_to_state1 = equality_func.compareToHost(s_obj1);
        });
        describe('when given an accessor function', () => {
            it('returns an object with a compareToHost function ', function() {
                expect(equality_func).toBeObject();
                expect(equality_func.compareToHost).toBeFunction();
            });
            describe('.compareToHost(hostObj)', () => {
                describe('when given a host object', () => {
                    it('returns a second object containing an isEquivalent function', function() {
                        expect(compare_to_state0).toBeObject();
                        expect(compare_to_state1).toBeObject();
                        expect(compare_to_state0.isEquivalent).toBeFunction();
                        expect(compare_to_state1.isEquivalent).toBeFunction();
                    });
                    describe('.isEquivalent', () => {
                        describe('when given a matching argument object', () => {
                            it('returns true', function() {
                                expect(compare_to_state0.isEquivalent(s_obj0)).toBeTrue();
                                expect(compare_to_state1.isEquivalent(s_obj1)).toBeTrue();
                            });
                        });
                        describe('when given a non-matching argument object', () => {
                            it('returns true', function() {
                                expect(compare_to_state1.isEquivalent(s_obj0)).toBeFalse();
                                expect(compare_to_state0.isEquivalent(s_obj1)).toBeFalse();
                            });
                        });
                    });
                });
                describe('when tested against multiple arguments', () => {
                    let cachedComparitor0, consumedComparitor02, consumedComparitor03;
                    beforeAll(function() {
                        cachedComparitor0 = equality_func.compareToHost(s_obj0).isEquivalent;
                        consumedComparitor02 = cachedComparitor0(s_obj2);
                        consumedComparitor03 = cachedComparitor0(s_obj3);
                    });
                    describe('.isEquivalent ', () => {
                        it('caches the compareToHost', function() {
                            expect(cachedComparitor0).toBeFunction();
                        });
                        it('can be called against multiple receivers', function() {
                            // console.log(cachedComparitor0);
                            cachedComparitor0(s_obj2);
                            // console.log(cachedComparitor0);
                        });
                    });
                });
            });
        });
        describe('when given a host accessor and an argAccessor function', () => {
            let host0, host1, arg0, arg1, hax, rgax, v2v, h0comp;
            beforeEach(function() {
                host0 = {
                    val: 0
                };
                host1 = {
                    val: 1
                };
                arg0 = {
                    argVal: 0
                };
                arg1 = {
                    argVal: 1
                };
                hax = (host) => host.val;
                rgax = (arg) => arg.argVal;
                v2v = curry_equality(rgax, hax);
                h0comp = v2v.compareToHost(host0);

            });
            describe('curry_equality', () => {
                it('returns an object containing a compareToHost function', function() {
                    expect(v2v.compareToHost).toBeTruthy();
                });
                describe('when given a host object', () => {
                    it('returns an isEquivalent function', function() {
                        expect(h0comp.isEquivalent).toBeTruthy();
                    });
                    describe('when given an argObj', () => {
                        it('comapares the hostAccessor called on the host with the argAccessor called on the arg', function() {
                            expect(h0comp.isEquivalent(arg0)).toBeTrue();
                            expect(h0comp.isEquivalent(arg1)).toBeFalse();
                        });
                    });
                });
            });
        });
    });
});
// 
// 
// 
// 
// 
// 
//