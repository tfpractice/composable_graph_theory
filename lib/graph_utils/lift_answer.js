let lift_answer = (answerFun, stateFun) =>
    (...args) => (state) => {
        let ans = answerFun([state, ...args]);
        let rState = stateFun ? stateFun(state) : ans;
        return {
            answer: ans,
            state: rState
        };
    };

module.exports = lift_answer;