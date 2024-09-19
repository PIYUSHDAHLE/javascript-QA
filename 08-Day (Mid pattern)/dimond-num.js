// Question: Write a function that prints a diamond pattern of numbers.
/*
    1 
   1 2 
  1 2 3 
 1 2 3 4 
1 2 3 4 5 
 1 2 3 4 
  1 2 3 
   1 2 
    1 
*/

function dia(n) {
    for (let i = 1; i <= n; i++) {
      let row =` `.repeat(n-i)
      for (let k = 1; k < i; k++) {
        row +=  ` ${k}`
      }
      console.log(row);
    }
    for (let w = n; w > 0; w--) {
        let row2 =` `.repeat(n-w)
        for (let f = 1; f <= w; f++) {
        row2 += `${f} `
      }
      console.log(row2);
    }
    
}
    
dia(5)