module.exports = (accessor) => ({
    compareToHost: (hostObj) => ({
        isEquivalent: (argObj) => {
            // console.log("hostObj", hostObj);
            // console.log("argObj", argObj);
            return accessor(hostObj) === accessor(argObj)
        }
    })
});