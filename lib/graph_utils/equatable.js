var Equatable = {
    isEquatable: true,
    isEquivalent(altObj) {
        throw ('abstract method, must be implemented');
    }
}

module.exports = Equatable;