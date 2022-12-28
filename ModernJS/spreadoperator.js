const myarray1 = ["elem1", "elem2", "elem3", "elem4"];
const myarray2 = ["matt1", "matt2", "matt3", "matt4"];
// spread(...) operator is majorly used in array to quickly copy array elements
const combinedarray = [...myarray2, ...myarray1];
console.log(combinedarray);
