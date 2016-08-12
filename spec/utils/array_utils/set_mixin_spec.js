fdescribe('setMixin', function() {
    let setMixin, typeMixin, composeMixin, composedInstance, basicInstance, nMix, sMix0, sMix1, mixtype, mycomp, altMix, comboMix, a0, aMod0, a1;
    beforeAll(function() {
        console.log('\n.........setMixin Spec.........');
        // arrayOf = this.GR.Utils.arrayUtils.arrayOf;
        typeMixin = this.GR.Utils.arrayUtils.typeMixin;
        setMixin = this.GR.Utils.arrayUtils.setMixin;
        composeMixin = this.GR.Utils.arrayUtils.composeMixin;

        basicInstance = (sArr = []) => Object.assign(Array.from(sArr), setMixin(basicInstance)(sArr));
        Node = this.GR.Node;
        // nMix = typeMixin(Node);
    });
    beforeEach(function() {
        // altMix = (iFunc = Array.from) => (sArr = []) => ({
        //     myLen: () => sArr.length,
        //     mySlice: () => iFunc(sArr.slice(0))
        // });.
        // mycomp = (iFunc) => (sArr = []) => composeMixin(typeMixin(iFunc), altMix(iFunc))(sArr);
        // basicInstance = (sArr = []) => Object.assign(Array.from(sArr), mycomp(basicInstance)(sArr));
        // mixtype = basicInstance;
        sMix0 = setMixin(basicInstance);
        n0 = Node('n0');
        n1 = Node('n1');
        n4 = Node('n4');
        a0 = sMix0([n0, n1, n4]);
        // aMod0 = a0.concat(9);
        // a1 = mixtype(a0);
        // myArray = nMix([n0, n1, n4]);
    });
    it('is a function', function() {
        expect(setMixin).toBeFunction();
    });
    // describe('defaults', () => {
    //     it('applies the typemixin to Array.of', function() {
    //         expect(typeMixin()([1, 2, 4])).toBeObject();
    //     });
    // });
    describe('when given an basicInstance', () => {
        it('returns a function ', function() {
            console.log(basicInstance(a0));
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
        });
    });
});