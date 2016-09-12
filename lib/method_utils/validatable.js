let isValid = (vFunc) => (vState) => (arg) => vFunc(vState)(arg);
let notValid = (vFunc) => (vState) => (arg) => !vFunc(vState)(arg);
let objValid = (obj) => obj.isValid;
let objNotValid = (obj) => obj.notValid;

let operators = {
    isValid: objValid
    , notValid: objNotValid

};
let methods = (vFunc) => (vState) => ({
    isValid: isValid(vFunc)(vState)
    , notValid: notValid(vFunc)(vState)
});

let validatable = (vFunc) =>
    Object.assign(methods(vFunc), operators);

module.exports = validatable;