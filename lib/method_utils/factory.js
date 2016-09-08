let factory = (...mixins) => {
    let operators = mixins.reduce((ops, mx) => Object.assign(ops, mx), {});

    let methods = (state) =>
        mixins.reduce((meths, mx) => Object.assign(meths, mx(state)), {});

    Object.defineProperties(methods, {
        'mixins': {
            value: mixins,
            enumerable: false
        },
        'subType': {
            value: subType(methods),
            enumerable: false
        }
    });

    return Object.assign(methods, operators);
};
let subType = (base) => (...exts) => factory(...(base.mixins.concat(exts)));

module.exports = factory;
module.exports.subType = subType;