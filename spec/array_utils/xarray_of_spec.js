xdescribe('arrayOf', () => {
    let arrayOf, Node, baseMixin, typeMixin, setMixin;
    let wBase, wMixins, nArray;
    let myArray, xArray, altArray;
    let n0, n1, n2, n3, n4, n5;
    beforeAll(function() {
        console.log('\n.........arrayOf Spec.........');

        Node = this.GR.Node;
        arrayOf = this.GR.ArrayUtils.arrayOf;
        baseMixin = this.GR.ArrayUtils.baseMixin;
        typeMixin = this.GR.ArrayUtils.typeMixin;
        setMixin = this.GR.ArrayUtils.setMixin;

    });
    beforeEach(function() {
        let empty6 = Array(6);
        let bArray = Array.from(empty6, (el, id) => Node(`node_${id}`));
        [n0, n1, n2, n3, n4, n5] = bArray;
        wBase = arrayOf(Node);
        wMixins = wBase(typeMixin, setMixin);
        nArray = wMixins;
        myArray = nArray.instance(bArray);
        altArray = myArray.slice(2);
    });
    it('is a funtion', function() {
        expect(arrayOf).toBeFunction();
    });
    describe('when given a baseType', () => {
        it('returns a function awaiting mixins', function() {
            expect(wBase).toBeFunction();
        });
        describe('when given a set of mixins', () => {
            it('returns an object', function() {
                expect(wMixins).toBeObject();
            });
            describe('instance', () => {
                it('returns an array with mixed in methods',
                    function() {
                        expect(nArray.instance([])).toBeArray();
                    });
                describe('contains ', () => {
                    it('should behave...', function() {
                        expect(myArray.contains(n1)).toBeTrue();

                    });
                });
                describe('intersects ', () => {
                    it(
                        'returns a boolean based on the presence of shared elements',
                        function() {
                            expect(myArray.intersects(
                                altArray)).toBeTrue();
                        });
                });
                describe('intersection ', () => {
                    it(
                        'returns an array of the shared elements',
                        function() {
                            let shared = myArray.intersection(
                                altArray)
                            expect(shared).toBeArray();
                            expect(shared.isSubset(myArray))
                                .toBeTrue();
                        });
                });

                describe('difference ', () => {
                    it(
                        'returns an array of elemnets in the current array absent in the altArray',
                        function() {
                            expect(altArray.difference(
                                myArray)).toBeArray();
                            expect(myArray.difference(
                                altArray)).toContain(n0);
                        });
                    it(
                        'returns an array with the same methods as the original',
                        function() {
                            expect(myArray.difference(
                                altArray).contains(n0)).toBeTrue();
                        });
                });
                describe('copy', function() {
                    it(
                        'calls the instanceFunc on the return val from slice',
                        function() {
                            expect(myArray.copy()).toBeArray();
                        });
                });
                describe('removeElement', function() {
                    it(
                        'calls the instanceFunc on the return val from slice',
                        function() {
                            expect(myArray.removeElement(n1))
                                .toBeArray();
                        });
                });
            });
        });
    });

});