// Description: Create a function that prints a hollow triangle @ pattern of height n.

function tri(n) {
    for (let i = 1; i <= n; i++) {
        let row = ``;
        for (let j = 1; j <= i; j++) {
            if ( i === n || j === 1 || j === i) {
                row += `*`;  
            } else {
                row += ` `;  
            }
        }
        console.log(row);
    }
}

tri(5);

/*
OUTPUT
* 
* * 
*   * 
*     * 
* * * * * 
*/
