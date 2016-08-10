let funcValidator = (msg, fun) => {
    let func = (...args) => func(...args);
    func['message'] = msg;
    return func;
};

module.exports = funcValidator;