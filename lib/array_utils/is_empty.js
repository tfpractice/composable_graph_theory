let isEmpty = (arr) => arr.length === 0;

let asMethod = (arr) => ({
    isEmpty: () => isEmpty(arr)
});
module.exports = isEmpty;