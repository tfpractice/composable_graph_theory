let typedMixin = (instanceFrom) => (sArr) => methods = {
    from: (...args) => instanceFrom(Array.from(...args)),
    of: (...args) => instanceFrom(Array.of(...args)),
    push: (...args) => {
        sArr.push(...args);
        return instanceFrom(sArr);
    },
    push: (argObj) => {
        if (instanceFrom(sArr).isValid(argObj)) {
            sArr.push(argObj);
        }
        return instanceFrom(sArr);
    },
    concat: (...args) => instanceFrom(sArr.concat(...args)),
    slice: (...args) => instanceFrom(sArr.slice(...args)),
    splice: (...args) => instanceFrom(sArr.splice(...args)),
    reassign: (newVal = sArr) => arrayOf(BaseClass).instance(newVal),
    isEmpty: () => sArr.length === 0,
    filter: (...args) => (instanceFrom(sArr.filter(...args))),
    clear: () => {
        sArr.splice(0);
        return instanceFrom(sArr);
    },
    copy: () => instanceFrom(sArr.slice(0)),
    removeElement: (argObj) => {
        let eqIdx = sArr.findIndex(el => el.isEquivalent(argObj));
        return eqIdx > -1 && methods.splice(eqIdx, 1);
    }
};

module.exports = typedMixin;