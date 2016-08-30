describe('Edge', function() {
    let Node, Edge, NodeArray;
    let n00, n01, n10, n11, n20, n21;
    let e0, e1, e2, e3;
    beforeAll(function() {
        console.log('\n.........Edge Spec.........');
        Node = this.GR.Node;
        NodeArray = this.GR.NodeArray;
        Edge = this.GR.Edge;
    });
    beforeEach(function() {
        [n00, n01, n10, n11, n20, n21] = ["n00", "n01", "n10", "n11",
            "n20", "n21"
        ].map(Node);
        e0 = Edge(n00, n01);
        e1 = Edge(n10, n11);
        e2 = Edge(n20, n21, 10);
        e3 = Edge(n00, n21);
    });
    describe('methods', () => {
        describe('nodes', () => {
            it('returns a NodeArray spawn', () => {
                expect(e0.nodes()).toBeArray();
                expect(e0.nodes().contains).toBeTruthy();
            });
        });
        describe('weight()', () => {
            it('returns the vweight of the edge', () => {
                expect(e0.weight()).toBeNumber();
            });
        });
        describe('toString()', () => {
            it('returns the label prefixed by "[ Edge" ', () => {
                expect(e0.toString()).toContain('[ Edge ');
            });
        });
        describe('label', () => {
            it(
                'returns the concatenated labels of each of the nodes', () => {
                    expect(e0.label()).toBe('n00::n01');
                });
        });
        describe('hasSameLabel', () => {
            it('returns a boolean based on label equality', () => {
                expect(e0.hasSameLabel(e1)).toBeFalse();
                expect(e0.hasSameLabel(e0)).toBeTrue();
            });
        });
        describe('hasSameNodes', () => {
            it('returns a boolean based on equality of the nodes', () => {
                expect(e0.hasSameNodes(e1)).toBeFalse();
                expect(e0.hasSameNodes(e0)).toBeTrue();
            });
        });
        describe('hasSameWeight', () => {
            it('compares the weights of each node', () => {
                expect(e0.hasSameWeight(e2)).toBeFalse();
                expect(e0.hasSameWeight(e0)).toBeTrue();
            });
        });
        describe('isEquivalent', () => {
            it(
                'returns a boolean based on the equality of the nodse', () => {
                    expect(e0.isEquivalent(e1)).toBeFalse();
                    expect(e0.isEquivalent(e0)).toBeTrue();
                });
        });
        describe('containsNode', () => {
            it(
                'returns aboolean based on presence of node in nodes', () => {
                    expect(e0.containsNode(n00)).toBeTrue();
                });
        });
        describe('getNeighbor', () => {
            it('returns the alternatice node that in the array', () => {
                expect(e0.getNeighbor(n00)).toBe(n01);
            });
        });
        describe('nabeArray', () => {
            it(
                'returns an aray of elemnets that are not the node specified', () => {
                    expect(e0.nabeArray(n00)).toBeArray();
                });
        });
    });
    describe('operators', () => {
        describe('getLabel', () => {
            it('returns the edges label', () => {
                expect(Edge.getLabel(e0)).toBe(e0.label());
            });
        });
        describe('getNodes', () => {
            it('returns the edges nodes', () => {
                expect(Edge.getNodes(e0)).toEqual(e0.nodes());
            });
        });
        describe('getWeight', () => {
            it('returns the edges weight', () => {
                expect(Edge.getWeight(e0)).toBe(e0.weight());
            });
        });
        describe('intersectsEdge', () => {
            it('checks if any of the edges share nodes', function() {
                // console.log(NodeArray.intersects.toString());
                expect(e3.intersectsEdge(e0)).toBeTrue();
                expect(e3.intersectsEdge(e1)).toBeFalse();
            });
        });
        describe('containsNode(node)', () => {
            it(
                'returns a boolean describing the presence of a node ', () => {
                    expect(Edge.containsNode(n00)(e0)).toBeTrue();
                });
        });
        describe('containsBoth', () => {
            it(
                'returns a boolean describing the presence of a node ', () => {
                    expect(Edge.containsNodes(n00, n01)(e0)).toBeTrue();
                });
        });
        describe('hasSameNodes', () => {
            it('returnsa boolean based on shared nodes', () => {
                expect(Edge.hasSameNodes(e0)(e0)).toBeTrue();
            });
        });
        describe('checkForNode', () => {
            it(
                'returns a boolean describing the presence of a node ', () => {
                    expect(Edge.checkForNode(n00)(e0)).toBeTrue();
                });
        });
        describe('evalNodes', () => {
            it('returns a boolean based on equality of the nodes', () => {
                expect(Edge.evalNodes(e0)(e1)).toBeFalse();
                expect(Edge.evalNodes(e0)(e0)).toBeTrue();
            });

        });
        describe('getNeighborArray', () => {
            it('returns the alternative node as an  array', () => {
                expect(Edge.getNeighborArray(n00)(e0)).toBeArray();
            });
        });
    });
});