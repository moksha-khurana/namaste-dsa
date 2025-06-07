// Math.floor() is used to round down to the nearest integer. Math.floor(10.9) -> 10
// Math.ceil() is used to round up to the nearest integer. Math.ceil(10.1) -> 11
// Math.round() is used to round to the nearest integer. Math.round(10.5) -> 11 
// Math.abs() is used to get the absolute value of a number. Math.abs(-10) -> 10

function  countDigits(n) {

    if (n === 0)  return 1; // Special case for zero
    
    n = Math.abs(n); // Handle negative numbers by converting to positive
    // way 2
    // if (n < 0) {
    //     n = -n; // Convert negative to positive
    // }
    
    
    let count = 0;
    
    while (n > 0) {
        n = Math.floor(n / 10); // Remove the last digit
        count++;
    }
    
    return count;
} 

// Example usage:
console.log(countDigits(12345)); // Output: 5
console.log(countDigits(0));      // Output: 1 (0 has one digit)
console.log(countDigits(100));    // Output: 3
console.log(countDigits(-9876));  // Output: 4 (negative number treated as positive)
console.log(countDigits(1000000)); // Output: 7
console.log(countDigits(-1));     // Output: 1 (negative number treated as positive)