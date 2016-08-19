let thunkify = (func) => () => func();
module.exports = thunkify;