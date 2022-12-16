// alpha        //beta      //gamma
let a = 1;

a = a + 5;
console.log(a); //6

a = a + 5;
console.log(a); //11

a = a + 5;
console.log(a); //16

a = a + 5;
console.log(a); // 21
a = a + 5;
console.log(a); // 21
a = a + 5;
console.log(a); // 21
a = a + 5;
console.log(a); // 21
a = a + 5;
console.log(a); // 21

// console.log("Looping completed and came out of For loop bracket");

// in the beginning, John starts from Top-> Bottom
// At first, John reaches alpha and stores values of starting index which is zero // this happens only once in the beginning
// then John reaches beta and checks whether the given condition
// given by beta is true or not,

// given condition by beta is true ==>
// John runs the code inside the bracket, and after running the code of bracket, John reaches to gama and
// increment its value by one then again john checks the condition at beta and the cycle continues
// till the beta condition becomes false

// else false,==> john comes of the bracket

// for (let index = 0; index < 7; index = index + 1) {
//   console.log("the current value of index is", index);
// }

// console.log("Hello after the loop");

// Uses of For Loop
// 1. to print/access all the elements of array

// let a = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6", "Post 7"];
// console.log(a.length);
// for (let index = 0; index < a.length; index++) {
//   console.log("The element at ", index, "position of array is ", a[index]);
// }

// whenever we want to print a sentence that consists of one or more variables
//1. then we seperate them by commas
//2. Use template literals
// Rule 1=> `` to enclose whole sentence
// Put variables inside ${variable}

// let staticSentence = "Hello this is Ashutosh!";
// console.log(staticSentence);

// let dynamicSentence = "Hello I am from ";

// let collegename = "BBD";
// let CGPA = 8.0;
// // First way
// // console.log("Hello I am from ", collegename);

// //second way
// console.log(`Hello I am from ${collegename} and my current cgpa is ${CGPA}`);
