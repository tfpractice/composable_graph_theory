let checker = (...valFuncs) => (obj) =>
    valFuncs.reduce((errs, func) =>
        errs = (!func(obj)) ? errs.concat(func.message) : errs, []);

module.exports = checker;