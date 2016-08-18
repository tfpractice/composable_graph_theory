let nodify = (nFunc) => (state) => ({
    nodes: () => nFunc(state)
})

module.exports = nodify;