let funcValidator = (msg, fun) => {
    let func = (...args) => fun(...args);
    func['message'] = msg;
    return func;
};

module.exports = funcValidator;