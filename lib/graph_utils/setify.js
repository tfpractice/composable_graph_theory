let typify = require('./typify');
let baseTypify = require('./base_typify');
let validify = require('./validify');
let type_accessor = (obj) => obj.type();
let validityChecker = (obj) => obj.type() === obj.baseType.toString();
let base_accessor = (obj) => obj.toString();

let TypeValidator = (BaseType) => ({
    isValid(argObj) {
        return BaseType.isPrototypeOf(argObj);
    }
});