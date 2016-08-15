const ArrayUtils = require('./graph_utils/array_utils');
const Node = require('./node');

var NodeArray = Setable.setifyType(Node.Node);

let makeArray = (initNode) => Object.create(NodeArray);

module.exports = NodeArray;
module.exports.makeArray = makeArray;