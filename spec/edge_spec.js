fdescribe('Edge', function() {
    let Node, Edge, NodeArray;
    let n00, n01, n10, n11, n20, n21;
    let e0, e1, e2;
    beforeAll(function() {
        console.log('\n.........Edge Spec.........');
        Node = this.GR.Node;
        NodeArray = this.GR.NodeArray;
        Edge = this.GR.Edge;
        // console.log(Node);
    });
    beforeEach(function() {
        [n00, n01, n10, n11, n20, n21] = ["n00", "n01", "n10", "n11", "n20", "n21"].map(Node);
        console.log(n00);
        e0 = Edge(n00, n01);
        e1 = Edge(n10, n11);
        e2 = Edge(n20, n21);
    });
    describe('nodes', () => {
        it('returns a NodeArray instance', function() {
            expect(e0.nodes()).toBeArray();
            expect(e0.nodes().contains).toBeTruthy();
        });
    });
    describe('weight()', () => {
        it('returns the vweight of the edge', function() {
            expect(e0.weight()).toBeNumber();
        });
    });
    describe('toString()', () => {
        it('returns the label prefixed by "[ Edge" ', function() {
            expect(e0.toString()).toContain('[ Edge ');
        });
    });
    describe('label', () => {
        it('returns the concatenated labels of each of the nodes', function() {
            expect(e0.label()).toBe('n00::n01');
        });
    });
    describe('hasSameName', () => {
        it('returns a boolean based on label equality', function() {
            expect(e0.hasSameName(e1)).toBeFalse();
        });
    });
    describe('hasSameNodes', () => {
        it('returns a boolean based on equality of the nodes', function() {
            expect(e0.hasSameNodes(e1)).toBeFalse();
        });
    });
    describe('containsNode', () => {
        it('returns aboolean based on presence of node in nodes', function() {
            expect(e0.containsNode(n00)).toBeTrue();
        });
    });
});