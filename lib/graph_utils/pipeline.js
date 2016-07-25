let pipeline = (seed, ...funcs) => {
    return funcs.reduce((prev, next) => {

        let res = next(prev)
            // console.log(res.toString());
        return res;
    }, seed);
};
module.exports = pipeline;