// non-argument based function
const realgehupisana = () => {
  console.log("gehupisana in progress");
  return "Gehupisana completed";
};

// let jhola = realgehupisana(); // non-argument based function call
// non-argument based function does not required any input when called

const grindingmatching = (element) => {
  if (!element) {
    return "No element";
  }
  console.log(element, "pisana in progress");
  return `${element} completed`;
};

// argument based function require some input variables as arguments
// while function call

const pisachana = grindingmatching("chana");
console.log(pisachana);
// const aata = grindingmatching("gehu");
// console.log(aata);
// const pisachawal = grindingmatching("chawal");
// console.log(pisachawal);

const data = grindingmatching();
console.log(data);
// you can pass as many arguments as you want while calling a function, just make sure , those
// calling arguments are predefined in functions
