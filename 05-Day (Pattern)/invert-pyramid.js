// Question: Write a function that prints an inverted pyramid pattern of stars of height n.
function ans(n) {
    for (let i = n; i > 0; i--) {
        row = ` `.repeat((n-i)+1)+` * `.repeat(i) 
        console.log(row);
        
    }
}

ans(5)

// OUTPUT
// *  *  *  *  * 
// *  *  *  *
//  *  *  *
//   *  *
//    *