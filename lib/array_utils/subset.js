// let comparitor = require('../func_utils').comparitor;
let checkAll = require('./check_all');

let defaultMatch = (contextA) => (queryEl) => contextA.some(e => e == queryEl);

let subset = (matchFunc = defaultMatch) =>
    (queryA = []) =>
    (contextA = []) => checkAll(matchFunc(contextA))(queryA);


module.exports = subset;