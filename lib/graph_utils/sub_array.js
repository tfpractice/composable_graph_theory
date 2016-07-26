// let subArray = () => Object.assign(Object.create(Array.prototype));
let subArray = () => Object.create(Array.prototype);
subArray.from = Array.from;
// let subArray = () => Object.assign({}, newArray);
module.exports = subArray;