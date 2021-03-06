let checkAny = require('./check_any');

let defaultMatch = (contextA) =>
    (queryEl) => contextA.some(e => e == queryEl);

let intersects = (matchFunc = defaultMatch) =>
    (contextA) =>
    (queryA) => checkAny(matchFunc(contextA))(queryA)

let interFunc = (matchFunc) => (contextA) => (queryA) =>
    contextA.some(matchFunc(queryA));

let intersectable = (matchFunc = defaultMatch) => (contextA) => ({
    intersects: interFunc(matchFunc)(contextA)
});
module.exports = intersects;