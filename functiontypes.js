// Functions are of two types on the basis of returning property
// 1. Non Retuning functions, which just perform the task assigned and return nothing at the end
//2. Returning functions, do the task assigned and also return the result

// Returning functions ends with the keyword "return data;" which return the result,
//  whereas non-returning doesn't return anything

// While calling returning functions, we need to store the returing value of the function in a variable,
//  whereas , non-returning doesn't need such variable

//returning
const realgehupisana = () => {
  console.log("gehupisana in progress");
  return "Gehupisana completed";
};

let jhola = realgehupisana();
console.log(jhola);
