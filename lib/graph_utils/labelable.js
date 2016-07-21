let LabelAble = {
    isLabelable: true,
    setLabel(lbl) {
        this.label = lbl;
    }
}
let baseLabeler = (lbl) => this.label = lbl;

let Labelize = (obj, lFunc) => ({
    isLabelable: true,
    setLabel: (lFunc || baseLabeler)
});
let LabelizeState = (state) => ({
    isLabelable: true,
    setLabel: (lbl) => state.label = lbl
});

let LCurry = obj => lFunc => ({
    isLabelable: true,
    setLabel: lFunc || baseLabeler
});


module.exports = LabelAble;
module.exports.Labelize = Labelize;
module.exports.LCurry = LCurry;
module.exports.LabelizeState = LabelizeState;