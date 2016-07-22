var LableAble = require('./graph_utils/labelable');
var Equatable = require('./graph_utils/equatable');


// nodeMethodObject
let NodeMethods = {
    init(lbl, dat) {
        this.setLabel(lbl);
        // this.label({
        //     label: lbl
        // });
        this.setData(dat);
        return this;
    },
    isEquivalent(altObject) {
        return this.label === altObject.label;
    },
    setData(data) {
        this.data = data;
    }

};
// Prototype via  Delegation
let mixDependencies = (deps) => (Object.assign({}, ...deps));
let Node = Object.assign(mixDependencies([Equatable, LableAble]), NodeMethods);
var NodeState = (label, data) => ({
    label: label,
    data: data
});


let nodeLabel = (state) => (state.label);
// let nodeEquality = {
//     console.log(state.label)
//     return state.label;
// };

function nodeEquality(argObj) {
    return argObj.label;
}
// 



let MyNodeMethods = {
    init(state) {
        // this.labeler(state);
        // this.label({
        //     label: lbl
        // });
        this.setData(state.data);
        return this;
    },
    isEquivalent(altObject) {
        return this.label === altObject.label;
    },
    setData(data) {
        this.data = data;
    }

};



let NLabeler = LableAble.LableCurry(nodeLabel).labeler;
let NEquator = Equatable.EquivCurry(nodeEquality).equator;
let NInitiator = (state) => ({
    data: () => state.data
});
let SClass = Object.assign({}, MyNodeMethods);


let creator = (state) => Object.assign({}, NLabeler(state), NEquator(state), NInitiator(state));

let ScopeNode = (state) =>
    Object.assign(Object.create(SClass), NLabeler(state), Equatable.EquivCurry(NLabeler(state).label));


// console.log(PINode);

function makeNode(label, data = {}) {
    let iState = {
        label, data
    };
    // console.log(iState)
    // return creator(iState);
    console.log(ScopeNode(iState));
    return (ScopeNode(iState));
    // let sNode = Object.assign(iState, NodeMethods, LableAble.LabelizeState(iState), Equatable.EqualizeState(iState));
    // let pNode = Object.assign(iState, NodeMethods, NodeM(iState), Equatable.EqualizeState(iState));
    // let pNode = Object.assign({}, NodeMethods, PINode.labeler(state), Equatable);
    // console.log(pNode);
    return Object.create(Node).init(label, data);
}



exports.NodeState = NodeState;
exports.makeNode = makeNode;
exports.Node = Node
// /**
//  * represent a Node
//  * @exports Node
//  * @constructor
//  * @memberOf module:GraphTheory
//  * @param {String} label  [label property]{@link module:GraphTheory.Node#label}
//  * @param {Object} data the nodes data
//  */
// class Node {
//     constructor(label, data) {
//         this.setLabel(label);
//         this.setData(data);
//     }
//     /**
//      * sets the node's label attribute
//      * @param {String} lbl
//      */
//     setLabel(lbl) {
//         /**
//          * the node identifier
//          * @type {String}
//          */
//         return this.label = lbl;
//     }
//     *
//      * sets the node's data attribute
//      * @param {Object} d

//     setData(d) {
//         /**
//          * the node data
//          * @type {Object}
//          */
//         return this.data = d || {};
//     }
//     /**
//      * Checks for identity via label attribute
//      * @param  {Node}  newNode the node to be compared
//      * @return {Boolean}
//      */
//     isEquivalent(newNode) {
//         return this.label === newNode.label;
//     }
// }

// /**
//  * [A Node]{@link module:GraphTheory.Node}
//  * @typedef {module:GraphTheory.Node} Node
//  */
// module.exports = Node;