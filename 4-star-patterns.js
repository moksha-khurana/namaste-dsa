// 4 * pattern or n star pattern 
// * * * *
// * * * * 
// * * * *
// * * * *
// * * * *

let n = 4;
for(let i = 0; i < n; i++) {
    let row = '';
    for(let j = 0; j < n; j++) {
        row += '* '; //row = row + '* ';
    }
    console.log(row.trim());
}
// Output:
// * * * *
// * * * *
// * * * *
// * * * *

// ----------------------

// Here if we increase the  value of i ..rows will get increase and if we increase the value of j columns will get increases
let n1 = 4;
for(let i = 0; i < n1+1; i++) {
    let row = '';
    for(let j = 0; j < n1; j++) {
        row += '* '; //row = row + '* ';
    }
    console.log(row.trim());
}
//Output:
// * * * * 
// * * * *
// * * * *
// * * * *
// * * * *

// ----------------------

let n2 = 4;
for(let i = 0; i < n2; i++) {
    let row = '';
    for(let j = 0; j < n2+1; j++) {
        row += '* '; //row = row + '* ';
    }
    console.log(row.trim());
}

// Output:
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// ----------------------

// *
// * *
// * * *
// * * * *

let n3 = 4;
for(let i = 0; i < n3; i++) {
    let row = '';
    for(let j = 0; j < i+1; j++) { // for(let j = 0; j <= i; j++) {  both are same
        row += '* ';
    }
    console.log(row.trim());
}
// Output:
// *
// * * 
// * * *
// * * * * 


// ----------------------

let n4 = 5;
for(let i = 0; i < n4; i++) {
    let row = '';
    for(let j = 0; j < i+1; j++) {
        row = row + (j + 1);
    }
    console.log(row);
}
// Output:
// 1
// 12
// 123
// 1234
// 12345

// ----------------------

let n5 = 5;
for(let i = 0; i < n5; i++) {
    let row = '';
    for(let j = 0; j < i+1; j++) {
        row = row + (i + 1); 
    }
    console.log(row);
}

// Output:
// 1
// 22
// 333
// 4444
// 55555

// Way2
let n6 = 5;
for(let i = 1; i <= n6; i++) {
    let row = '';
    for(let j = 1; j <= i; j++) {
        row += (i);
    }
    console.log(row);
}

// ------------------------

let n7= 5;
for(let i = 0; i < n7; i++) {
    let row = '';
    for(let j = 0; j < n7 - i; j++) {
        row += j+1;
    }
    console.log(row);
}

// Output:
// 12345
// 1234
// 123
// 12
// 1    

// ------------------------

let n8 = 5;
for(let i = 0; i < n8; i++) {
    let row = '';
    for(let j = 0; j < n8 - i; j++) {
        row += '* ';
    }
    console.log(row);
}
// Output:
// * * * * *
// * * * *
// * * *
// * *
// *

// ------------------------

let n9 = 5;
for(let i = 0; i < n9; i++) {
    let row = '';
    // Add spaces before the stars
    for(let j = 0; j < n9-(i+1); j++) {
        row += ' ';
    }
    // Add stars
    for (let k = 0; k < i+1; k++) {
        row += '*';
    }
    console.log(row);
}
// Output:
//     *
//    **
//   ***
//  ****
// *****    

// ------------------------

let n10 = 5;
for(let i = 0; i < n10; i++) {
    let row = '';
    for(let j = 0; j < i + 1 ; j++) {
        if( j % 2 === 0) {
            row += 1; // Add 1 for even index
        }
        else {
            row += 0; // Add 0 for odd index
        }
    }
    console.log(row);
}

// Output:
// 1
// 10
// 101
// 1010
// 10101    

// Way2
let n11 = 5;
for(let i = 0; i < n11; i++) {
    let row = '' ; 
    let toggle = 1;
    for(let j = 0; j < i + 1 ; j++) {
        row = row + toggle; 
        if(toggle == 1) { // Check the sum of indices
            toggle = 0; // Add 1 for even sum
        }
        else {
            toggle  = 1; // Add 0 for odd sum
        }
    }
    console.log(row);
}     

// Output:
// 1
// 10
// 101
// 1010
// 10101


// Way3
let n12 = 5;
for(let i = 0; i < n12; i++) {
    let row = '';
    let toggle = 1; // Start with 1
    for(let j = 0; j < i + 1; j++) {
        row = row + toggle; // Append the current toggle value
        toggle = 1 - toggle; // Switch between 1 and 0
    }
    console.log(row);
}
// Output:
// 1
// 10
// 101
// 1010
// 10101

// ------------------------

let n13 = 5;
let toggle = 1; // Start with 1
for(let i = 0; i < n13; i++) {
    let row = '';
    for(let j = 0; j < i + 1; j++) {
        row = row + toggle; 
        if(toggle == 1) { // Check the sum of indices
            toggle = 0; // Add 1 for even sum
        }
        else {
            toggle  = 1; // Add 0 for odd sum
        }
    }
    console.log(row);
}

// Output:
// 1
// 01
// 010
// 1010
// 10101
