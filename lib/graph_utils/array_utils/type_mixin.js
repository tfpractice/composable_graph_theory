let newFrom = (instanceFunction) => (sArr = []) => (...args) => instanceFunction(Array.from(...args));
let of = (instanceFunction) => (sArr = []) => (...args) => instanceFunction(Array.of(...args));
let push = (instanceFunction) => (sArr = []) => (...args) => {
    sArr.push(...args);
    return instanceFunction(sArr)
};
let concat = (instanceFunction) => (sArr = []) => (...args) => instanceFunction(sArr.concat(...args));
let slice = (instanceFunction) => (sArr = []) => (...args) => instanceFunction(sArr.slice(...args));
let splice = (instanceFunction) => (sArr = []) => (...args) => instanceFunction(sArr.splice(...args));
let filter = (instanceFunction) => (sArr = []) => (...args) => (instanceFunction(sArr.filter(...args)));
let reassign = (instanceFunction) => (sArr = []) => (newVal = sArr) => instanceFunction(newVal);
let isEmpty = (sArr = []) => () => sArr.length === 0;
// let clear = (instanceFunction) => (sArr = []);
let copy = (instanceFunction) => (sArr = []) => () => instanceFunction(sArr.slice(0));
// let removeElement = (instanceFunction) => (sArr = []);
let excludeElement = (instanceFunction) => (sArr = []) => (exel) => instanceFunction(sArr.filter(e => e !== exel))


let typeMixin = (instanceFunction) => (sArr) => ({
    from: newFrom(instanceFunction)(sArr),
    of: of(instanceFunction)(sArr),
    push: push(instanceFunction)(sArr),
    concat: concat(instanceFunction)(sArr),
    slice: slice(instanceFunction)(sArr),
    splice: splice(instanceFunction)(sArr),
    filter: filter(instanceFunction)(sArr),
    reassign: (newVal = sArr) => instanceFunction(newVal),
    isEmpty: isEmpty(sArr),
    clear: () => splice(instanceFunction)(sArr)(0),
    copy: copy(instanceFunction)(sArr),
    excludeElement: excludeElement(instanceFunction)(sArr),
    removeElement: (argObj) => {
        let eqIdx = sArr.findIndex(el => el.isEquivalent(argObj));
        return eqIdx > -1 && splice(instanceFunction)(sArr)(eqIdx, 1);
    }

});
module.exports = typeMixin;