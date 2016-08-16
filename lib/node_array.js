const Node = require('./node');
const ArrayUtils = require('./graph_utils/array_utils');
const arrayOf = ArrayUtils.arrayOf;
const setMixin = ArrayUtils.setMixin;
const typeMixin = ArrayUtils.typeMixin;


let NodeArray = arrayOf(Node)(setMixin, typeMixin);

module.exports = NodeArray;