const Utils = require('./graph_utils');
var labelize = Utils.labelize;
var equalize = Utils.equalize;


let label_accessor = (state) => (state.label);
let equal_accessor = (argObj) => argObj.label();
let data_accessor = (state) => state.data;

let label_maker = labelize(label_accessor);
let eq_checker = equalize(equal_accessor);
let data_maker = (state) => ({
    data: () => data_accessor(state)
});





let Node = (label, data = {}) => {
    let iState = {
        label, data
    };
    return Object.assign({}, label_maker(iState), eq_checker(iState), data_maker(iState));


};

exports.makeNode = Node;
// exports.Node = "lol"