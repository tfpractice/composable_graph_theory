const Node = require('./node');
const ArrayUtils = require('./array_utils');
const arrayOf = ArrayUtils.arrayOf;
const checkAny = ArrayUtils.checkAny;
const setMixin = ArrayUtils.setMixin;
const typeMixin = ArrayUtils.typeMixin;
const validatorMixin = ArrayUtils.validatorMixin;

let NodeArray = arrayOf(validatorMixin((elem) => elem.type() === "Node"),
    setMixin(Node.isEquivalent), typeMixin(() =>
        "NodeArray"));
// console.log(NodeArray.contains.toString());
let isPresent = (query) => (nArr) =>
    checkAny(Node.isEquivalent(query))(nArr);
let isEquivalent = (queryA) => (contextA) =>
    setMixin.isEquivalent(contextA)(contextA)

module.exports = NodeArray;
module.exports.isPresent = isPresent;
// module.exports.isEquivalent = isEquivalent;