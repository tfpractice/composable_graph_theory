const Node = require('./node');
const Edge = require('./edge');
const ArrayUtils = require('./array_utils');
const arrayOf = ArrayUtils.arrayOf;
const setMixin = ArrayUtils.setMixin;
const typeMixin = ArrayUtils.typeMixin;

let edgesWithNode = (eArr) => (nArg) => this.filter(e => e.containsNode(nArg));

let EdgeArray = arrayOf(Edge)(setMixin, typeMixin);

module.exports = EdgeArray;