let findEquivalent = (eqFunc) => (context) => (query) => context.find(eqFunc(query));

module.exports = findEquivalent;