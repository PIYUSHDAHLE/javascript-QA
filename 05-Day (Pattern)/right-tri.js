// Question: Write a function that prints a right-angled triangle pattern of stars of height n.

function tri(n) {
    for (let i = 0; i < n; i++) {
        let row = ''
        for (let k = 0; k <= i; k++) {
        row += ' * '
        }
        console.log(row);
    }
}

tri(7)

// OUTPUT
// * 
// *  *
// *  *  *
// *  *  *  *
// *  *  *  *  *
// *  *  *  *  *  *
// *  *  *  *  *  *  *