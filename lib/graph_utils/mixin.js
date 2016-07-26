let mixin = (obj = {}) => (mixin) => Object.assign(obj, mixin);
module.exports = mixin;