describe('mutableSet', function() {
    let mutableSet, Node;
    let myMutable;
    let a, b, setA, setB;
    let n0, n1, n2, n3, n4;
    // let typeMixin, composeMixin, composedInstance,
    //     basicInstance;
    // let arrayOf, nonenum, constructor;

    // let nMix, sMix0, sMix1, mixtype, mycomp, composed, compKeys, altMix,
    //     comboMix, setA, aMod0, a1;
    beforeAll(function() {
        console.log('\n.........mutableSet Spec.........');
        Node = this.GR.Node;
        mutableSet = this.GR.ArrayUtils.mutableSet;
        myMutable = mutableSet(Node.isEquivalent);
        // nonenum = this.GR.Utils.nonEnum;
        // arrayOf = this.GR.ArrayUtils.arrayOf;
        // typeMixin = this.GR.ArrayUtils.typeMixin;
        // composeMixin = this.GR.ArrayUtils.composeMixin;
        // compKeys = (iFunc) => (sArr = []) => Object.keys(mutableSet(
        // iFunc)
        // (sArr));
        // instanceMethod = (sArr = []) => nonenum(constructor(sArr))(...compKeys(
        // constructor)(sArr))
        // constructor = (sArr = []) => Object.assign(Array.from(sArr),
        // mutableSet(instanceMethod)(sArr));
    });
    beforeEach(function() {
        // sMix0 = mutableSet(instanceMethod);
        n0 = Node('n0');
        n1 = Node('n1');
        n2 = Node('n2');
        n3 = Node('n3');
        n4 = Node('n4');
        a = [n0, n1, n4];
        setA = myMutable(a);
        // setA.changeMe()
        // setA.push(n1);
        // setA.push(n4);
        // console.log(setA.changeMe());
        b = [n0, n1, n2, n3, n4];
        setB = myMutable(b);
    });
    it('is a function', function() {
        expect(myMutable).toBeFunction();
    });
    describe('when given an equality function', () => {
        it('returns a function ', function() {
            expect(mutableSet(Node.isEquivalent)).toBeFunction();
        });
        describe('when given an array', () => {
            it('returns an object', function() {
                expect(myMutable(a)).toBeArray();
            });
            describe('contains', () => {
                it(
                    'returns a boolean regarding the presence of an element in the array',
                    function() {
                        expect(setA.contains(n4)).toBeTrue();
                    });
            });
            describe('hasSameSize(altArray)', () => {
                it(
                    'returns a boolean regarding the equality of the array sizes',
                    function() {
                        expect(setA.hasSameSize([1, 2, 3])).toBeTrue();
                    });
            });
            describe('isSubset(altArray)', function() {
                it(
                    'returns a boolean regarding the presence of this arrays values in another array',
                    function() {
                        expect(setA.isSubset(b)).toBeTrue();
                    });
            });
            describe('isEquivalent(altArray', () => {
                it(
                    'returns a boolean based on eqaulity of the arrays',
                    function() {
                        expect(setA.isEquivalent(a)).toBeTrue();
                        expect(setA.isEquivalent(b)).toBeFalse();
                    });
            });
            describe('findEquivalentElement ', () => {
                it('returns an equivalent element in the array',
                    function() {
                        expect(setA.findEquivalentElement(n4)).toBe(
                            n4);
                    });
            });
            describe('intersects ', () => {
                it(
                    'returns a boolean based on the presence of shared elements',
                    function() {
                        expect(setA.intersects(setB)).toBeTrue();
                    });
            });
            describe('intersection ', () => {
                it('returns an array of the shared elements',
                    function() {
                        let shared = setA.intersection(setB)
                        expect(shared).toBeArray();
                        expect(shared).toContain(...setA);
                    });
            });
            describe('hasDistinctElements ', () => {
                it(
                    'returns a booolean based on the absence of elemnets in the current array in the altArray',
                    function() {
                        expect(setB.hasDistinctElements(setA)).toBeTrue();
                        expect(setA.hasDistinctElements(setB)).toBeFalse();
                        expect(setA.hasDistinctElements(setA)).toBeFalse();
                    });
            });
            describe('difference ', () => {
                it(
                    'returns an array of elemnets in the current array absent in the altArray',
                    function() {
                        expect(setB.difference(setA)).toBeArray();
                        expect(setB.difference(setA)).toContain(
                            n2);
                    });
            });
            describe('union ', () => {
                it('returns all elements in either array',
                    function() {
                        let un = setA.union(setB);
                        expect(un).toBeArray();
                        expect(un).toContain(n2);
                    });
            });
            describe('unionize ', () => {
                it('merges the two arrays', function() {
                    let unz = setA.unionize(setB);
                    expect(unz).toBeArray();
                    expect(unz).toContain(n2);
                });
            });
            describe('push ', () => {
                describe(
                    'when passed an element alrady present', () => {
                        it(
                            'does not change the length of the array',
                            function() {
                                let alen = setA.length;
                                setA = setA.push(n1);
                                expect(setA.length).toEqual(
                                    alen);
                            });
                    });
                describe(
                    'when passed an element not alrady present', () => {
                        it('increments thelength of the array',
                            function() {
                                let alen = setA.length;
                                setA = setA.push(n2);
                                expect(setA.length).toEqual(
                                    alen +
                                    1);
                            });
                    });
                // });
                // });
            });
            describe('nonenumerable', () => {
                it('has no methods in object keys', function() {
                    let mykeys = Object.keys(setA);
                    let methodNames = [
                        "contains",
                        "hasSameSize",
                        "isSubset",
                        "isEquivalent",
                        "findEquivalentElement",
                        "intersects",
                        "intersection",
                        "hasDistinctElements",
                        "difference",
                        "union",
                        "unionize",
                        "push"
                    ];

                    expect(mykeys).not.toContain(...methodNames);
                });
            });
            // describe('operators', () => {
            // describe('isPresent(query)', () => {
            // it(
            // 'returns a boolean regarding the persence of an element in an array',
            // function() {
            // expect(mutableSet.isPresent(n3)(setA)).toBeFalse();
            // expect(mutableSet.isPresent(n3)(setB)).toBeTrue();
            // });
            // });
            // describe('contains(query)', () => {
            // it(
            // 'returns a boolean regarding the persence of an element in an array',
            // function() {
            // expect(mutableSet.contains(n3)(setA)).toBeFalse();
            // expect(mutableSet.contains(n3)(setB)).toBeTrue();
            // });
        });
    });
});