// Question: Add both single-line and multi-line comments to a piece of code to explain its functionality.

// This function checks if a number is positive or negative
function checkSign(num) {
    /* If the number is greater than 0, it is positive.
       Otherwise, it is negative or zero. */
    return num > 0 ? 'Positive' : 'Negative or Zero';
  }
  
  console.log(checkSign(10));  // Positive