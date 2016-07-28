let Monad = () => {
    let mixin = {};
    let unit = (val) => {
        let monad = {
            bind: (func, ...args) => func(val, ...args)
        }
        unit.lift = (funcName, func) => {
            monad[funcName] = (...args) => unit(monad.bind(func, ...args));
            // unit(val)[funcName] = (...args) => unit(unit(val).bind(func, ...args));
            return unit;
        }
        return monad;
    };
    return unit;
}

let nodeMonoid = (label, data = {}) => ({
    value: {},
    state: {
        label, data
    }
});
let nodeState = Monad();
nodeState.lift('data', (state) => state.data)
let datafy = (accessor) => (state) => ({
    data: () => accessor(state)
});
let identity = (obj) => obj;




module.exports.Monad = Monad;