// let id = {};
// // objects have methods and properties
// Object.assign(state, {}) // <---- endofunctor
// state(state()) // ----> {}
// typify(labelize(datafy(state))) // ----> state.data 

// NodeType = {
//     node: {}
//     state: {
//         label, data
//     }
// }
// datafy(NodeType) // nodeType{node:{data:()=> state.data}}
// labelize(datafy(NodeType)) // --> {node{ data:()=> state.data, label:()=> state.label}, state:{}}
// // f(a)= Ma
// sMon(state) // monoid based on state with data and label attrs

// let unit = (state) => ({
//     val: () => state,
//     state: () => Object.assign({}, state);
//     label: () => state.label,
//     data: () => state.data
// })