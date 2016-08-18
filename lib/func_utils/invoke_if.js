let truthy = require('./truthy');
let invokeIf = (cond) => (func, def = undefined) => truthy(cond) ? func() : def;

module.exports = invokeIf;