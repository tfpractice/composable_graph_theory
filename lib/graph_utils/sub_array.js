// let subArray = () => Object.assign(Object.create(Array.prototype));
let subArray = () => Object.create(Array.prototype, {
    from: {
        value: Array.from
    },
    of: {
        value: Array.of
    }
});
// subArray.from = Array.from;
// Object.assign(subArray, Array.from);
console.log(subArray().prototype);
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(subArray()));
console.log(Object.keys(Array));
console.log(Object.keys(subArray));
// let subArray = () => Object.assign({}, newArray);
module.exports = subArray;