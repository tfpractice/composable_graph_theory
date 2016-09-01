let intersection = (iFunc) => (context) => (query) =>
    iFunc(context)(query);
let intersects = (iFunc) => (context) => (query) =>
    iFunc(context)(query).length > 0;

let intersectable = (iFunc) => (context) => ({
    intersection: intersection(iFunc)(context),

});
module.exports = intersectable;
module.exports.intersection = intersection;