module.exports = (accessor) => ({
    compareToHost: (hostObj) => ({
        isEquivalent: (argObj) => {
            // console.log("hostObj", accessor(hostObj));
            // console.log("argObj", accessor(argObj));
            return accessor(hostObj) == accessor(argObj)
        }
    })
});