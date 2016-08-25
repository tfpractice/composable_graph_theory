describe('mutableSet', function() {
    let mutableSet, Node;
    let myMutable;
    let myFactory;
    let a, b, setA, setB;
    let n0, n1, n2, n3, n4;
    beforeAll(function() {
        console.log('\n.........mutableSet Spec.........');
        Node = this.GR.Node;
        mutableSet = this.GR.ArrayUtils.mutableSet;
        myMutable = mutableSet(Node.isEquivalent);
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
        expect(myMutable).toBeFunction();
    });
    describe('when given an equality function', () => {
        it('returns a function ', () => {
            expect(mutableSet(Node.isEquivalent)).toBeFunction();
        });
        describe('when given an array', () => {
            it('returns an object', () => {
                expect(myMutable(a)).toBeObject();
            });
        });
    });
    describe('instance methods', () => {
        describe('contains', () => {
            it(
                'checks for the presence of an element in the array', () => {
                    expect(setA.contains(n4)).toBeTrue();
                });
        });
        describe('hasSameSize(altArray)', () => {
            it(
                'checks for the equality of the array sizes', () => {
                    expect(setA.hasSameSize([1, 2, 3])).toBeTrue();
                });
        });
        describe('isSubset(altArray)', () => {
            it(
                'checks for the presence of this arrays values in another array', () => {
                    expect(setA.isSubset(b)).toBeTrue();
                });
        });
        describe('isEquivalent(altArray', () => {
            it(
                'checks for eqaulity of the arrays', () => {
                    expect(setA.isEquivalent(a)).toBeTrue();
                    expect(setA.isEquivalent(b)).toBeFalse();
                });
        });
        describe('findEquivalentElement ', () => {
            it(
                'returns an equivalent element in the array', () => {
                    expect(setA.findEquivalentElement(n4)).toBe(n4);
                });
        });
        describe('intersects ', () => {
            it(
                'checks for the presence of shared elements', () => {
                    expect(setA.intersects(b)).toBeTrue();
                });
        });
        describe('hasDistinctElements ', () => {
            it(
                'checks for the absence of elemnets in the current array in the altArray', () => {
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
            it(
                'returns an array of elemnets in the current array absent in the altArray', () => {
                    expect(setB.difference(a)).toBeArray();
                    expect(setB.difference(a)).toContain(n2);
                });
        });
        describe('union ', () => {
            it(
                'returns all elements in either array', () => {
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
        describe('push ', () => {
            describe(
                'when passed an element alrady present', () => {
                    it(
                        'does not change the length of the array', () => {
                            let alen = a.length;
                            setA.push(n1);
                            expect(a.length).toEqual(alen);
                        });
                });
            describe(
                'when passed an element not alrady present', () => {
                    it('contains the new element', () => {
                        let alen = setA.length;
                        a.push(n2);
                        expect(setA.contains(n2)).toBeTrue();
                    });
                });
        });
    });
    // describe('nonenumerable', () => {
    //     it('has no methods in object keys', () => {
    //         let mykeys = Object.keys(setA);
    //         let methodNames = [
    //             "contains",
    //             "hasSameSize",
    //             "isSubset",
    //             "isEquivalent",
    //             "findEquivalentElement",
    //             "intersects",
    //             "intersection",
    //             "hasDistinctElements",
    //             "difference",
    //             "union",
    //             "unionize",
    //             "push"
    //         ];
    //         expect(mykeys).not.toContain(...methodNames);
    //     });
    // });
});