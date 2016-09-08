let asArray = (funcs, final) => (seed) => {
    let init = {
        values: [],
        state: seed
    };
    let intermediate = funcs.reduce((sObj, act) => {
        let currResult = act(sObj.state);
        let values = sObj.values.concat(currResult.result);
        return {
            values: values,
            state: sObj.state
        };
    }, init);
    return final(intermediate.values, intermediate.state);
};

let asObject = (funcs, final) => (seed) => {
    let init = {
        composite: {},

    };
    let intermediate = funcs.reduce((sObj, act) => {
        let currResult = act(sObj.state);
        // let currResult = act(seed);
        let composite = Object.assign(sObj.composite, currResult);
        // let values = sObj.values.concat(currResult.result);
        return {
            composite: composite,
            state: sObj.state
        };
    }, init);
    return final(intermediate.composite, intermediate.state);
}
module.exports.asArray = asArray;
module.exports.asObject = asObject;