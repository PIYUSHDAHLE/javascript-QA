// Question: Write a function that prints an inverted right-angled triangle of & of height n.

function tri(n) {
    for (let i = n; i > 0; i--) {
        // let row = `${i}`
        let row = ``
        for (let h = 0; h < i; h++) {
        row+=' & '
    }
    console.log(row);
    }
}

tri(5)

// OUTPUT
// &  &  &  &  & 
// &  &  &  &
// &  &  &
// &  &
// &