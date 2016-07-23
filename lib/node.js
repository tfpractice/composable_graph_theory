const Utils = require('./graph_utils');
var labelize = Utils.labelize;
var equalize = Utils.equalize;
let nodeLabel = (state) => (state.label);
var Node = {
    label() {
        return this.label();
    },
    data() {
        return this.data();
    }
};

let nodeEquality = (argObj) => argObj.label();
let NLabeler = labelize(nodeLabel);
let NEquator = equalize(nodeEquality);
let NInitiator = (state) => ({
    data: () => state.data
});
let ScopeNode = (state) => Object.assign(Object.create(Node), NLabeler(state), NEquator(state), NInitiator(state));

function makeNode(label, data = {}) {
    let iState = {
        label, data
    };
    return (ScopeNode(iState));
}
exports.makeNode = makeNode;
exports.Node = "lol"