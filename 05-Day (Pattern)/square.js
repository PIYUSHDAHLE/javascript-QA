// Question: Write a function that prints a square pattern of size n.

function sqr(n) {
    for (let i = 1; i <= n; i++) {
        // let row = ` ${i} `
        let row = ``
        for (let a = 0; a < n; a++) {
            row += " $ "
        }
        console.log(row);
    }
}

sqr(5)


// OUTPUT
// $  $  $  $  $ 
// $  $  $  $  $
// $  $  $  $  $
// $  $  $  $  $
// $  $  $  $  $