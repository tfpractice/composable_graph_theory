let identity = (x) => x;
let nPush = require('../native_proxy').pushProxy;

let push = (override = identity) => (context = []) => (...args) =>
    override(nPush(context)(...args));

module.exports = push;