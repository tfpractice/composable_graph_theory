const MethUtils = require('./method_utils');
const factory = MethUtils.factory;
const labelize = MethUtils.labelize;
const equalize = MethUtils.equalize;
const datafy = MethUtils.datafy;
const typify = MethUtils.typify;

// state accessors
let typeAccessor = (state) => 'Node';
let dataAccessor = ({ label = '', data = {} }) => data;
let labelAccessor = ({ label = '', data = {} }) => label;
// let equalAccessor = ({ label: hostL = '' }) => ({ label: argL = '' }) =>
//     hostL === argL;

// methodMakers
let typeMaker = typify(typeAccessor);
let dataMaker = datafy(dataAccessor);
let labelMaker = labelize(labelAccessor);

let equalAccessor = (state) => labelMaker(state).sameLabel;
let eqMaker = equalize(equalAccessor);

let Node = factory(typeMaker, dataMaker, labelMaker, eqMaker);

module.exports = Node;
