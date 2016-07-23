var Equatable = {
    isEquatable: true,
    isEquivalent(altObj) {
        throw ('abstract method, must be implemented');
    }
}

function absEq(altObj) {
    throw ('abstract method, must be implemented');
}

let Equalize = (obj, eqFun) => ({
    isEquatable: true,
    isEquivalent: eqFun || absEq
});
let EqualizeState = (state) => ({
    isEquatable: true,
    isEquivalent: (argObj) => argObj === state
});

let eqCurry =
    obj =>
    eqFun => ({
        isEquatable: true,
        isEquivalent: eqFun || absEq
    });



// let EquivCurry = (eqFun = absEq) => ({
//     // // isLabelable: true,
//     equator: (state = {}) => ({
//         isEquatable: true,
//         isEquivalent(argObj) {
//             // return eqFun.apply(null, argObj) == eqFun.apply(null, state);
//             return eqFun(argObj)() == eqFun(state)
//         }
//     })
// });
// 


let EquivCurry = (eqFun = absEq) => ({
    // // isLabelable: true,
    // equator: (state = {}) => ({
    isEquatable: true,
    isEquivalent(argObj) {
        // return eqFun.call(this, argObj) == eqFun.call(argObj, this);
        // console.log(eqFun);
        return eqFun(argObj) == eqFun(this)
    }
    // })
});


let equalizeFunction = (fun) => (host) => ({
    // isEquivalent: (altObj) => fun(obj) == fun(altObj)
    isEquivalent: (altObj) => fun(host) === fun(altObj)
});

module.exports = Equatable;
module.exports.Equalize = Equalize;
module.exports.EqualizeState = EqualizeState;
module.exports.eqCurry = eqCurry;
module.exports.EquivCurry = EquivCurry;
module.exports.equalizeFunction = equalizeFunction;
// 
// 
// 
// 
// 
// 
// 
// 
// 
//