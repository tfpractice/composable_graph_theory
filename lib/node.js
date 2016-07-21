var LableAble = require('./graph_utils/labelable');
var Equatable = require('./graph_utils/equatable');


// nodeMethodObject
let NodeMethods = {
    init(lbl, dat) {
        this.setLabel(lbl);
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

// node specific methods
function nodeLabel(lbl) {
    this.label = lbl;
}
// let nodeLabel = (lbl) => (this.label = lbl);
function nodeEquality(argObj) {
    return this.label === argObj.label
}

// Prototype via Factories
let NFact = LableAble.Labelize({}, nodeLabel);
// let nodeEquality = (altObject) => (this.label === altObject.label);
NFact = Equatable.Equalize(NFact, nodeEquality);
FProto = Object.assign(NodeMethods, LableAble.Labelize({}, nodeLabel), Equatable.Equalize({}, nodeEquality))

// Prototype via curried Factory (LCurr)
// let ProCurr = LableAble.LCurry({})(nodeLabel);
CProto = Object.assign(NodeMethods, LableAble.LCurry({})(nodeLabel), Equatable.eqCurry({})(nodeEquality));



function makeNode(label, data = {}) {
    let iState = {
        label, data
    };
    let sNode = Object.assign(iState, NodeMethods, LableAble.LabelizeState(iState), Equatable.EqualizeState(iState));
    // console.log(iState, sNode);
    // console.log(sNode);
    return Object.create(CProto).init(label, data);
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