// For Of loop is a special kind of for loop which is used specially
//  in case of array or similar data types.

// this for loop is used to access array elements one by one
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// For of loop is similar as, array mapping, array find

const practicearr = [
  "Element 1",
  "Element 2",
  "Element 3",
  "Element 4",
  "Element 5",
  "Element 6",
  "Element 7",
];
// a similar kind of short for of loop can be achieved to do the same task
// for (let candidate of practicearr) {
//   console.log(candidate, " of for of loop");
// }
// The variable a starts from first element of array and goes to last
// by updating its value to next element one by one

// array mapping
// arrayname.map((candidate)=>{

// })
// practicearr.map((candidate) => {
//   console.log(candidate, " of mapping");
// });

// array find
// const findedelement = practicearr.find((candidate) => {
//   return candidate === "Element 4";
// });

// console.log(findedelement);
