let contains = (eqFun) => (arr) => (el) => arr.some(eqFun(el));

let intersection = (matchFunc) => (context) => (query) =>
    matchFunc(context)(query);

let intersects = (matchFunc) => (context) => (query) =>
    matchFunc(context)(query).length > 0;

let intersectable = (matchFunc) => (context) => ({
    intersection: intersection(matchFunc)(context),
    intersects: intersects(matchFunc)(context)

});
module.exports = intersectable;
module.exports.intersection = intersection;