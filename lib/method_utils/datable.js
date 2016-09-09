let data = (dFunc) => (dState) => dFunc(dState);
let getData = (obj) => obj.data();
let sameData = (obj) => obj.sameData;

let operators = {
    getData: getData,
    sameData: sameData
};

let methods = (dFunc) => (dState) => ({
    isDatable: () => true,
    data: () => data(dFunc)(dState),
    sameData: (arg) => dFunc(dState) === getData(arg)
});

let datable = (dFunc) => {
    return Object.assign(methods(dFunc), operators);
};

module.exports = datable;
module.exports.getData = getData;
module.exports.sameData = sameData;