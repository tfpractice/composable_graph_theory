let pipeline = (seed, ...funcs) =>
    funcs.reduce((prev, next) => next(prev), seed);

module.exports = pipeline;