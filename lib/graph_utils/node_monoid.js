let nodeMonoid = (label, data = {}) => ({
    value: {},
    state: {
        label, data
    }
});

module.exports = nodeMonoid;