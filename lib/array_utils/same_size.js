let comparitor = require('../func_utils').comparitor;
let getSize = (a) => a.length;

let hasSameSize = (contextA) => (queryA) =>
    comparitor(getSize)(contextA)(queryA);

let asMethod = (contextA) => ({
    sameSize: hasSameSize(contextA)
});

let sameSize = (queryA = []) =>
    (contextA = []) => comparitor((a) => a.length)(queryA)(contextA);

module.exports = sameSize;
// module.exports = asMethod;
// module.exports.sameSize = sameSize;