// Question: Demonstrate string concatenation using both the traditional method (with +) and template literals.

let firstName = "Alice";
let lastName = "Johnson";
let age = 30;

// Traditional concatenation
let message1 = "Hi, I'm " + firstName + " " + lastName + " and I'm " + age + " years old.";

// Using template literals
let message2 = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;

console.log(message1);
console.log(message2);