// Question: Write a function that takes a number and checks if it is positive, negative, or zero using if, else if, and else.

function checker(num){
    if(num>0){
          console.log(`${num} is Positive`);
        }
        else if(num<0){
        console.log(`${num} is Negative`);
    }
    else{
        console.log(`${num} is equal to zero`);
        }
}

checker(5); 
checker(-5);
checker(0);


// OUTPUT
// 5 is Positive
// -5 is Negative
// 0 is equal to zero