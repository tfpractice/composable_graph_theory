fdescribe('subArray', () => {
    let subArray, Node, nArray, xArray, myArray, n0, n1, n4, n6, n7, n8, n11, n16, n17, n18, largeArray, fArry;
    beforeAll(function() {
        subArray = this.GR.Utils.subArray;
        Node = this.GR.Node;
    });
    beforeEach(function() {
        nArray = subArray.arrayOf(Node);
        n0 = Node("n0");
        n1 = Node("n1");
        xArray = nArray.instance();
        myArray = nArray.instance([n0, n1]);
        n4 = Node("n4");
        n6 = Node("n6");
        n7 = Node("n7");
        n8 = Node("n8");
        n11 = Node("n11");
        n16 = Node("16");
        n17 = Node("17");
        n18 = Node("18");
        largeArray = nArray.instance([n4, n6, n7, n8, n11, n16, n17, n18]);
        fArry = largeArray.filter(n => (n.label() == "n4") || (n.label() == "n8"));
    });
    describe('.arrayOf(BaseClass)', () => {
        it('returns an object', function() {
            expect(nArray).toBeObject();
        });
        it('has an instance function', function() {
            expect(nArray.instance).toBeFunction();
        });
        describe('instance', () => {
            it('returns an array', function() {
                expect(myArray).toBeArray();
            });
            describe('.baseType', () => {
                it('returns the name of the class of objects allowed into the array ', function() {
                    expect(myArray.baseType()).toEqual("Node");
                });
            });
            describe('type', () => {
                it('retunrs the baseType + "Array"', function() {
                    expect(myArray.type()).toBe("NodeArray");
                });
            });
            describe('isValid(elem)', () => {
                it('validates an element', function() {
                    expect(myArray.isValid(n0)).toBeTrue();
                });
            });
            describe('splice', () => {
                it('returns a new instance from the original', function() {
                    let src = nArray.instance([Node("n4"), Node("n6"), Node("n7"), Node("n8")]);
                    let splArr = src.splice(1, 2);
                    let allProps = Object.getOwnPropertyNames(splArr);
                    expect(splArr).toBeArray();
                    expect(splArr.length).toBe(2);
                    expect(splArr.type).toBeTruthy();
                });
            });
            describe('isEmpty', () => {
                it('returns true if lenght == 0', function() {
                    expect(xArray.isEmpty()).toBeTrue();
                });
            });
            describe('filter', () => {
                it('retuns a new instance via filter', function() {
                    expect(fArry.isEmpty).toBeTruthy();
                });
            });
            describe('hasSameSize', () => {
                it('compasres the lenghts of two arrays', function() {
                    expect(fArry.hasSameSize(nArray.instance([n0, n1]))).toBeTrue();
                });
            });
            describe('copy', function() {
                it('retuns an instance of the sliced array', function() {
                    let fcopy = fArry.copy();
                    expect(fcopy.isValid).toBeTruthy();
                });
            });
            describe('clear', function() {
                it('clears the original array', function() {
                    let fcopy = fArry.copy();
                    let fclear = fcopy.clear();
                    expect(fclear).toBeEmptyArray();
                });
            });
            describe('when contains', () => {
                it('retuns a boolean if some elements are the same as the argument', function() {
                    expect(fArry.contains(n4)).toBeTrue();
                });
            });
            describe('isSubset', () => {});
            describe('#isSubset', () => {
                it('returns true if every node in the callers is in the argument', function() {
                    expect(fArry.isSubset(largeArray)).toBeTrue();
                });
            });
            describe('#isEquivalent', function() {
                it('returns true if arrays are of same size and are subsets of each other', function() {
                    let fcopy = fArry.copy();
                    expect(fcopy.isEquivalent(fArry)).toBeTrue();
                });
            });
            describe('findEquivalentElemenst()', function() {
                it('retrieves an equivalent element in the object', function() {
                    expect(fArry.findEquivalentElement(n4)).toBe(n4);
                });
            });
            describe('#removeElement', function() {
                it('removes an element from the array', function() {
                    fSplice = fArry.removeElement(n4);
                    fArry = fArry.reassign();
                    expect(fArry).not.toContain(n4);
                });
            });
            describe('reassign', function() {
                it('creates a new instance from the potentiall modified array', function() {
                    let rsg = fArry.reassign();
                    expect(rsg.isEquivalent).toBeTruthy();
                });
            });
            describe('intersects', function() {
                it('determines if two arrays share any nodes', function() {
                    expect(largeArray.intersects(fArry)).toBeTrue();
                });
            });
            describe('intersection(altArray)', function() {
                it('retuns an array of nodes shared by two nodeArrays', function() {
                    expect(largeArray.intersection(fArry)).toBeArray();
                });
            });
            describe('hasDistinctElements', function() {
                it('determines if caller has nodes that argument does not', function() {
                    expect(largeArray.hasDistinctElements(fArry)).toBeTrue();
                });
            });
            describe('difference', function() {
                it('returns an array of nodes contained in the caller but not in the argument', function() {
                    expect(largeArray.difference(fArry)).toBeArray();
                });
            });
            // describe('union', function() {
            // it('returns an array of all nodes between two array', function() {
            // expect(myArray.union(myAltArray)).toBeArray();
            // });
            // });
            // describe('unionize', function() {
            // it('combines the nodes of both arrays', function() {
            // myArray.unionize(myAltArray);
            // var nodeUnion = myArray.union(myAltArray);
            // expect(myArray).toEqual(nodeUnion);
            // });
            // it('retuns the modified array', function() {
            // let uArr = myArray.unionize(myAltArray);
            // var nodeUnion = myArray.union(myAltArray);
            // expect(uArr).toBeArray();
            // });
            // });
        });
    });
});