fdescribe('nodeMonoid', function() {
    let nodeMonoid, identity, s0, s1, s3;
    beforeAll(function() {
        console.log('\n.........nodeMonoid Spec.........');
        nodeMonoid = this.GR.Utils.nodeMonoid;
        identity = this.GR.Utils.identity;
    });
    beforeEach(function() {
        s0 = nodeMonoid(0, {
            name: 'n0'
        });
        s1 = nodeMonoid(1, {
            name: 'n1'
        });
    });
    it('returns an object', function() {
        expect(s0).toBeObject();
    });
    it('has a value attribute(default null)', function() {
        expect(s0.value).toBeNull();
    });
    describe('identity()', () => {
        it('returns the monoid', function() {
            expect(identity(s0)).toEqual(s0);
        });
    });
});