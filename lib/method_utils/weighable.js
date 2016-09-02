let weight = (wFunc) => (tState) => wFunc(tState);
let getWeight = (wObj) => wObj.weight();
let sameWeight = (context) => (arg) => getWeight(context) === getWeight(arg);

let operators = (wFunc) => ({
    getWeight: getWeight,
    sameWeight: sameWeight
});
let methods = (wFunc) => (tState) => ({
    weight: () => wFunc(tState),
    sameWeight: (arg) => wFunc(tState) === getWeight(arg)
});

let weighable = (wFunc) => Object.assign(methods(wFunc), operators(wFunc));

module.exports = weighable;
module.exports.getWeight = getWeight;
module.exports.sameWeight = sameWeight;