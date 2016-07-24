module.exports = (accessor) => ({
    compareToHost: (hostObj) => ({
        isEquivalent: (argObj) => accessor(hostObj) === accessor(argObj)
    })
});