let validify = require('./validify');
let eq_validator = (accessor) => (state) => (argObj) => ({

    validify(fun(this) == fun(argObj))
});