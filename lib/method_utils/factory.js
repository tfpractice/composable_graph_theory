let factory = (...mixins) => {
    let operators = mixins.reduce((ops, mx) => Object.assign(ops, mx), {});
    let methods = (state) =>
        mixins.reduce((meths, mx) => Object.assign(meths, mx(state)), {});

    // let methods = (label = '', data = {}) => {
    //     let state = {
    //         label, data
    //     };

    //     return mixins.reduce((meths, mx) => Object.assign(meths, mx(state)), {});
    // };

    return Object.assign(methods, operators);
};

module.exports = factory;