// describe('mutableSet', function() {
//     let mutableSet, typeMixin, composeMixin, composedInstance,
//         basicInstance;
//     let arrayOf, nonenum, constructor;
//     let a, ca1;
//     let n0, n1, n2, n3, n4;
//     let nMix, sMix0, sMix1, mixtype, mycomp, composed, compKeys, altMix,
//         comboMix, a0, aMod0, a1;
//     beforeAll(function() {
//         console.log('\n.........mutableSet Spec.........');
//         Node = this.GR.Node;
//         nonenum = this.GR.Utils.nonEnum;
//         arrayOf = this.GR.ArrayUtils.arrayOf;
//         typeMixin = this.GR.ArrayUtils.typeMixin;
//         mutableSet = this.GR.ArrayUtils.mutableSet;
//         composeMixin = this.GR.ArrayUtils.composeMixin;
//         compKeys = (iFunc) => (sArr = []) => Object.keys(mutableSet(
//                 iFunc)
//             (sArr));
//         instanceMethod = (sArr = []) => nonenum(constructor(sArr))(...compKeys(
//             constructor)(sArr))
//         constructor = (sArr = []) => Object.assign(Array.from(sArr),
//             mutableSet(instanceMethod)(sArr));
//     });
//     beforeEach(function() {
//         sMix0 = mutableSet(instanceMethod);
//         n0 = Node('n0');
//         n1 = Node('n1');
//         n2 = Node('n2');
//         n3 = Node('n3');
//         n4 = Node('n4');
//         a = [n0, n1, n4];
//         mxa = sMix0(a);
//         a0 = instanceMethod(a);
//         a1 = [n0, n1, n2, n3, n4];
//         ca1 = instanceMethod(a1);
//     });
//     it('is a function', function() {
//         expect(mutableSet).toBeFunction();
//     });
// describe('when given an instance function', () => {
// it('returns a function ', function() {
// expect(sMix0).toBeFunction();
// });
// describe('when given an array', () => {
// it('returns an object', function() {
// expect(sMix0(a)).toBeObject();
// });
// describe('contains', () => {
// it(
// 'returns a boolean regarding the presence of an element in the array',
// function() {
// expect(mxa.contains(n4)).toBeTrue();
// });
// });
// describe('hasSameSize(altArray)', () => {
// it(
// 'returns a boolean regarding the equality of the array sizes',
// function() {
// expect(mxa.hasSameSize([1, 2, 3])).toBeTrue();
// });
// });
// describe('isSubset(altArray)', function() {
// it(
// 'returns a boolean regarding the presnece of this arrays values in another array',
// function() {
// expect(mxa.isSubset(a1)).toBeTrue();
// });
// });
// describe('isEquivalent(altArray', () => {
// it(
// 'returns a boolean based on eqaulity of the arrays',
// function() {
// expect(a0.isEquivalent(a0)).toBeTrue();
// expect(a0.isEquivalent(ca1)).toBeFalse();
// });
// });
// describe('findEquivalentElement ', () => {
// it('returns an equivalent element in the array',
// function() {
// expect(a0.findEquivalentElement(n4)).toBe(
// n4);
// });
// });
// describe('intersects ', () => {
// it(
// 'returns a boolean based on the presence of shared elements',
// function() {
// expect(a0.intersects(a1)).toBeTrue();
// });
// });
// describe('intersection ', () => {
// it('returns an array of the shared elements',
// function() {
// let shared = a0.intersection(ca1)
// expect(shared).toBeArray();
// expect(shared).toContain(...a0);
// });
// });
// describe('hasDistinctElements ', () => {
// it(
// 'returns a booolean based on the absence of elemnets in the current array in the altArray',
// function() {
// expect(ca1.hasDistinctElements(a0)).toBeTrue();
// expect(a0.hasDistinctElements(ca1)).toBeFalse();
// expect(a0.hasDistinctElements(a0)).toBeFalse();
// });
// });
// describe('difference ', () => {
// it(
// 'returns an array of elemnets in the current array absent in the altArray',
// function() {
// expect(ca1.difference(a0)).toBeArray();
// expect(ca1.difference(a0)).toContain(n2);
// });
// });
// describe('union ', () => {
// it('returns all elements in either array',
// function() {
// let un = a0.union(ca1);
// expect(un).toBeArray();
// expect(un).toContain(n2);
// });
// });
// describe('unionize ', () => {
// it('merges the two arrays', function() {
// let unz = a0.unionize(ca1);
// expect(unz).toBeArray();
// expect(unz).toContain(n2);
// });
// });
// describe('push ', () => {
// describe(
// 'when passed an element alrady present', () => {
// it(
// 'does not change the length of the array',
// function() {
// let alen = a0.length;
// a0 = a0.push(n1);
// expect(a0.length).toEqual(alen);
// });
// });
// describe(
// 'when passed an element not alrady present', () => {
// it('increments thelength of the array',
// function() {
// let alen = a0.length;
// a0 = a0.push(n2);
// expect(a0.length).toEqual(alen +
// 1);
// });
// });
// });
// });
// });
// describe('operators', () => {
// describe('isPresent(query)', () => {
// it(
// 'returns a boolean regarding the persence of an element in an array',
// function() {
// expect(mutableSet.isPresent(n3)(a0)).toBeFalse();
// expect(mutableSet.isPresent(n3)(ca1)).toBeTrue();
// });
// });
// describe('contains(query)', () => {
// it(
// 'returns a boolean regarding the persence of an element in an array',
// function() {
// expect(mutableSet.contains(n3)(a0)).toBeFalse();
// expect(mutableSet.contains(n3)(ca1)).toBeTrue();
// });
// });
// });
// });