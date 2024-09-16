// Question: Write a function that prints a number triangle pattern of height n.

function tri(n) {
    for (let i = 1; i<=n; i++) {
        let row = ``;
        for (let k = 1; k <= i; k++) {
            row += `${k}`
        }
        console.log(row);
    }
}

tri(6)

// OUTPUT
// 1
// 12
// 123
// 1234
// 12345
// 123456