let mixin = (obj = {}) => (...mixins) => Object.assign(obj, ...mixins);
module.exports = mixin;