// Question: Write a function that prints a diamond pattern of & of height 2n - 1.

function diamond(n) {
    for (let i = 0; i < n; i++) {
     let row = ' '.repeat(n-i) + ' &'.repeat(i)           
     console.log(row);
    }
}
function diamond2(n) {
    for (let i = n; i > 0; i--) {
     let row = ' '.repeat(n-i) + ' &'.repeat(i)           
     console.log(row);
    }
}

diamond(4)
diamond2(4)

// OUTPUT
//    &
//   & &
//  & & &
// & & & &
//  & & &
//   & &
//    &