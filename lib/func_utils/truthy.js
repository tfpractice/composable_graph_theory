let existy = require('./existy');
let truthy = (val) => (val !== false) && existy(val);

module.exports = truthy;