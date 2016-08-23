let warbler = (x) => (y) => (x(y))(y);

module.exports = warbler;