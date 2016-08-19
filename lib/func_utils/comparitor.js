let comparitor = (func) =>
    (arg1) =>
    (arg2) => func(arg1) === func(arg2);
module.exports = comparitor;