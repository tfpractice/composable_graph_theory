// describe('containify', function() {
//     let containify, cFunc, cState, myNodes;
//     beforeAll(function() {
//         console.log('\n.........containify Spec.........');
//         containify = this.GR.MethodUtils.containify;
//         cFunc = (state) => state.nodes;
//         cState = {
//             nodes: 10
//         };
//         myNodes = containify(cFunc)(cState);

//     });
//     describe('when given a nodes function', () => {
//         it('returns a function', function() {
//             expect(containify(cFunc)).toBeFunction();
//         });

//         describe('when given a state obj', () => {
//             it('returns an object', function() {
//                 expect(myNodes).toBeObject();
//             });

//             describe('nodes', () => {
//                 it('returns the wfuc called on the state', function() {
//                     expect(myNodes.nodes()).toBe(10);
//                 });
//             });
//         });
//     });
// });