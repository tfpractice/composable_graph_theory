let hookMethods = (sArr) => ({
    from: (...args) => instance(Array.from(...args)),
    of: (...args) => instance(Array.of(...args)),
    myMethod: () => 'this is my myMethod',
    push: (...args) => {
        sArr.push(...args);
        return instance(sArr);
    },
    concat: (...args) => instance(sArr.concat(...args)),
    splice: (...args) => instance(sArr.splice(...args)),
    toString: () => {
        console.log("toString was called");
        return sArr.toString();
    }
});
let handler = {
    get: (target, propKey, receiver) => {
        const origMethod = target[propKey];
        return (...args) => {
            let result = origMethod.apply(target, args);
            // let result = origMethod.apply(this, args);
            // console.log(propKey + JSON.stringify(args) + ' -> ' + JSON.stringify(result));
            // console.log("target", target);
            // console.log("result", result);
            return result;
        };
    },
    apply: function(target, thisArg, args) {
        console.log("called apply from handler")
        console.log(`${target}, ${thisArg}, ${args}`)
    }
};

let pushProx = (a = []) => new Proxy(a.push, {
    apply: function(target, thisArg, args) {
        console.log("called ", target);
        console.log(`${target}, ${thisArg}, ${args}`)
    }
});
let a7 = [7, 8, 9];
let px0 = pushProx(a7);
a7.push(0);
// console.log(px0(a7, 2));
// console.log(hookMethods([1, 2, 3]))
// let apx = (a = []) => {
//     let mypx = new Proxy(a, handler);
//     console.log('making a new proxy obj', mypx);
//     console.log(Object.getOwnPropertyNames(mypx));
//     return mypx;
// };

let mypx = new Proxy([1, 2, 3], handler);
console.log(mypx.push([3, 4]));
let makeProto = (BaseClass) => {
    let ptype = Object.create(Array.prototype, pMethods);
    return (elems = []) => Object.create(ptype);
};

let instance = (sArr = []) => Object.assign(Array.from(sArr), hookMethods(sArr));

let subArray = instance;
let subArray2 = (initArray = subArray()) => instance(initArray);

module.exports.subArray = subArray;
module.exports.SA2 = subArray2;
module.exports.instance = instance;