module.exports.actions = require('./actions');
module.exports.are_equal = require('./equality_checker');
module.exports.assign = require('./assign');

module.exports.checker = require('./checker');
module.exports.conditionCall = require('./condition_call');
module.exports.curry_equality = require('./curry_equality');

module.exports.equalize = require('./equatable');
module.exports.funcValidator = require('./func_validator');

module.exports.liftAnswer = require('./lift_answer');
module.exports.mixin = require('./mixin');
module.exports.modify = require('./modify');
module.exports.nonEnum = require('./non_enum');
module.exports.pipeline = require('./pipeline');
module.exports.Setable = require('./setable');
module.exports.setify = require('./setify');
module.exports.subArray = require('./sub_array');
let MethUtils = require('../method_utils');

module.exports.baseTypify = MethUtils.baseTypify;
module.exports.datafy = MethUtils.datafy;
module.exports.labelize = MethUtils.labelize;
module.exports.typify = MethUtils.typify;
module.exports.validify = MethUtils.validify;