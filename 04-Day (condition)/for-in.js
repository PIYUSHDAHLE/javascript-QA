// Question: Write a for...in loop to iterate over an object and log its keys and values.

const detail ={
    naam : 'Piyush Dahle',
    age : 24,
    'blood group' : 'O+'
}

for (const key in detail) {
 console.log(`${key} = ${detail[key]}`);
}


// for (const key of detail) {
//  console.log(`${key} = ${detail[key]}`);
// } 

//when we use for of in object it wil throw an TypeError: detail is not iterable



// OUTPUT
// naam = Piyush Dahle
// age = 24
// blood group = O+