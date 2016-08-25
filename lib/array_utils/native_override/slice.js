let identity = (x) => x;
let nSlice = require('../native_proxy').sliceProxy;

let slice = (override = identity) => (context = []) => (...args) =>
    override(nSlice(context)(...args));

module.exports = slice;