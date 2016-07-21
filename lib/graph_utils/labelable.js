var LabelAble = {
    isLabelable: true,
    setLabel(lbl) {
        this.label = lbl;
    }
}

let makeLableable = (obj) => Object.assign(obj, LabelAble);

module.exports = LabelAble;