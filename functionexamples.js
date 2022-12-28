// whenever we observe a similar kind of code repeated on our codebase. then we can define
// a function in which we will mention the repeated codes. Now whenever we are in need of that codes, we
// call that function.
// function runs only when called

// adding
const add = (a, b) => {
  let c = a + b;
  return c;
};

let sol1 = add(4, 5);
console.log(sol1);
let sol2 = add(10, 5);
console.log(sol2);
