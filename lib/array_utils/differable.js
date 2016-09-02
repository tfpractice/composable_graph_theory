let difference = (dfunc) => (contextA) => (queryA) => dfunc(contextA)(queryA);
// let differable = (dfunc) => (contextA) => ({
//     difference: difference(dfunc)(contextA)

// });
let differable = (dfunc) => {
    let operator, method;
    operator = {
        difference: difference(dfunc)
    };

    method = (contextA) => ({
        difference: difference(dfunc)(contextA)

    });
    return Object.assign(method, operator);
};

module.exports = differable
module.exports.difference = difference;