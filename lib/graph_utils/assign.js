let assign = (stateHandler) => (state) => Object.assign({}, stateHandler(state));
module.exports = assign;