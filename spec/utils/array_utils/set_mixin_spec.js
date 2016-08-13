describe('setMixin', function() {
    let setMixin, typeMixin, composeMixin, composedInstance, basicInstance;
    let arrayOf;
    let n0, n1, n2, n3, n4;
    let nMix, sMix0, sMix1, mixtype, mycomp, altMix, comboMix, a0, aMod0, a1;
    beforeAll(function() {
        console.log('\n.........setMixin Spec.........');
        Node = this.GR.Node;
        arrayOf = this.GR.Utils.arrayUtils.arrayOf.arrayOf;
        typeMixin = this.GR.Utils.arrayUtils.typeMixin;
        setMixin = this.GR.Utils.arrayUtils.setMixin;
        composeMixin = this.GR.Utils.arrayUtils.composeMixin;
        console.log(arrayOf);

        basicInstance = (sArr = []) => Object.assign(Array.from(sArr), Array.from(sArr), setMixin(basicInstance)(sArr));
    });
    beforeEach(function() {
        // basicInstance = arrayOf(Node).instance;

        sMix0 = setMixin(basicInstance);
        n0 = Node('n0');
        n1 = Node('n1');
        n2 = Node('n2');
        n3 = Node('n3');
        n4 = Node('n4');
        a0 = sMix0([n0, n1, n4]);
        a1 = sMix0([n0, n1, n2, n3, n4]);
    });
    it('is a function', function() {
        expect(setMixin).toBeFunction();
    });
    describe('when given an basicInstance', () => {
        it('returns a function ', function() {
            // console.log(basicInstance(a0));
            expect(sMix0).toBeFunction();
        });
        describe('when given an array', () => {
            it('returns an object', function() {
                expect(a0).toBeObject();
            });
            describe('contains', () => {
                it('returns a boolean regarding the presence of an element in the array', function() {
                    expect(a0.contains(n4)).toBeTrue();
                });
            });
            describe('hasSameSize(altArray)', () => {
                it('returns a boolean regarding the equality of the array sizes', function() {
                    expect(a0.hasSameSize([1, 2, 3])).toBeTrue();
                });
            });
            describe('isSubset(altArray)', function() {
                it('returns a boolean regarding the presnece of this arrays values in another array', function() {
                    expect(a0.isSubset(a1)).toBeTrue();
                });
            });
        });
    });
});