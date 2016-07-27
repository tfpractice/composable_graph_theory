module.exports = (fun) => (host) => ({
    isLabelable: () => true,
    label: () => fun(host)
});

// let monoidify = (fun) => (state) => ({
//     state: state
//     value: {
//         isLabelable: () => true,
//         label: () => fun(host)
//     }
// // });

// let monadify = (answerFun, stateFun = identity) =>
//     (...args) => (state) => {
//         let ans = answerFun([state, ...args]);
//         let rState = stateFun ? stateFun(state) : ans;
//         return {
//             answer: ans,
//             state: rState
//         };
//     };