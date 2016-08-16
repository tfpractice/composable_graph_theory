let Node = require('./node');
let NodeArray = require('./node_array');
let Utils = require('./graph_utils');
let labelize = Utils.labelize;
// let equalize = Utils.equalize;



let l_func = (state) => state.nodes.reduce((str, n, id, a) => (id < a.length - 1) ? (str + n.label() + "::") : str + n.label(), "");
// let e_func = (state) =>
let n0 = Node("n0");
let n1 = Node("n1");
// let nArr = NodeArray.instance([n0, n1]);
let lab_maker = labelize(l_func);

// let getNodes = (edge) => edge.nodes();
// let getWeight = (edge) => edge.weight();
// let getNodes = (state) => ({
//     nodes: () => NodeArray.instance(state.nodes)
// });
let getNodes = (edge) => edge.nodes();
let nodify = (state) => ({
    nodes: () => NodeArray.instance(state.nodes)
});
let hasSameNodes = (hostEdge) => (argEdge) => host.nodes().isEquivalent(argEdge.nodes());
let isEquivalent = (hostEdge) => (argEdge) => hasSameNodes(hostEdge)(argEdge);

let hasSameWeight = (hostEdge) => (argEdge) => host.weight() === argEdge.weight();
// let hasSameName = (hostEdge) => (argEdge) => host.label() === argEdge.label();

let compareNodes = (state) => ({
    hasSameNodes: (argEdge) => NodeArray.instance(state.nodes).isEquivalent(argEdge.nodes)
});
let compareLabel = (state) => ({
    hasSameName: (argEdge) => state.label === argEdge.label()
});
let hasNode = (state) => ({
    containsNode: (nodeArg) => NodeArray.instance(state.nodes).contains(nodeArg)
})
let toString = (state) => ({
    toString: () => `[ Edge ${l_func(state)} ]`,
});


let weightMaker = (state) => ({
    weight: () => state.weight
});
let getWeight = (state) => ({
    weight: () => state.weight,
});
// let weight = (edge) => edge.weight();




let Edge = (n0, n1, w = 0) => {
    let state = {
        nodes: [n0, n1],
        weight: w
    };
    // let curriedMethods = {
    //     isEquivalent: isEquivalent(state),
    //     hasSameNodes: hasSameNodes(state),
    //     hasSameWeight: hasSameWeight(state),


    // };
    return Object.assign({}, lab_maker(state), toString(state), getWeight(state), compareLabel(state), compareNodes(state), hasNode(state), nodify(state));
    // , {
    //     hasSameWeight: hasSameWeight
    // }, {
    //     weight: () => w
    // });
    return {
        nodes: () => NodeArray.instance([n0, n1]),
        weight: () => w
    }
};

module.exports = Edge
module.exports.getNodes = getNodes;
// module.exports.getWeight = getWeight;