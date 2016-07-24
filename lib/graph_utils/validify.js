module.exports = (accessor) => (host) => ({
    isValid: (param) => accessor(param) === true
});