module.exports = (seed, funcs) => {
    let ret = {};
    funcs.forEach(f => Object.assign(ret, f(seed)));
    return ret;
}