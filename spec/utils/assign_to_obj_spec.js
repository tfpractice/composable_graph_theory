// fdescribe('assignToObject', () => {
//     let assignToObject, actions, liftAnswer, f1, f2, f3, d_func;
//     beforeAll(function() {
//         console.log('\n.........assignToObject Spec.........');
//         assignToObject = this.GR.Utils.assignToObject;
//     });
//     beforeEach(function() {
//         f1 = (n) => ({
//             "f1": (factor = 2) => factor * n
//         });
//         f2 = (n) => ({
//             "f2": () => n + 3
//         });
//         f3 = (n) => ({
//             "f3": () => n * 3
//         });
//         d_func = (values, state) => ({
//             values,
//             state
//         });
//     });
//     describe('when given an object ', () => {
//         let obj1, obj_f1, f1_a, f2_a;
//         beforeEach(function() {
//             obj1 = {};
//             obj_f1 = assignToObject(obj1);
//             f1_a = obj_f1(f1(3));

//         });
//         it('returns a function awaiting a properties', function() {
//             expect(obj_f1).toBeFunction();
//         });
//         describe('when given properties', () => {
//             it('copies the properties onto the object', function() {
//                 expect(f1_a.f1).toBeTruthy();
//             });
//         });
//         // it('returns a new object', function() {
//         //     expect(obj1(2)).toBeObject();
//         // });
//         // it('assignToObjects the return value to a property on the new object', function() {
//         //     expect(obj1(2).f1).toBeFunction();
//         // });

//     });
// });