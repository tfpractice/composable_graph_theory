let halt = (errs) => {
    throw new Error(...errs);
}

let conditionCall = (...validators) => (func) =>
    (arg) => {
        let errors = validators.reduce((msgs, vFun) =>
            msgs = (!vFun(arg)) ? msgs.concat(vFun.message) : msgs, []);
        if (errors.length > 0) {
            halt(errors);
        } else {
            return func(arg)
        }

        // return errors.length === 0 && func(...args);
    }

module.exports = conditionCall;