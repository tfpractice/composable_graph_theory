fdescribe('typeMixin', function() {
    let typeMixin, nMix, tMix0, tMix1, composeMixin, mixtype, mycomp, altMix, comboMix, a, a0, a2, aMod0, a1, instanceMethod
    let setMixin, nonenum, constructor;
    beforeAll(function() {
        console.log('\n.........typeMixin Spec.........');

        arrayOf = this.GR.Utils.arrayUtils.arrayOf;
        typeMixin = this.GR.Utils.arrayUtils.typeMixin;
        setMixin = this.GR.Utils.arrayUtils.setMixin;
        composeMixin = this.GR.Utils.arrayUtils.composeMixin;

        Node = this.GR.Node;
        nonenum = this.GR.Utils.nonEnum;

        nMix = typeMixin(Node);
    });
    beforeEach(function() {
        altMix = (iFunc = Array.from) => (sArr = []) => ({
            myLen: () => sArr.length,
            mySlice: () => iFunc(sArr.slice(0))
        });
        mycomp = (iFunc) => (sArr = []) => composeMixin(typeMixin(iFunc), setMixin(iFunc), altMix(iFunc))(sArr);
        let myKeys = (iFunc) => (sArr = []) => Object.keys(mycomp(iFunc)(sArr));
        instanceMethod = (sArr = []) => nonenum(constructor(sArr))(...myKeys(constructor)(sArr))
        constructor = (sArr = []) => Object.assign(Array.from(sArr), mycomp(instanceMethod)(sArr));
        // mixtype = instanceMethod;
        tMix0 = typeMixin(instanceMethod);
        n0 = Node('n0');
        n1 = Node('n1');
        n4 = Node('n4');

        a1 = tMix0(a0);
        a = [n0, n1, n4];
        // a0 = tMix0([n0, n1, n4]);

        a0 = instanceMethod(a);
        aMod0 = a0.concat(9);


        a2 = instanceMethod(a);
        let compa0 = mycomp(instanceMethod)(a0);
        let a3 = Object.assign(Array.from(a0), compa0);
        let a4 = instanceMethod(a0);
        // console.log(mycomp(instanceMethod)(a0))
        // console.log("a2", a2);

        // console.log("compa0", compa0);
        // console.log("a3 length", a3.length);
        // console.log("a3 props", Object.getOwnPropertyNames(a3));
        // console.log("a4 length", a4.length);

        // console.log("a4 props", Object.getOwnPropertyNames(a4));

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
            expect(tMix0).toBeFunction();
        });
        describe('when given an array', () => {
            it('returns an object', function() {
                // expect(a0).toBeObject();
                expect(a0).toBeArray();
            });
            describe('concat', () => {
                it('calls the instance method on array with the concatenated values', function() {
                    expect(aMod0).toBeArray();
                });
            });
            describe('slice', function() {
                it('calls the instanceFunc on the return val from slice', function() {
                    expect(a0.slice(0)).toBeArray();
                });
            });
            describe('splice', function() {
                it('calls the instanceFunc on the return val from slice', function() {
                    expect(a0.splice(0)).toBeArray();
                });
            });
            describe('reassign', function() {
                it('calls the instanceFunc on the return val from slice', function() {
                    expect(a0.reassign()).toBeArray();
                });
            });
            describe('isEmpty', function() {
                it('calls the instanceFunc on the return val from slice', function() {
                    expect(a0.isEmpty()).toBeFalse();
                });
            });
            describe('filter', function() {
                it('calls the instanceFunc on the return val from slice', function() {
                    expect(a0.filter(e => e.label() == "n1")).toBeArray();
                });
            });
            describe('clear', function() {
                it('calls the instanceFunc on the return val from slice', function() {
                    expect(a0.clear()).toBeArray();
                });
            });
            describe('copy', function() {
                it('calls the instanceFunc on the return val from slice', function() {
                    expect(a0.copy()).toBeArray();
                });
            });
            describe('removeElement', function() {
                it('calls the instanceFunc on the return val from slice', function() {
                    expect(a0.removeElement(n1)).toBeArray();
                });
            });
        });
        describe('when mixed with setMixin', () => {
            describe('contains', () => {
                it('returns a boolean regarding the presence of an element in the array', function() {
                    // console.log(a0);
                    expect(a0.contains(n4)).toBeTrue();
                });
            });
        });
    });
});