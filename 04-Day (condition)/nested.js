// Question: Write a nested for loop to print a 5x5 matrix of stars (*).

let num = 5;

for (let i = 1; i <= num; i++) {
  let row=``
  for (let k = 0; k < num; k++) {
    row += ` * `;
}
console.log(row);
}

// OUTPUT
// *  *  *  *  * 
// *  *  *  *  * 
// *  *  *  *  * 
// *  *  *  *  * 
// *  *  *  *  * 