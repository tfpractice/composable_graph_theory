let difference = (dfunc) => (context) => (query) => dfunc(context)(query);
let differable = (dfunc) => (context) => ({
    difference: difference(dfunc)(context)

});

module.exports = differable
module.exports.difference = difference;