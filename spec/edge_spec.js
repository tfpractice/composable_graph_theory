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
        // console.log(n00);
        e0 = Edge(n00, n01);
        e1 = Edge(n10, n11);
        e2 = Edge(n20, n21, 10);
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
            expect(e0.hasSameName(e0)).toBeTrue();

        });
    });
    describe('hasSameNodes', () => {
        it('returns a boolean based on equality of the nodes', function() {
            expect(e0.hasSameNodes(e1)).toBeFalse();
            expect(e0.hasSameNodes(e0)).toBeTrue();
        });
    });
    describe('hasSameWeight', () => {
        it('compares the weights of each node', function() {
            expect(e0.hasSameWeight(e2)).toBeFalse();
            expect(e0.hasSameWeight(e0)).toBeTrue();

        });

    });
    describe('isEquivalent', () => {
        it('returns a boolean based on the equality of the nodse', function() {
            expect(e0.isEquivalent(e1)).toBeFalse();
            expect(e0.isEquivalent(e0)).toBeTrue();
        });
    });
    describe('containsNode', () => {
        it('returns aboolean based on presence of node in nodes', function() {
            expect(e0.containsNode(n00)).toBeTrue();
        });
    });
    describe('getNeighbor', () => {
        it('returns the alternatice node that in the array', function() {
            expect(e0.getNeighbor(n00)).toBe(n01);
        });
    });
    describe('nabeArray', () => {
        it('returns an aray of elemnets that are not the node specified', function() {
            expect(e0.nabeArray(n00)).toBeArray();
        });
    });
});