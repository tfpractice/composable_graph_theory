let identity = (x) => x;
let nConcat = require('../native_proxy').concatProxy;

let concat = (override = identity) => (context = []) => (...args) =>
	override(nConcat(context)(...args));

module.exports = concat;