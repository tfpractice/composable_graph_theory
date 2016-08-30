let getWeight = (obj) => obj.weight();
let sameWeight = (context) => (arg) => getWeight(context) === getWeight(arg);

let weighable = (wFunc) => (state) => ({
    weight: () => wFunc(state),
    sameWeight: (arg) => wFunc(state) === getWeight(arg)
});
module.exports = weighable;
module.exports.getWeight = getWeight;
module.exports.sameWeight = sameWeight;