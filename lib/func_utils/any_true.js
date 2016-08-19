let anyTrue = (...funcs) =>
    funcs.reduce((tVal, func) => tVal || func(), false);

module.exports = anyTrue;