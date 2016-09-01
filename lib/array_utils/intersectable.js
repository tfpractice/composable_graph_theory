let intersection = (iFunc) => (context) => (query) =>
    iFunc(context)(query);

let intersectable = (iFunc) => (context) => ({
    intersection: intersection(iFunc)(context)
});
module.exports = intersectable;
module.exports.intersection = intersection;