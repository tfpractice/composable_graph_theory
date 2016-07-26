module.exports = (accessor) => (host, hostCondition = true) => ({
    isValid: (param) => accessor(param) === hostCondition
});