describe('mutableArrayOf', () => {
    let mutableArrayOf, Node;
    let setMixin;
    // let baseMixin, factoryMixin;
    let wBase, wMixins, nArray;
    let myArray, xArray, altArray;
    let n0, n1, n2, n3, n4, n5;
    beforeAll(function() {
        console.log('\n.........mutableArrayOf Spec.........');
        Node = this.GR.Node;
        mutableArrayOf = this.GR.ArrayUtils.mutableArrayOf;
        setMixin = this.GR.ArrayUtils.setMixin;
        // baseMixin = this.GR.ArrayUtils.baseMixin;
        // factoryMixin = this.GR.ArrayUtils.factoryMixin;
        wBase = mutableArrayOf(Node);
        xBase = wBase();
        // let xMix = wBase(setMixin(Node.isEquivalent));
        // console.log("xMix", xMix);
        // console.log("****************");
        wMixins = wBase(setMixin(Node.isEquivalent));
        nArray = wMixins;
    });
    beforeEach(function() {
        let empty6 = Array(6);
        let bArray = Array.from(empty6, (el, id) => Node(`node_${id}`));
        [n0, n1, n2, n3, n4, n5] = bArray;
        myArray = nArray.spawn(bArray);
        altArray = myArray.slice(2);
    });
    it('is a function', function() {
        expect(mutableArrayOf).toBeFunction();
    });
    describe('when given a BaseClass', () => {
        it('returns a function', () => {
            expect(mutableArrayOf(Node)).toBeFunction();
        });
        describe('when given mixins', () => {
            it('returns an object', () => {
                expect(nArray).toBeObject();
            });
            it('contains an spawn function', () => {
                expect(nArray.spawn).toBeFunction();
            });

        });
    });
    describe('spawn', () => {
        it('retuns an array', () => {
            expect(myArray).toBeArray();
        });
        it('applies the baseMixin to the array', function() {
            expect(myArray.type).toBeFunction();
            expect(myArray.baseType).toBeFunction();
            expect(myArray.isValid).toBeFunction();
        });
        it('applies the mixins to the array', function() {
            expect(myArray.isEquivalent).toBeFunction();
            expect(myArray.contains).toBeFunction();
            expect(myArray.intersection).toBeFunction();
            expect(myArray.union).toBeFunction();
            expect(myArray.difference).toBeFunction();
            expect(myArray.isSubset).toBeFunction();
        });
        describe('filter', () => {
            let eFiltArr, oFiltArr, catArr, splArr, slArr;
            beforeEach(function() {
                eFiltArr = myArray.filter((n, i) => i % 2 == 0);
                oFiltArr = myArray.filter((n, i) => i % 2 == 1);
                // catArr = efl
            });
            it('spawns a new array and applies the mixins',
                function() {
                    // console.log(myArray.filter.toString());
                    // console.log(eFiltArr);
                    expect(eFiltArr).toBeArray();
                    expect(eFiltArr.type).toBeFunction();
                    expect(eFiltArr.baseType).toBeFunction();
                    expect(eFiltArr.isValid).toBeFunction();

                });
        });
        // it('applies the factoryMixin to the array', function() {
        //     expect(myArray.type).toBeFunction();
        //     expect(myArray.baseType).toBeFunction();
        //     expect(myArray.isValid).toBeFunction();
        // });
        // describe('when ', () => {

        // });
        // it('contains all the baseMixin methods', () => {
        // expect(myArray.type).toBeFunction();
        // expect(myArray.isValid).toBeFunction();
        // expect(myArray.baseType).toBeFunction();
        // });
        // });
    });
});