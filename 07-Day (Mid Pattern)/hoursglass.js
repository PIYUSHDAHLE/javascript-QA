// Question: Write a function to print an hourglass pattern of stars of height n.

function wow(n) {
    for (let i = n; i > 0; i--) {
        let row = ` `.repeat(n-i);
        for (let k = 1; k <= i; k++) {
         row += `* `;
        }
        console.log(row);
    }

    for (let g = 2; g <= n; g++) {
        let row2 = ` `.repeat(n-g);
        for (let b = 0; b < g; b++) {
            row2 += '* ';
        } 
        console.log(row2);
      }
}

wow(5)
/*
OUTPUT
* * * * * 
 * * * * 
  * * * 
   * * 
    * 
   * * 
  * * * 
 * * * * 
* * * * *
*/