let nonEnum = require('../graph_utils')
    .nonEnum;
let checkAny = require('./check_any');

let containify = (curriedQ) => (context) => ({
    contains: (query) => checkAny(curriedQ(query))(context)
});
let addMethod = (curriedQ) => (context) => Object.assign(context,
    containify(curriedQ)(context));
let hideMethod = (curriedQ) => (context) => nonEnum(addMethod(curriedQ)(
    context))('contains');

module.exports = containify;
module.exports.modify = addMethod;
module.exports.hideMethod = hideMethod;