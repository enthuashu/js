// In Javascript, sometimes we need codes/functions/variables
// in our file, which is present in anyother file.
// then we can import that code from that file, making sure that,
// that file is ready to be exported

// This can be achived easily using import and export statement

//importing statement where file is to be imported
const { internalfunction, internalfunctionsubtrac } = require("./file");

const sum = internalfunction(3, 7);
// console.log(sum);
const diff = internalfunctionsubtrac(10, 4);
console.log(diff);
