fdescribe('baseMixin', function() {
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
        it('returns an object ', function() {
            expect((nMix)).toBeObject();
        });
        describe('.baseType', () => {
            it('returns the name of the class of objects allowed into the array ', function() {
                expect(nMix.baseType()).toEqual("Node");
            });
        });
        describe('type', () => {
            it('retunrs the baseType + "Array"', function() {
                expect(nMix.type()).toBe("NodeArray");
            });
        });
        describe('isValid(elem)', () => {
            it('validates an element', function() {
                expect(nMix.isValid(n0)).toBeTrue();
            });
        });
    });
});