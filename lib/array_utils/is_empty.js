let isEmpty = (arr) => arr.length === 0;

let emptyable = (arr) => ({
    isEmpty: () => isEmpty(arr)
});
module.exports = isEmpty;