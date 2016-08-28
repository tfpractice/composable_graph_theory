describe('mutableArrayOf', () => {
    let mutableArrayOf, myMutable, Node;
    let setMixin, eqFun;
    let validatorMixin, valFun;
    let tMixin, typeFun;
    let wBase, wMixins, nArray;
    let myArray, xArray, bArray, altArray;
    let n0, n1, n2, n3, n4, n5;
    beforeAll(function() {
        console.log('\n.........mutableArrayOf Spec.........');
        Node = this.GR.Node;
        mutableArrayOf = this.GR.ArrayUtils.mutableArrayOf;
        setMixin = this.GR.ArrayUtils.mutableSet;
        validatorMixin = this.GR.ArrayUtils.validatorMixin;
        tMixin = this.GR.ArrayUtils.tMixin;
        typeFun = (elem) => "specialArray"
        valFun = (elem) => elem.type() === "Node"
        eqFun = Node.isEquivalent
        // wBase = mutableArrayOf(Node);
        // xBase = wBase();
        nArray = mutableArrayOf(tMixin(typeFun), validatorMixin(
            valFun), setMixin(eqFun));
        // console.log("wMixins", wMixins);
    });
    beforeEach(function() {
        let empty6 = Array(6);
        bArray = Array.from(empty6, (el, id) => Node(`node_${id}`));
        // console.log(bArray);
        [n0, n1, n2, n3, n4, n5] = bArray;
        myArray = nArray.spawn(bArray);
        altArray = myArray.slice(2);
    });
    it('is a function', function() {
        expect(mutableArrayOf).toBeFunction();
    });

    describe('when given mixins', () => {
        it('returns an object', () => {
            expect(nArray).toBeObject();
        });
        it('contains a spawn function', () => {
            expect(nArray.spawn).toBeFunction();
        });
        it('contains all the operators for the new array', () => {
            expect(myArray.type).toBeFunction();
            expect(myArray.isValid).toBeFunction();
            expect(myArray.isEquivalent).toBeFunction();
            expect(myArray.contains).toBeFunction();
            expect(myArray.intersection).toBeFunction();
            expect(myArray.union).toBeFunction();
            expect(myArray.difference).toBeFunction();
            expect(myArray.isSubset).toBeFunction();
        });
    });
    // });
    describe('spawn', () => {
        it('retuns an array', () => {
            expect(myArray).toBeArray();
        });

        it('applies the mixins to the array', () => {
            // myArray.isEquivalent(Array.from(myArray));
            expect(myArray.type()).toBe("specialArray");
            expect(myArray.isValid(Node("n11"))).toBeTrue();
            expect(myArray.isEquivalent(bArray)).toBeTrue();
            expect(myArray.contains(n0)).toBeTrue();
            // expect(myArray.intersection()).toBeFunction();
            // expect(myArray.union()).toBeFunction();
            // expect(myArray.difference()).toBeFunction();
            // expect(myArray.isSubset()).toBeFunction();
        });

    });
    describe('mutations', () => {
        describe('filter', () => {
            let eFiltArr, oFiltArr, catArr, splArr, slArr;
            beforeEach(function() {
                eFiltArr = myArray.filter((n, i) => i % 2 == 0);
                oFiltArr = myArray.filter((n, i) => i % 2 == 1);
            });
            it('spawns a new array and applies the mixins', () => {
                expect(eFiltArr).toBeArray();
                expect(eFiltArr.type).toBeFunction();
                expect(eFiltArr.isValid).toBeFunction();
            });

        });
        describe('push', function() {
            describe('when passed an element already present', () => {
                it('does not change the length of the array', () => {
                    let alen = myArray.length;
                    myArray.push(n1);
                    expect(myArray.length).toEqual(alen);
                });
            });
            describe('when passed an element not alrady present', () => {
                it('contains the new element', () => {
                    let n22 = Node("n22");
                    myArray.push(n22);
                    expect(myArray.contains(n22)).toBeTrue();
                });
            });
        });
    });

});