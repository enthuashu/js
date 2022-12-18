// For Of loop is a special kind of for loop which is used specially
//  in case of array or similar data types.

// this for loop is used to access array elements one by one
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

const arr = [
  "Element 1",
  "Element 2",
  "Element 3",
  "Element 4",
  "Element 5",
  "Element 6",
  "Element 7",
];
// a similar kind of short for of loop can be achieved to do the same task
for (let candidate of arr) {
  if (candidate === "Element 3") {
    continue;
  }
  console.log(candidate);
}
// The variable a starts from first element of array and goes to last
// by updating its value to next element one by one
