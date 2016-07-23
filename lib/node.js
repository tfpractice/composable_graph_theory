const Utils = require('./graph_utils');
var labelize = Utils.labelize;
var equalize = Utils.equalize;
let nodeLabel = (state) => (state.label);

function nodeEquality(argObj) {
    return argObj.label();
}
let NLabeler = labelize(nodeLabel);
let NEquator = equalize(nodeEquality);
let NInitiator = (state) => ({
    data: () => state.data
});
let ScopeNode = (state) => Object.assign({}, NLabeler(state), NEquator(state), NInitiator(state));

function makeNode(label, data = {}) {
    let iState = {
        label, data
    };
    return (ScopeNode(iState));
    return Object.create(Node).init(label, data);
}
exports.makeNode = makeNode;
exports.Node = "lol"