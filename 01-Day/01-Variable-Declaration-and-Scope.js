// Question: Declare three variables using var, let, and const. Try reassigning values to each of them and note the differences.

let a = 10;
var b = 20;
const c = 30;

console.log(`1st time = a : ${a}, b : ${b} and c : ${c} `);
a = 100;
b = 200;
// c = 300; //it will throw the error (TypeError: Assignment to constant variable.)


console.log(`2nd time = a : ${a}, b : ${b} and c : ${c} `);
