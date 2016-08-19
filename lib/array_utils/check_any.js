let checkAny = (cFunc) => (context) => (context.some(cFunc));
module.exports = checkAny;