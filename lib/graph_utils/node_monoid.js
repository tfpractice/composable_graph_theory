let nodeMonoid = (label, data = {}) => ({
    value: null,
    state: {
        label, data
    }
});

module.exports = nodeMonoid;