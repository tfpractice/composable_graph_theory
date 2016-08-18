fdescribe('setMixin', function() {
    let setMixin, typeMixin, composeMixin, composedInstance, basicInstance;
    let arrayOf, nonenum, constructor;
    let a, ca1;
    let n0, n1, n2, n3, n4;
    let nMix, sMix0, sMix1, mixtype, mycomp, composed, compKeys, altMix, comboMix, a0, aMod0, a1;
    beforeAll(function() {
        console.log('\n.........setMixin Spec.........');
        Node = this.GR.Node;
        nonenum = this.GR.Utils.nonEnum;
        arrayOf = this.GR.Utils.arrayUtils.arrayOf.arrayOf;
        typeMixin = this.GR.Utils.arrayUtils.typeMixin;
        setMixin = this.GR.Utils.arrayUtils.setMixin;
        setMixin = this.GR.ArrayUtils.setMixin;
        composeMixin = this.GR.Utils.arrayUtils.composeMixin;
        compKeys = (iFunc) => (sArr = []) => Object.keys(setMixin(iFunc)(sArr));
        instanceMethod = (sArr = []) => nonenum(constructor(sArr))(...compKeys(constructor)(sArr))
        constructor = (sArr = []) => Object.assign(Array.from(sArr), setMixin(instanceMethod)(sArr));
    });
    beforeEach(function() {
        sMix0 = setMixin(instanceMethod);
        n0 = Node('n0');
        n1 = Node('n1');
        n2 = Node('n2');
        n3 = Node('n3');
        n4 = Node('n4');
        a = [n0, n1, n4];
        mxa = sMix0(a);
        a0 = instanceMethod(a);
        a1 = [n0, n1, n2, n3, n4];
        ca1 = instanceMethod(a1);
    });
    it('is a function', function() {
        expect(setMixin).toBeFunction();
    });
    describe('when given an instance function', () => {
        it('returns a function ', function() {
            expect(sMix0).toBeFunction();
        });
        describe('when given an array', () => {
            it('returns an object', function() {
                expect(sMix0(a)).toBeObject();
            });
            describe('contains', () => {
                it('returns a boolean regarding the presence of an element in the array', function() {
                    expect(mxa.contains(n4)).toBeTrue();
                });
            });
            describe('hasSameSize(altArray)', () => {
                it('returns a boolean regarding the equality of the array sizes', function() {
                    expect(mxa.hasSameSize([1, 2, 3])).toBeTrue();
                });
            });
            describe('isSubset(altArray)', function() {
                it('returns a boolean regarding the presnece of this arrays values in another array', function() {
                    expect(mxa.isSubset(a1)).toBeTrue();
                });
            });
            describe('isEquivalent(altArray', () => {
                it('returns a boolean based on eqaulity of the arrays', function() {
                    expect(a0.isEquivalent(a)).toBeTruthy();
                });
            });
            describe('findEquivalentElement ', () => {
                it('returns an equivalent element in the array', function() {
                    expect(a0.findEquivalentElement(n4)).toBe(n4);
                });
            });
            describe('intersects ', () => {
                it('returns a boolean based on the presence of shared elements', function() {
                    expect(a0.intersects(a1)).toBeTrue();
                });
            });
            describe('intersection ', () => {
                it('returns an array of the shared elements', function() {
                    let shared = a0.intersection(ca1)
                    expect(shared).toBeArray();
                    expect(shared).toContain(...a0);
                });
            });
            describe('hasDistinctElements ', () => {
                it('returns a booolean based on the absence of elemnets in the current array in the altArray', function() {
                    expect(ca1.hasDistinctElements(a0)).toBeTruthy();
                });
            });
            describe('difference ', () => {
                it('returns an array of elemnets in the current array absent in the altArray', function() {
                    expect(ca1.difference(a0)).toBeArray();
                    expect(ca1.difference(a0)).toContain(n2);
                });
            });
            describe('union ', () => {
                it('returns all elements in either array', function() {
                    let un = a0.union(ca1);
                    // console.log(un);
                    expect(un).toBeArray();
                    expect(un).toContain(n2);
                });
            });
            describe('unionize ', () => {
                it('merges the two arrays', function() {
                    // console.log(a0);
                    let unz = a0.unionize(ca1);
                    // console.log(unz.map(e => e.label()));
                    expect(unz).toBeArray();
                    expect(unz).toContain(n2);
                });
            });
            describe('push ', () => {
                describe('when passed an element alrady present', () => {
                    it('does not change the length of the array', function() {
                        let alen = a0.length;
                        a0 = a0.push(n1);
                        expect(a0.length).toEqual(alen);
                    });
                });
                describe('when passed an element not alrady present', () => {
                    it('increments thelength of the array', function() {
                        let alen = a0.length;
                        a0 = a0.push(n2);
                        expect(a0.length).toEqual(alen + 1);
                    });
                });
            });

        });
        // describe('reassign', () => {
        // it('changes the values', function() {
        // let r0 = a0.push(n2);
        // console.log(a0.length);
        // a0 = a0.reassign(r0);
        // console.log(a0.length);
        // expect(a0).toContain(n2);
        // });
        // });
    });

});