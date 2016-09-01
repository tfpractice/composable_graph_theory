let defUnion = (context) => (query) =>
    context.toString().concat(query.toString());

let union = (uFunc = defUnion) => (context) => (query) =>
    uFunc(context)(query);

let unionable = (uFunc = defUnion) => (context) => ({
    union: union(uFunc)(context)
});

module.exports = unionable;
module.exports.union = union;