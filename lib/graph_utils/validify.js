module.exports = (argAccessor) => (compFunc) => ({
    isValid: (arg) => argAccessor(arg) === compFunc()
});