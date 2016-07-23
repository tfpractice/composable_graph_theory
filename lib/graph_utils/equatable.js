module.exports = (fun) => (host) => ({
    isEquatable: () => true,
    isEquivalent(altObj) {
        return fun(this) === fun(altObj);
    }
});