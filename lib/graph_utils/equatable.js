var Equatable = {
    isEquatable: true,
    isEquivalent: function(altObj) {
        throw ('abstract method, must be implemented');
    }
}

module.exports = Equatable;