let composeMixins2 = (...mixins) => (BaseClass) => {
    let thunks = mixins.map(mxn => mxn(BaseClass))
    return (sArr) => thunks.reduce((comp, thk) => Object.assign(comp, thk(sArr)), {});
};

let baseMixin = (BaseClass) => (sArr) => Object.assign(Array.from(sArr), type_maker(BaseClass), base_type_maker(BaseClass), validator(valid_condition(BaseClass)));

let arrayOf2 = (BaseClass) => (...mixins) => {
    let mods, addMixin, compVal, compKeys, construct, instance, vendor;
    mods = mixins;
    composeMixins(BaseClass)(...mods)

    compVal = (sArr) => composeMixins(BaseClass)(...mods)(sArr);
    compKeys = (sArr) => Object.keys(compVal(sArr));
    construct = (sArr = []) => {
        return Object.assign(Array.from(sArr), compVal(sArr))
    };
    instance = (sArr) => {
        return nonEnum(construct(sArr))(compKeys(sArr))
    }
    return instance;
};