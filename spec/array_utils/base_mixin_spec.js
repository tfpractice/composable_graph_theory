describe('baseMixin', function() {
    let baseMixin, Node, nMix;
    beforeAll(function() {
        console.log('\n.........baseMixin Spec.........');

        // baseMixin = this.GR.Utils.arrayUtils.baseMixin;
        baseMixin = this.GR.ArrayUtils.baseMixin;
        Node = this.GR.Node;
    });
    beforeEach(function() {
        nMix = baseMixin(Node);
        // console.log(nMix);
        n0 = Node('n0');
    });
    describe('when given a type', () => {
        it('returns a function with properties ', () => {
            expect((nMix)).toBeFunction();
            // console.log(nMix());
        });
        describe('.baseType', () => {
            it(
                'returns the type of objects allowed into the array ', () => {
                    expect(nMix.baseType()).toEqual("Node");
                });
        });
        describe('type', () => {
            it('retunrs the baseType + "Array"', () => {
                expect(nMix.type()).toBe("NodeArray");
            });
        });
        describe('isValid(elem)', () => {
            it('validates an element', () => {
                expect(nMix.isValid(n0)).toBeTrue();
            });
        });
    });
});