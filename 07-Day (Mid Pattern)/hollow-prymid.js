// Question: Write a function that prints a hollow pyramid pattern of height n.

function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        let row = ` `.repeat(n-i);
        for (let k = 1; k <= i; k++) {
         if (i===n||k===1||k===i) {
            row += ` ${i}`;
         } else {
            row += `  `;           
         }
        }    
        console.log(row);
    }
}
pyramid(5)

// OUTPUT
//     1
//    2 2
//   3   3
//  4     4
// 5 5 5 5 5