let nonEnum = require('../graph_utils').nonEnum;
let checkAny = require('./check_any');
// context.some(curriedQ(query));
let contains = (curriedQ) => (context) => (query) =>
    context.some(curriedQ(query));

let containify = (curriedQ) => (context) => ({
    contains: (query) => context.some(curriedQ(query))

});
let addMethod = (curriedQ) => (context) => Object.assign(context,
    containify(curriedQ)(context));

let hideMethod = (curriedQ) => (context) => nonEnum(addMethod(curriedQ)(
    context))('contains');

let containable = (cFunc) => (context) => ({
    contains: contains(cFunc)(context)
});

module.exports = containify;
module.exports.modify = addMethod;
module.exports.hideMethod = hideMethod;