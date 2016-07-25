let pipeline = (seed, ...funcs) => {
    return funcs.reduce((prev, next) => next(prev), seed);
};
module.exports = pipeline;