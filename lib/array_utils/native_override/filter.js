let identity = (x) => x;
let nFilter = require('../native_proxy').filterProxy;

let filter = (override = identity) => (context = []) => (...args) =>
    override(nFilter(context)(...args));

module.exports = filter;