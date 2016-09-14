const Node = require('./node');
const NodeArray = require('./node_array');
const Edge = require('./edge');
const ArrayUtils = require('./array_utils');
const arrayOf = ArrayUtils.arrayOf;
const setMixin = ArrayUtils.setMixin;
const typeMixin = ArrayUtils.typeMixin;
const validatorMixin = ArrayUtils.validatorMixin;

// push(compArg) {
//     return this.integrateComponent(compArg) || super.push(compArg);
// }

let hasIntersectingComponent = (context) => (compArg) =>
	context.excludeElement(compArg)
	.some(currComp => currComp.intersects(compArg));

let findIntersectingComponent = (context) => (compArg) =>
	context.excludeElement(compArg)
	.find(currComp => currComp.intersects(compArg));

let mergeComponents = (context) => (compArg) => {
	// context.removeElement(compArg);
	return ComponentArray.unionize(context)(compArg);

};
// mergeComponents(origComp, newComp) {
//     this.removeElement(newComp);
//     return origComp.unionize(newComp);
// }

// integrateComponent(compArg) {
//     let iComp = this.findIntersectingComponent(compArg);
//     return (!!iComp) && this.mergeComponents(iComp, compArg);
// }

// };

let ComponentArray = arrayOf(validatorMixin((elem) => elem.type() ===
	"NodeArray"), setMixin(NodeArray.isEquivalent), typeMixin(() =>
	"ComponentArray"));

module.exports = ComponentArray;
module.exports.hasIntersectingComponent = hasIntersectingComponent;
module.exports.findIntersectingComponent = findIntersectingComponent;
module.exports.mergeComponents = mergeComponents;