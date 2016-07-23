let equalizeFunction = (fun) => (host) => ({
    isEquatable: () => true,
    isEquivalent(altObj) {
        return fun(this) === fun(altObj);
    }
});
module.exports.equalizeFunction = equalizeFunction;