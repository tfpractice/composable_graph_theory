const Setable = require('./graph_utils/setable');
const Node = require('./node');

var NodeArray = Setable.setifyType(Node.Node);

let makeArray = (initNode) => Object.create(NodeArray);

module.exports = NodeArray;
module.exports.makeArray = makeArray;