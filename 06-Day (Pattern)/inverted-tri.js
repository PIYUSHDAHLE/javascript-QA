// Question: Write a function that prints an inverted number triangle of height n.

function tri(n) {
    for (let i = n; i > 0; i--) {
      let row =``
      for (let k = 1; k <= i; k++) {
        row += ` ${k}`
    }  
    console.log(row);
    }
}

tri(5)

/*
OUTPUT
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 
*/