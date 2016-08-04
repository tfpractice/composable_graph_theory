fdescribe('setify', function() {
    let setify, Node, btype, mySet, n0, n1;
    beforeAll(function() {
        console.log('\n.........Setify Spec.........');
        setify = this.GR.Utils.setify;
        Node = this.GR.Node;

    });
    beforeEach(function() {
        n0 = Node("n0");
        n1 = Node("n1");
        mySet = setify(Node)([n0, n1]);
    });

    it('is an instance of Array', function() {
        expect(mySet instanceof Array).toBeTrue();
    });
    describe('baseType', () => {
        it('returns the name of the baseType as a string', function() {
            expect(mySet.baseType()).toBe('Node');
        });
    });
    describe('isValid(argument)', () => {
        it('should return thrue if the arguments type() === sets baseType.toString()...', function() {
            expect(mySet.isValid(n0)).toBeTrue();
        });
    });
    describe('when given a baseType(e.g. "Node', () => {
        describe('.type', () => {
            it('returns the Type.toString()+"Array"', function() {
                console.log(Object.keys(mySet));
                // console.log(mySet.myProp())
                expect(mySet.type()).toBe("NodeArray");
            });
        });
    });

});