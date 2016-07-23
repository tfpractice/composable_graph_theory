module.exports = (fun) => (host) => ({
    isLabelable: () => true,
    label: () => fun(host)
});