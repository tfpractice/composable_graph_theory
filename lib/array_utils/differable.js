let difference = (dfunc) => (contextA) => (queryA) => dfunc(contextA)(queryA);
let differable = (dfunc) => (contextA) => ({
    difference: difference(dfunc)(contextA)

});

module.exports = differable
module.exports.difference = difference;