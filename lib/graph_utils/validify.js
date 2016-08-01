module.exports = (argAccessor, hostAccessor = argAccessor) => (compFunc) => ({
    isValid: (arg) => argAccessor(arg) === compFunc()
});