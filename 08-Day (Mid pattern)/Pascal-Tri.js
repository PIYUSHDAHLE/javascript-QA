// Question: Write a function to print Pascal's triangle of height n.
/*
     1 
    1 1 
   1 2 1 
  1 3 3 1 
 1 4 6 4 1 
*/

function printPascalsTriangle(n) {
     let triangle = [];
   
     for (let i = 0; i < n; i++) {
       triangle[i] = [];
       triangle[i][0] = 1;
       for (let j = 1; j < i; j++) {
         triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
       }
       triangle[i][i] = 1;
     }
   
     for (let i = 0; i < triangle.length; i++) {
       console.log(' '.repeat(n - i) + triangle[i].join(' '));
     }
   }
   
   printPascalsTriangle(8);

   