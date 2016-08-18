describe('nodify', function() {
    let nodify, nFunc, nState, myNodes;
    beforeAll(function() {
        console.log('\n.........nodify Spec.........');
        nodify = this.GR.MethodUtils.nodify;
        nFunc = (state) => state.nodes;
        nState = {
            nodes: 10
        };
        myNodes = nodify(nFunc)(nState);

    });
    describe('when given a nodes function', () => {
        it('returns a function', function() {
            expect(nodify(nFunc)).toBeFunction();
        });

        describe('when given a state obj', () => {
            it('returns an object', function() {
                expect(myNodes).toBeObject();
            });

            describe('nodes', () => {
                it('returns the wfuc called on the state', function() {
                    expect(myNodes.nodes()).toBe(10);
                });
            });
        });
    });
});