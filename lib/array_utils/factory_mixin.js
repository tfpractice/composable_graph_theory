let wrappers = require('./native_override');
// let clear = require('./clear');
// let copy = require('./copy');
// let removeElement = require('./native_override');
let identity = (x) => x;

let factoryMixin = (spawn = identity) => {
    let clear = (spawn) => (sArr = []) => {
        sArr.length = 0;
        return spawn(sArr);
    }

    let copy = (spawn) => (sArr = []) => () => spawn(
        sArr.slice(0));
    // 
    // let removeElement = (spawn) => (argObj) => {

    //     let eqIdx = sArr.findIndex(el => el.isEquivalent(argObj));
    //     return eqIdx > -1 && splice(spawn)(sArr)(eqIdx,
    //         1);
    // };
    let excludeElement = (spawn) => (sArr = []) => (exel) =>
        spawn(sArr.filter(e => e !== exel))

    let unaryFuncs = {
        concat: wrappers.concatOverride(spawn),
        slice: wrappers.sliceOverride(spawn),
        splice: wrappers.spliceOverride(spawn),
        filter: wrappers.filterOverride(spawn),
        // clear: clear(spawn),
        // copy: copy(spawn),
        // excludeElement: excludeElement(spawn)

    };
    let mutationFuncs = {
        clear: clear(spawn),
        copy: copy(spawn),
        excludeElement: excludeElement(spawn)
    }
    let isEmpty = (sArr = []) => () => sArr.length === 0;

    curryFuncs = (context = []) =>
        Object.keys(unaryFuncs)
        .reduce(
            (curried, fName) => Object.assign(curried, {
                [fName]: unaryFuncs[fName](context)
            }), {});

    return Object.assign(curryFuncs, unaryFuncs, mutationFuncs);

}

module.exports = factoryMixin;