let checkAny = require('./check_any');

let containify = (curriedQ) => (context) => ({
    contains: (query) => checkAny(curriedQ(query))(context)
});
module.exports = containify;