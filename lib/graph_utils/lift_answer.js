let lift_answer = (answerFun, stateFun) =>
    (...args) => (state) => {
        let ans = answerFun([state, ...args]);
        let rState = stateFun ? stateFun(state) : ans;
        // console.log("rState", rState);
        return {
            answer: ans,
            state: rState
        };
    };

module.exports = lift_answer;

// return {state: node, answer: node}
// 
// 
// liftAnswer(mixin({})([(type_maker)(state),(label_maker)(state),(data_maker)(state)]))