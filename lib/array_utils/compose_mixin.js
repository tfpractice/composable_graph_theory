let composeMixin = (...mxns) =>
    (baseArg) =>

    mxns.reduce((comp, mxn) =>
        Object.assign(comp, mxn(baseArg)), {});

module.exports = composeMixin;