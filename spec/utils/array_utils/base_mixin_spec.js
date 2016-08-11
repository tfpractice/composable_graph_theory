fdescribe('baseMixin', function() {
    let arrayOf, baseMixin, nMix, Node, nArray, xArray, myArray, n0, n1, n4, n6, n7, n8, n11, n16, n17, n18, largeArray, fArry;
    beforeAll(function() {
        arrayOf = this.GR.Utils.arrayUtils.arrayOf;
        baseMixin = this.GR.Utils.arrayUtils.baseMixin;

        Node = this.GR.Node;
    });
    beforeEach(function() {
        nMix = baseMixin(Node);
        n0 = Node('n0');
        n1 = Node('n1');
        n4 = Node('n4');
        myArray = nMix([n0, n1, n4]);
    });

    describe('when given an array', () => {
        it('returns a object ', function() {
            expect((myArray)).toBeObject();
        });
        describe('.baseType', () => {
            it('returns the name of the class of objects allowed into the array ', function() {
                expect(myArray.baseType()).toEqual("Node");
            });
        });
        describe('type', () => {
            it('retunrs the baseType + "Array"', function() {
                expect(myArray.type()).toBe("NodeArray");
            });
        });
        describe('isValid(elem)', () => {
            it('validates an element', function() {
                // expect(myArray.isValid(n0)).toBeTrue();
            });
        });
    });
});