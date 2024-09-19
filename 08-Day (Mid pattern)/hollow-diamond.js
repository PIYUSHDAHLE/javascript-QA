// Question: Write a function that prints a hollow diamond pattern of stars.

/*
    *    
   * *   
  *   *  
 *     * 
*       * 
 *     * 
  *   *  
   * *   
    *    
*/

function hollow(n) {

    for (let i = 1; i < n; i++) {
        let row = ` `.repeat(n-i);
        for (let h = 1; h <= i; h++) {
            if (h === 1|| h === n || i===h ) {
                row += ` *`;
            } else {
                row+=`  `
            }
        }
        console.log(row);
    }
    
    for (let g = n; g > 0; g--) {
        let row2 = ` `.repeat(n-g);
        for (let d = 1; d <= g; d++) {
            if (d === 1|| d === n || g === d ) {
                row2 += ` *`;
            } else {
                row2+=`  `
            }
        }
        console.log(row2);
    }
    
}

hollow(5);