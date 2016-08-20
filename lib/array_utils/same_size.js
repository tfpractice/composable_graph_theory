let comparitor = require('../func_utils').comparitor;

let sameSize = (queryA = []) =>
    (contextA = []) => comparitor((a) => a.length)(queryA)(contextA);

module.exports = sameSize;