let checkAny = (cFunc) => (context) => {
    // console.log(context);
    return context.some(cFunc)
};
module.exports = checkAny;