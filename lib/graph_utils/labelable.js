let LabelAble = {
    isLabelable: true,
    setLabel(lbl) {
        this.label = lbl;
    }
};
// let baseLabeler = (lbl) => this.label = lbl;

function baseLabeler(obj) {
    obj.label = 'default_label';
}

let Labelize = (obj, lFunc) => ({
    isLabelable: true,
    setLabel: (lFunc || baseLabeler)
});
let LabelizeState = (state, lFunc) => ({
    isLabelable: true,
    setLabel: (lbl) => state.label = lbl
    // label() {
    //     return this.label;
    // },
    // setLabel(...args) {
    //     this.label = lFunc.call(state, args)
    // }
});

let LCurry = obj => lFunc => ({
    isLabelable: true,
    setLabel: lFunc || baseLabeler
});
// let LabelCurry = (lFunc = baseLabeler) => (state = {}) => ({
//     isLabelable: true,
//     label: () => (state.label || state.setLabel()),
//     setLabel: (...args) => state.label = (lFunc) ? lFunc.call(null, ...args) : baseLabeler(state, 'default')
// });

let LabelCurry = (lFunc = baseLabeler) => ({
    // isLabelable: true,
    labeler: (state = {}) => ({
        isLabelable: true,
        label: () => lFunc(state),
        // setLabel: (...args) => state.label = (lFunc) ? lFunc.call(null, ...args) : baseLabeler(state, 'default')
    })
});

let instanceLabel = (state) => ({
    label: () => state.label
});
let labelMaker = (lFunc = baseLabeler) => ({
    isLabelable: true,
    label: (state)
})
let labelizeFunction = (fun) => (host) => ({
    isLabelable: () => true,
    label: () => fun(host)
});
module.exports = LabelAble;
module.exports.Labelize = Labelize;
module.exports.LCurry = LCurry;
module.exports.LabelCurry = LabelCurry;
module.exports.LabelizeState = LabelizeState;
module.exports.labelizeFunction = labelizeFunction;

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
//