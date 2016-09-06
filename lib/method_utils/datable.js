let data = (dFunc) => (dState) => dFunc(dState);
let getData = (obj) => obj.data();
let sameData = (context) => (arg) => getData(context) === getData(arg);

let operators = (dFunc) => ({
    getData: getData,
    sameData: sameData
});

let methods = (dFunc) => (dState) => ({
    isDatable: () => true,
    data: () => data(dFunc)(dState),
    sameData: (arg) => dFunc(dState) === getData(arg)
});

let datable = (dFunc) => {
    return Object.assign(methods(dFunc), operators(dFunc));
};

module.exports = datable;
module.exports.getData = getData;
module.exports.sameData = sameData;
// module.exports = (dFunc) => (dState) => ({
//     data: () => dFunc(dState)
// });