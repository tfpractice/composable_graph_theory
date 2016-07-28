const Utils = require('./graph_utils');
const labelize = Utils.labelize;
const equalize = Utils.equalize;
const datafy = Utils.datafy;
const typify = Utils.typify;
const curry_equality = Utils.curry_equality;
const pipeline = Utils.pipeline;
const modify = Utils.modify;
const mixin = Utils.mixin;

const identity = Utils.identity;
const liftAnswer = Utils.liftAnswer;
const actions = Utils.actions;

let label_accessor = (state) => (state.label);
let equal_accessor = (argObj) => argObj.label();
let data_accessor = (state) => state.data;
let type_accessor = (state) => 'Node'

let label_maker = labelize(label_accessor);
let data_maker = datafy(data_accessor);
let type_maker = typify(type_accessor);
let compare_to_host = curry_equality(equal_accessor).compareToHost;

let t_lift = liftAnswer(type_maker);
let d_lift = liftAnswer(data_maker);
let l_lift = liftAnswer(label_maker);
let node_lift = liftAnswer((state) => {}, (state) => {})
let mix_lift = liftAnswer(mixin(), mixin());
// let term_lift= liftAnswer(mixin({})([(type_maker)(state),(label_maker)(state),(data_maker)(state)]))
// let comp_lift= liftAnswer(compare_to_host, )
let actNode = actions([t_lift(), l_lift(), d_lift()], (vals, state) => pipeline(mixin({})(...vals)));

let nodePipeline = (state, nodeObject = {}) => pipeline(mixin(nodeObject)((type_maker)(state)), modify(label_maker)(state), modify(data_maker)(state), modify(compare_to_host)(nodeObject))

let Node = (label, data = {}) => {
    let iState = {
        label, data
    };
    let newNode = {};
    let aNode = actNode(iState);
    // console.log(aNode);
    return nodePipeline(iState);
};
Node.toString = function() {
    return "Node";
};
module.exports = Node;