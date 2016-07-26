const Utils = require('./graph_utils');
const labelize = Utils.labelize;
const equalize = Utils.equalize;
const datafy = Utils.datafy;
const typify = Utils.typify;
const curry_equality = Utils.curry_equality;
const pipeline = Utils.pipeline;
const liftAnswer = Utils.liftAnswer;
const actions = Utils.actions;
const assign = Utils.assign;
const modify = Utils.modify;
const mixin = Utils.mixin;

let label_accessor = (state) => (state.label);
let equal_accessor = (argObj) => argObj.label();
let data_accessor = (state) => state.data;
let type_accessor = (state) => 'Node'
let state_accessor = (stateObj) => stateObj.state;
let node_answer_fun = (stateObj) => stateObj.values;

let eq_checker = equalize(equal_accessor);

let label_maker = labelize(label_accessor);
let data_maker = datafy(data_accessor);
let type_maker = typify(type_accessor);
let compare_to_host = curry_equality(equal_accessor).compareToHost;

// via actions
let t_lift = liftAnswer(type_maker);
let d_lift = liftAnswer(label_maker);
let l_lift = liftAnswer(data_maker);
let e_lift = liftAnswer(compare_to_host, node_answer_fun);

let node_actions = actions([t_lift(), l_lift(), d_lift()], e_lift());


let nodePipeline = (state) => {
    return retNode = pipeline(assign(type_maker)(state), modify(label_maker)(state), modify(data_maker)(state), modify(compare_to_host))();
    // return retNode = pipeline(assign(type_maker)(state), modify(label_maker)(state), modify(data_maker)(state), modify(compare_to_host)(), mixin());
}


let Node = (label, data = {}) => {
    let iState = {
        label, data
    };
    let bState = {
        label, data
    };
    // let pres = pipeline((Object.assign({}, bState)), data_maker, type_maker, label_maker, (p) => compare_to_host(p));
    // console.log(pres.data);
    // return pres;
    // 
    let act_node = node_actions(iState);
    // console.log(act_node);
    let pipeNode = nodePipeline(bState);
    // console.log(pipeNode);
    return pipeNode;

    let nodeObj = Object.assign({}, label_maker(iState), data_maker(iState), type_maker(iState));
    nodeObj = Object.assign(nodeObj, compare_to_host(nodeObj));
    return nodeObj;
    return Object.assign({}, label_maker(iState), eq_checker(iState), data_maker(iState), type_maker(iState));
};


exports.makeNode = Node;