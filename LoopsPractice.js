// Uses of For Loop
// 1. whenever we want to repeat a given code a given number of then for loop is used
// 2.Whenver we want to print an array element
// 3. Whenever we want to implement a similar code/codes, which is to be updated,
//  after every iteration, we use for loop. We use the property of update in index to achive this updation.

//  e.g. Prininting for loop

// For loop has a property, because of which the index gets updated after every iteration.
// Now we use this property of for loop to achieve point number 3 above.
// const array1 = ["Ashutosh", "Tarang", "Kishan", "Rohan", "Nayana", "Rajesh"];
// // // // 0             1         2        3
// // console.log(array1[0]);
// // console.log(array1[1]);
// // console.log(array1[2]);
// // console.log(array1[3]);
// // console.log(array1[4]);
// // console.log(array1[5]);

// for (let index = 0; index < 5; index++) {
//   console.log(array1[index]);
// }

// console.log(2 * 1);
// console.log(2 * 2);
// console.log(2 * 3);
// console.log(2 * 4);
// console.log(2 * 5);
// console.log(2 * 6);
// console.log(2 * 7);
// console.log(2 * 8);
// console.log(2 * 9);
// console.log(2 * 10);
// for (let index = 1; index < 11; index++) {
//   console.log(2 * index);
// }

// let gpseries =  3,9,27,... and so on... r = 3, a =3... Ques complete this GP series upto 50 terms

// for (let index = 0; index < 50; index++) {
//   console.log(index);
//   console.log("ashu");
// }

let a = 3;
console.log(a); //3

//9

a = a * 3;
console.log(a); // 27

for (let i = 0; i < 51; i = i + 1) {
  a = a * 3;
  console.log(a); // 27
}
