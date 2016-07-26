let assignToObject = (obj = {}) => (...props) => Object.assign(obj, ...props);
module.exports = assignToObject;