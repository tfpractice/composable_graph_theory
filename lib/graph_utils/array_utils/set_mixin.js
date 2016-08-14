let setMixin = (instanceFunction) => (sArr = []) => {
    let methods = {
        contains: (argObj) => (sArr).some(el => el.isEquivalent(argObj)),
        hasSameSize: (altArray) => sArr.length === altArray.length,
        isSubset: (altArray) => sArr.every(myObj => instanceFunction(altArray).contains(myObj)),
        isEquivalent: (altArray) => methods.hasSameSize(altArray) && methods.isSubset(altArray),
        findEquivalentElement: (argObj) => sArr.find(el => el.isEquivalent(argObj)),
        intersects: (altArray) => altArray.some(currEl => methods.contains(currEl)),
        intersection: (altArray) => instanceFunction(sArr).filter(currEl => instanceFunction(altArray).contains(currEl)),
        hasDistinctElements: (altArray) => sArr.some(myObj => !instanceFunction(altArray).contains(myObj)),
        difference: (altArray) => instanceFunction(sArr).filter(n => !instanceFunction(altArray).contains(n)),
        union: (altArray) => instanceFunction(sArr).concat(...methods.difference(altArray)),
        unionize: (altArray) => {
            sArr.concat(...methods.difference(altArray));
            return sArr;
        },
        push: (argObj) => {
            if (instanceFunction(sArr).isValid(argObj) && !methods.contains(argObj)) {
                sArr.push(argObj);
            }
            return instanceFunction(sArr);
        },
    }
    return methods
};
module.exports = setMixin;