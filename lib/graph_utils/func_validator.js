let funcValidator = (errMsg) => (func) =>
    Object.assign((...args) => func(...args), {
        message: errMsg
    });

module.exports = funcValidator;