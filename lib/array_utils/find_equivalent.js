let findEquivalent = (eqFunc) =>
    (context) =>
    (query) => context.find(eqFunc(query));

let eqMaker = (eqFunc) => (context) => ({
    findEquivalentElement: findEquivalent(eqFunc)(context)
});

module.exports = findEquivalent;