let modify = (handler) => (hArg) => (hObj = {}) => Object.assign(hObj, handler(hArg));
module.exports = modify;