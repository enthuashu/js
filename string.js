// There are many kinds of datatypes
// But we will be studying only few
// 1. Number
// let a = 10; // number
// let b = "Ashutosh mishra"; // string

// let a = 10;
// let b = 20;
// console.log("e.g. of Number datatypes are ", a, b);

// console.log("Addition of a and b is ", a + b);
// console.log("Subtaction of a and b is ", a - b);
// console.log("Multiplication of a and b is ", a * b);
// console.log("Division of a and b is ", a / b);

// let email = "Ashu";
// let b = "Mishra";
// console.log(a + b);
// console.log(b.toLocaleLowerCase());
// console.log(b.toUpperCase());
// console.log(email.length);

let a = "I love my College MMMUT";

//getting index of a word in a string in its first occurence
let firstOccurence = a.indexOf("of");
//getting index of a word in a string in its last occurence
let lastOccurence = a.lastIndexOf("of");

//slicing a string or cutting a string between two indexes
let slicedpart = a.slice(0, 30);
// the resultant string obtaining from slicing is called substring
// slice and substring functions are exactly same in working, the only difference is substring accepts negative values too.

let b = "And this is not true";
// adding two strings
let c = a + b;

let e =
  "                        This is Ashu from Zefyron                                            ";
//getting length of string
// console.log(e.length);

//removing white spaces
console.log(e.trim());
