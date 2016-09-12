let intersection = (matchFunc) => (context) => (query) =>
    context.filter(matchFunc(query));

let intersects = (matchFunc) => (context) => (query) =>
    context.some(matchFunc(query));

let xIntersects = (matchFunc) => (context) => (query) =>
    !intersects(matchFunc)(context)(query)

let objIntersection = (obj) => obj.intersection;
let objIntersects = (obj) => obj.intersects;
let objXIntersects = (obj) => obj.notIntersects;

let operators = {
    intersects: objIntersects
    , notIntersects: objXIntersects
    , intersection: objIntersection
};

let methods = (matchFunc) => (context) => ({
    intersection: intersection(matchFunc)(context)
    , intersects: intersects(matchFunc)(context)
    , notIntersects: xIntersects(matchFunc)(context)

});

let intersectable = (matchFunc) =>
    Object.assign(methods(matchFunc), operators);

module.exports = intersectable;