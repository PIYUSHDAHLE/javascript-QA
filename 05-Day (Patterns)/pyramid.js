// Question: Write a function that prints a pyramid pattern of & of height n.

function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
      let row = ` `.repeat(n - i) + `* `.repeat(i);
      console.log(row);
    }
  }
  
  printPyramid(5);