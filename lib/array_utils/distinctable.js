let hasDistinctElements = (dfunc) => (context) => (query) =>
    dfunc(context)(query);
// let hasDistinctElements = (cFun) => (context) => (query) =>
// context.some(e => !cFun(query)(el));
// dfunc(context)(
// query);/
let distinctable = (dfunc) => (context) => ({
    hasDistinctElements: hasDistinctElements(dfunc)(context)
});
module.exports = distinctable;
module.exports.hasDistinctElements = hasDistinctElements;