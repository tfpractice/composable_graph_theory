let modify = (handler) => (hArg) => (hObj = hArg) => Object.assign(hObj, handler(hArg));
module.exports = modify;