fdescribe('typeMixin', function() {
    let typeMixin, nMix, tMix0, tMix1, composeMixin, mixtype, mycomp, altMix, comboMix, a0, aMod0, a1, instanceMethod
    beforeAll(function() {
        //console.log('\n.........typeMixin Spec.........');
        arrayOf = this.GR.Utils.arrayUtils.arrayOf;
        typeMixin = this.GR.Utils.arrayUtils.typeMixin;
        composeMixin = this.GR.Utils.arrayUtils.composeMixin;

        Node = this.GR.Node;
        nMix = typeMixin(Node);
    });
    beforeEach(function() {
        altMix = (iFunc = Array.from) => (sArr = []) => ({
            myLen: () => sArr.length,
            mySlice: () => iFunc(sArr.slice(0))
        });
        mycomp = (iFunc) => (sArr = []) => composeMixin(typeMixin(iFunc), altMix(iFunc))(sArr);
        instanceMethod = (sArr = []) => Object.assign(Array.from(sArr), mycomp(instanceMethod)(sArr));
        mixtype = instanceMethod;
        tMix0 = typeMixin(instanceMethod);
        n0 = Node('n0');
        n1 = Node('n1');
        n4 = Node('n4');
        a0 = tMix0([2, 3, 4]);
        aMod0 = a0.concat(9);
        a1 = mixtype(a0);
        myArray = nMix([n0, n1, n4]);
    });
    it('is a function', function() {
        expect(typeMixin).toBeFunction();
    });
    describe('defaults', () => {
        it('applies the typemixin to Array.of', function() {
            expect(typeMixin()([1, 2, 4])).toBeObject();
        });
    });
    describe('when given an instanceMethod', () => {
        it('returns a function ', function() {
            //console.log(mixtype(a0));
            expect(tMix0).toBeFunction();
        });
        describe('when given an array', () => {
            it('returns an object', function() {
                expect(a0).toBeObject();
            });
            describe('concat', () => {
                it('calls the instance method on array with the concatenated values', function() {
                    // aMod0.forEach(x => //console.log(x));
                    //console.log("a0 concat 9", aMod0);
                    //console.log("aMod0 copy", aMod0.mySlice());
                    expect(aMod0).toBeArray();
                });
            });
        });
    });
});