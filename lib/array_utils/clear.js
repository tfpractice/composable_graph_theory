let clear = (arr) => arr.splice(0) && arr;

let clearObj = obj => obj.clear();
let operators = {
    clear: clearObj
}

let methods = (clFunc = clear) => (context) => ({
    clear: () => clFunc(context)
});
let clearable = (clFunc) =>
    Object.assign(methods(clFunc), operators)

module.exports = clearable;