// Question: Write a function that takes a day of the week as a number (0 for Sunday, 1 for Monday, etc.) and returns the day name using a switch statement.

function enterCode(day) {
    switch (day) {
        case 0:
            console.log(`Sunday`);
            break;
        case 1:
            console.log(`Monday`);
            break;
        case 2:
            console.log(`Tuesday`);
            break;
        case 3:
            console.log(`Wednesday`);
            break;
        case 4:
            console.log(`Thursday`);
            break;
        case 5:
            console.log(`Friday`);
            break;
        case 6:
            console.log(`Saturday`);
            break;
    
        default:
            console.log(`Invalid Code`);
            break;
    }
}

enterCode(2)
enterCode(4)
enterCode(6)
enterCode(0)
