// Question: Write a function that prints a number triangle pattern of height n.

function nt(n) {
    for (let i = 1; i <= n; i++) {
        let row = `${i}`.repeat(i)
        console.log(row);
        
    }
}

nt(5)

// OUTPUT
// 1
// 22
// 333
// 4444
// 55555