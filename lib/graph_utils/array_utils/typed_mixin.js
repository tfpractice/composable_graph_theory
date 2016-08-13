let typeMixin = (instanceFunction = typeMixin(Array.from)) => (sArr) => methods = {
    from: (...args) => instanceFunction(Array.from(...args)),
    of: (...args) => instanceFunction(Array.of(...args)),
    push: (...args) => {
        sArr.push(...args);
        return instanceFunction(sArr);
    },
    concat: (...args) => instanceFunction(sArr.concat(...args)),
    slice: (...args) => instanceFunction(sArr.slice(...args)),
    splice: (...args) => instanceFunction(sArr.splice(...args)),
    reassign: (newVal = sArr) => instanceFunction(newVal),
    isEmpty: () => sArr.length === 0,
    filter: (...args) => (instanceFunction(sArr.filter(...args))),
    clear: () => {
        sArr.splice(0);
        return instanceFunction(sArr);
    },
    copy: () => instanceFunction(sArr.slice(0)),
    removeElement: (argObj) => {
        let eqIdx = sArr.findIndex(el => el.isEquivalent(argObj));
        return eqIdx > -1 && methods.splice(eqIdx, 1);
    }
};
module.exports = typeMixin;