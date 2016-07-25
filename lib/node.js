const Utils = require('./graph_utils');
const labelize = Utils.labelize;
const equalize = Utils.equalize;
const datafy = Utils.datafy;
const typify = Utils.typify;
const curry_equality = Utils.curry_equality;

let label_accessor = (state) => (state.label);
let equal_accessor = (argObj) => argObj.label();
let data_accessor = (state) => state.data;
let type_accessor = (state) => 'Node'

let label_maker = labelize(label_accessor);
let eq_checker = equalize(equal_accessor);
let data_maker = datafy(data_accessor);
let type_maker = typify(type_accessor);
let compare_to_host = curry_equality(equal_accessor).compareToHost;

// 






let pipeline = (seed, ...funcs) => {
    // console.log(seed);
    // console.log(funcs);
    return funcs.reduce((prev, next) => next(prev), seed);

    // return funcs.reduce((prev, next) => Object.assign(prev, next(prev)), seed);
};
// pi

let Node = (label, data = {}) => {
    let iState = {
        label, data
    };
    let bState = {
        label, data
    };
    let pres = pipeline((Object.assign({}, bState)), data_maker, type_maker, label_maker, (p) => compare_to_host(p));
    // console.log(pres.data);
    // return pres;
    let nodeObj = Object.assign({}, label_maker(iState), data_maker(iState), type_maker(iState));
    nodeObj = Object.assign(nodeObj, compare_to_host(nodeObj));
    return nodeObj;
    // return Object.assign({}, compare_to_host(label_maker(iState)), data_maker(iState), type_maker(iState));
    return Object.assign({}, label_maker(iState), eq_checker(iState), data_maker(iState), type_maker(iState));
};

exports.makeNode = Node;