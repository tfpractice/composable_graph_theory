let truthy = require('./truthy');
let invokeIf = (cond) => (func) => truthy(cond) ? func() : undefined;

module.exports = invokeIf;