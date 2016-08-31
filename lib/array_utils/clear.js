let clear = (arr) => arr.splice(0) && arr;

let clearObj = (clFunc) => (context) => clFunc(context);

let clearAble = (clFunc) => (context) => ({
    clear: () => clearObj(clFunc)(context)
});

module.exports = clear;