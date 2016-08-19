let compose = (...mxns) => (baseArg) =>
    mxns.reduce((comp, mxn) => Object.assign(comp, mxn(baseArg)), {});

module.exports = compose;