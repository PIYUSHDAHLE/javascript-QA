// Question: Write a function to print Floyd's triangle up to n rows.

function tri(n) {
    let num = 1;
for (let u = 1; u <= n; u++) {
    let row = ``;
    for (let j = 1; j <= u; j++) {
        row += num + ` `;
        num++;
    }
    console.log(row);
    
}
}

tri(5)

/*
OUTPOUT
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
*/