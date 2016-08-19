let allTrue = (...funcs) =>
    funcs.reduce((tVal, func) => tVal && func(), true);

module.exports = allTrue;