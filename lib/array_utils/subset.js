// let comparitor = require('../func_utils').comparitor;
let checkAll = require('./check_all');

let defaultMatch = (contextA) => (queryEl) =>
    contextA.some(e => e == queryEl);

let subset = (matchFunc = defaultMatch) =>
    (queryA = []) =>
    (contextA = []) => {
        // console.log("contextA", contextA);
        // console.log("***************");
        // console.log("queryA", queryA);
        // console.log(checkAll(matchFunc(contextA))(queryA));
        return checkAll(matchFunc(contextA))(queryA)
    };

let subFunc = (matchFunc) => (contextA) => (queryA) =>
    contextA.every(matchFunc(queryA));

let myMatch = (contextA) => (queryEl) =>
    contextA.some(e => e === query);

let subMix = (matchFunc = myMatch) => (contextA) => ({
    isSubset: subFunc(matchFunc)(contextA)
})

module.exports = subset;