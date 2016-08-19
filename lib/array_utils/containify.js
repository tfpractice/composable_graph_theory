let containify = (cfunc) => (context) => ({
    contains: (query) => contains(cFunc(query))(context);
})
let contains = (cfunc) => (context) => context.some(cFunc);
module.exports = containify;