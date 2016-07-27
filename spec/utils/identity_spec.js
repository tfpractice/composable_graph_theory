fdescribe('identity', function() {
    let identity, myObj;
    beforeAll(function() {
        console.log('\n.........identity Spec.........');
        identity = this.GR.Utils.identity;
    });
    beforeEach(function() {
        myObj = {
            label: "n0",
            data: 0
        };
    });
    it('returns the object itself', function() {
        expect(identity(myObj)).toEqual(myObj);
    });
});