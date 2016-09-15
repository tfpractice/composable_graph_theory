let GUtils = require('../graph_utils');
let MUtils = require('../method_utils');
let oFactory = MUtils.factory;
let nonEnum = GUtils.nonEnum;
let factoryMixin = require('./factory_mixin');

let mutableArrayOf = (...mixins) => {
	let arrayFactory = oFactory(...mixins, factoryMixin(spawn));
	let construct = (sArr = []) => Object.assign(sArr, arrayFactory(sArr));
	let compKeys = (sArr = []) => Object.keys(arrayFactory(sArr));

	function spawn(sArr = []) {
		return nonEnum(construct(sArr))(...compKeys(sArr));
	}

	return Object.assign(arrayFactory, {
		spawn: spawn
	});

};

module.exports = mutableArrayOf;