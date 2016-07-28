let identity = require('./identity');

let monadify = (resultFun, stateFun = identity) =>
    (...args) => (state) => {
        let res = resultFun([state, ...args]);
        let rState = stateFun ? stateFun(state) : res;
        return {
            result: res,
            state: rState
        };
    };

module.exports = monadify;