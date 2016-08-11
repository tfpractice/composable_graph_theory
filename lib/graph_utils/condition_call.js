let checker = require('./checker');

let halt = (...errs) => {
    throw new Error(...errs);
}

let conditionCall = (...validators) => (func) =>
    (arg) => {
        let errs = (checker(...validators)(arg));
        return (errs.length === 0) ? func(arg) : halt(...errs);
    }

module.exports = conditionCall;