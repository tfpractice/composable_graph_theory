const Utils = require('./graph_utils');
var Labelable = Utils.Labelable;
var Equatable = Utils.Equatable;
let nodeLabel = (state) => (state.label);

function nodeEquality(argObj) {
    return argObj.label();
}
let NLabeler = Labelable.labelizeFunction(nodeLabel);
let NEquator = Equatable.equalizeFunction(nodeEquality);
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