let SetMethods = {
    isValid(argObj) {
        return argObj instanceof BaseType;
    },
    isEmpty() {
        return this.length === 0;
    }
};

let TypeValidator = (BaseType) => ({
    isValid(argObj) {
        return BaseType.isPrototypeOf(argObj);
    }
});

let subArray = () => Object.create(Array);

let setifyType = (BaseType) => {
    return Object.assign(subArray(), TypeValidator(BaseType), SetMethods);
}

exports.setifyType = setifyType;