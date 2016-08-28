describe('setMixin', function() {
    let setMixin, Node;
    let myMutable;
    let myFactory;
    let a, b, setA, setB;
    let n0, n1, n2, n3, n4;
    beforeAll(function() {
        console.log('\n.........setMixin Spec.........');
        Node = this.GR.Node;
        setMixin = this.GR.ArrayUtils.setMixin;
        myMutable = setMixin(Node.isEquivalent);
        myFactory = (coll) => Object.assign(Array.from(coll), setMixin(
            coll));
    });
    beforeEach(function() {
        n0 = Node('n0');
        n1 = Node('n1');
        n2 = Node('n2');
        n3 = Node('n3');
        n4 = Node('n4');
        a = [n0];
        setA = myMutable(a);
        setA.push(n1);
        setA.push(n4);
        b = [n0, n1, n2, n3, n4];
        setB = myMutable(b);
    });
    it('is a function', () => {
        expect(setMixin).toBeFunction();
    });
    describe('when given an equality function', () => {
        it('returns a function with properties', () => {
            expect(setMixin(Node.isEquivalent)).toBeFunction();
        });
        it('contains all of the unary set functions', () => {
            expect(myMutable.contains).toBeFunction();
            expect(myMutable.hasSameSize).toBeFunction();
            expect(myMutable.isSubset).toBeFunction();
            expect(myMutable.isEquivalent).toBeFunction();
            expect(myMutable.findEquivalentElement).toBeFunction();
            expect(myMutable.intersects).toBeFunction();
            expect(myMutable.intersection).toBeFunction();
            expect(myMutable.hasDistinctElements).toBeFunction();
            expect(myMutable.difference).toBeFunction();
            expect(myMutable.union).toBeFunction();
            expect(myMutable.unionize).toBeFunction();
            expect(myMutable.push).toBeFunction();
        });
        it('contains all of the binary set functions', () => {
            expect(myMutable.binaryUnion).toBeFunction();
        });
        describe('binaryUnion(prev,next)', () => {
            it('reduce utility, calls union on two arrays', () => {
                let both = setA.union(b);
                let binArray = both.map(e => [e]);
                let bReduced = binArray.reduce(myMutable.binaryUnion);
                expect(bReduced.length).toBe(5);
            });
        });
        describe('when given a context[array]', () => {
            it('returns an object', () => {
                expect(myMutable(a)).toBeObject();
            });
            it('curries the set functions as methods', () => {
                expect(setA.contains).toBeFunction();
                expect(setA.hasSameSize).toBeFunction();
                expect(setA.isSubset).toBeFunction();
                expect(setA.isEquivalent).toBeFunction();
                expect(setA.findEquivalentElement).toBeFunction();
                expect(setA.intersects).toBeFunction();
                expect(setA.intersection).toBeFunction();
                expect(setA.hasDistinctElements).toBeFunction();
                expect(setA.difference).toBeFunction();
                expect(setA.union).toBeFunction();
                expect(setA.unionize).toBeFunction();
                expect(setA.push).toBeFunction();
            });
        });
    });
    describe('instance methods', () => {
        describe('contains', () => {
            it('checks for the presence of an element', () => {
                expect(setA.contains(n4)).toBeTrue();
            });
        });
        describe('hasSameSize(altArray)', () => {
            it('checks for the equality of the array sizes', () => {
                expect(setA.hasSameSize([1, 2, 3])).toBeTrue();
            });
        });
        describe('isSubset(altArray)', () => {
            it('checks for this arrays values in another array', () => {
                expect(setA.isSubset(b)).toBeTrue();
            });
        });
        describe('isEquivalent(altArray)', () => {
            it('checks for equality of the arrays', () => {
                expect(setA.isEquivalent(a)).toBeTrue();
                expect(setA.isEquivalent(b)).toBeFalse();
            });
        });
        describe('findEquivalentElement ', () => {
            it('returns an equivalent element in the array', () => {
                expect(setA.findEquivalentElement(n4)).toBe(n4);
            });
        });
        describe('intersects ', () => {
            it('checks for the presence of shared elements', () => {
                expect(setA.intersects(b)).toBeTrue();
            });
        });
        describe('hasDistinctElements ', () => {
            it('checks the current array not in the altArray', () => {
                expect(setB.hasDistinctElements(a)).toBeTrue();
                expect(setA.hasDistinctElements(b)).toBeFalse();
                expect(setA.hasDistinctElements(a)).toBeFalse();
            });
        });
    });
    describe('intersection ', () => {
        it('returns an array of the shared elements', () => {
            let shared = setA.intersection(b);
            expect(shared).toBeArray();
            expect(shared).toContain(...a);
        });
    });
    describe('spawning methods', () => {
        describe('difference ', () => {
            it('returns current array elements not in the altArray', () => {
                expect(setB.difference(a)).toBeArray();
                expect(setB.difference(a)).toContain(n2);
            });
        });
        describe('union ', () => {
            it('returns all elements in either array', () => {
                let un = setA.union(b);
                expect(un).toBeArray();
                expect(un).toContain(n2);
            });
        });
        describe('unionize ', () => {
            it('merges the two arrays', () => {
                let unz = setA.unionize(b);
                expect(unz).toBeArray();
                expect(unz).toContain(n2);
            });
        });
        describe('removeElement', () => {
            it('removes an element from the array', () => {
                setA.removeElement(n1);
                expect(a).not.toContain(n1);
            });
        });
        describe('excludeElement', () => {
            it('excludes specified element from the returned array', () => {
                expect(setA.excludeElement(n1)).not.toContain(
                    n1);
            });

        });
        describe('push ', () => {
            describe('when passed an element already present', () => {
                it('does not change the length of the array', () => {
                    let alen = a.length;
                    setA.push(n1);
                    expect(a.length).toEqual(alen);
                });
            });
            describe('when passed an element not alrady present', () => {
                it('contains the new element', () => {
                    setA.push(n2);
                    expect(setA.contains(n2)).toBeTrue();
                });
            });
        });
    });
});