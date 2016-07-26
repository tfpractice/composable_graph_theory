let actions = (acts, done) => (seed) => {
    let init = {
        values: [],
        state: seed
    }
    let intermediate = acts.reduce((stateObj, act) => {
        let result = act(stateObj.state);
        let vals = stateObj.values.concat(result.answer);
        return {
            values: vals,
            state: result.state
        }
    }, init);
    // console.log("-----intermediate-----", intermediate);
    return done(intermediate.values, intermediate.state);
};

module.exports = actions;