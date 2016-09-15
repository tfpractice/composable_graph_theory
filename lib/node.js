const Utils = require('./graph_utils');
const MethUtils = require('./method_utils');
const FuncUtils = require('./func_utils');
const ArrayUtils = require('./array_utils');
const factory = MethUtils.factory;
const compose = FuncUtils.compose;
const labelize = MethUtils.labelize;
const equalize = MethUtils.equalize;
const datafy = MethUtils.datafy;
const kestrel = FuncUtils.combinators.kestrel;
const typify = MethUtils.typify;
const pipeline = Utils.pipeline;
const modify = Utils.modify;
const mixin = Utils.mixin;
const comparitor = FuncUtils.comparitor;

// state accessors
let typeAccessor = (state) => 'Node';
let dataAccessor = (state) => state.data;
let labelAccessor = (state) => state.label;

// methodMakers
let typeMaker = typify(typeAccessor);
let dataMaker = datafy(dataAccessor);
let labelMaker = labelize(labelAccessor);

let equalAccessor = (state) => labelMaker(state).sameLabel;
let eqMaker = equalize(equalAccessor);

let Node = factory(typeMaker, dataMaker, labelMaker, eqMaker);
let extendNode = factory.subType(NodeFactory);
let composeNode = compose(typeMaker, dataMaker, labelMaker, eqMaker);
// let Node = (label, data = {}) => {
// 	let iState = {
// 		label,
// 		data
// 	};
// 	let opNode = Object.assign(composeNode, typeMaker, labelMaker, dataMaker, eqMaker)
// 		// console.log(opNode);
// 	return opNode(iState);

// };
Node.toString = function() {
	return "Node";
};

let altNode = (...mixins) => {
	let operators = mixins.reduce((ops, mx) => Object.assign(ops, mx), {});

	let methods = (label = '', data = {}) => {
		let state = {
			label,
			data
		};

		return mixins.reduce((meths, mx) => Object.assign(meths, mx(state)), {});

	};

	return Object.assign(methods, operators);
};
// console.log("NodeFactory", NodeFactory);
// instance operators/accessors
// let getLabel = (node) => node.label();
// let getData = (node) => node.data();
// let getType = (node) => node.type();
// let shareLabel = (n1) => (n2) => comparitor(getLabel)(n1)(n2);

// exports
module.exports = Node;
// // module.exports = Node;
// module.exports.NodeFactory = NodeFactory;
// module.exports.extendNode = extendNode;
// module.exports.getLabel = getLabel;
// module.exports.getData = getData;
// module.exports.getType = getType;
// module.exports.shareLabel = shareLabel;
// module.exports.isEquivalent = shareLabel;