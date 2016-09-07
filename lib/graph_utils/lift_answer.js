let lift_result = (resultFun, stateFun) =>
    (...args) => (state) => {
        let res = resultFun([state, ...args]);
        let rState = stateFun ? stateFun(state) : res;
        return {
            result: res,
            state: rState
        };
    };

module.exports = lift_result;