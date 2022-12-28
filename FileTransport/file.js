const internalfunction = (a, b) => {
  return a + b;
};
const internalfunctionsubtrac = (a, b) => {
  return a - b;
};

// exporting statement is used in file is to be exported (sender)
module.exports = { internalfunction, internalfunctionsubtrac };
