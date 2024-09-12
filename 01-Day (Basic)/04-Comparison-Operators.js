// Question: Write a function that takes two numbers as inputs and returns whether the first is greater than, less than, or equal to the second.

function compare(n1,n2) {
    if (n1>n2) {
        console.log(`${n1} is greater then ${n2}`);
    } else if (n1<n2) {
        console.log(`${n1} is less then ${n2}`);
    } else {
        console.log(`${n1} is equal to ${n2}`);
    }
}

compare(11,22);
compare(2,2);
compare(20,3);
