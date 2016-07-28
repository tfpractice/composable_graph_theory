describe('setify', function() {
    let setify, Node, btype, mySet;
    beforeAll(function() {
        console.log('\n.........Setify Spec.........');
        setify = this.GR.Utils.setify;
        Node = this.GR.Node;

    });
    beforeEach(function() {
        mySet = setify(Node);
    });

    it('is an instance of Array', function() {
        expect(mySet instanceof Array).toBeTrue();
    });
    describe('baseType', () => {
        it('returns the name of the baseType as a string', function() {
            expect(mySet.baseType()).toBe('Node');
        });
    });
});