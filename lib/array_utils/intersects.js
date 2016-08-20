let checkAny = require('./check_any');

let defaultMatch = (contextA) =>
    (queryEl) => contextA.some(e => e == queryEl);


let intersects = (matchFunc = defaultMatch) =>
    (contextA) =>
    (queryA) => checkAny(matchFunc(contextA))(queryA)


module.exports = intersects;