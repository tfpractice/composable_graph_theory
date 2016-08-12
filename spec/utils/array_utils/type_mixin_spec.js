fdescribe('typeMixin', function() {
    let arrayOf, typeMixin, baseMixin, tMix, Node, nArray, xArray, myArray, n0, n1, n4, n6, n7, n8, n11, n16, n17, n18, largeArray, fArry;
    beforeAll(function() {
        console.log('\n.........typeMixin Spec.........');

        arrayOf = this.GR.Utils.arrayUtils.arrayOf;
        typeMixin = this.GR.Utils.arrayUtils.typeMixin;

        Node = this.GR.Node;
    });
    beforeEach(function() {
        tMix = typeMixin(Node);
        n0 = Node('n0');
        n1 = Node('n1');
        n4 = Node('n4');
        myArray = tMix([n0, n1, n4]);
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
                expect(myArray.isValid(n0)).toBeTrue();
            });
        });
    });
});