const Node = require('./node');
const { validatable, typify } = require('./method_utils');
const {
	arrayOf,
	checkAny,
	setMixin,
	setable,
	typeMixin,
	validatorMixin,
} = require('./array_utils');

let NodeArray = arrayOf(validatable((elem) => elem.type() === 'Node'),
	setable(Node.isEquivalent),
	typify(() => 'NodeArray'));

let isPresent = (query) => (nArr) =>
	checkAny(Node.isEquivalent(query))(nArr);

module.exports = NodeArray;
module.exports.isPresent = isPresent;