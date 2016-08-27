let validatorMixin = (valFunc) => {
    let unaryFuncs = {
        isValid: (elem) => valFunc(elem) === true,
        // type:()
    };

    curryFuncs = (context = []) => unaryFuncs;
    return Object.assign(curryFuncs, unaryFuncs);

}

module.exports = validatorMixin;