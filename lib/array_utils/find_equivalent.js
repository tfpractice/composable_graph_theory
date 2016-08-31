let findEquivalent = (eqFunc) =>
    (context) =>
    (query) => context.find(eqFunc(query));

let searchable = (eqFunc) => (context) => ({
    findEquivalentElement: findEquivalent(eqFunc)(context)
});

module.exports = findEquivalent;