let composeMixin = (...mxns) => (baseArg) =>
    mxns.reduce((comp, mxn) => Object.assign(comp, mxn(baseArg)), {});
// let addMixin = (nextMx) => compose_mixin