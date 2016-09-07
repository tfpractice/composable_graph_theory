let liftResult = (resFunc, sFunc) => (...args) => (state) => {
    let res = resFunc([state, ...args]);
    let rState = sFunc ? sFunc(state) : res;
    return {
        result: res,
        state: rState
    };
};

module.exports = liftResult;