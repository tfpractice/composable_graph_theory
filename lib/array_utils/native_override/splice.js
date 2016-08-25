let identity = (x) => x;
let nSplice = require('../native_proxy').spliceProxy;

let splice = (override = identity) => (context = []) => (...args) =>
    override(nSplice(context)(...args));

module.exports = splice;