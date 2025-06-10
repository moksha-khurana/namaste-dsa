// Math.pow // is used to raise a number to a power. Math.pow(2, 3) -> 8 (2 raised to the power of 3)

function reverseInteger(num) {
    let numCopy = num; // Store the original number;
    num = Math.abs(num); // Handle negative numbers by converting to positive

    let reversed = 0;
    while (num > 0) {
        const lastDigit = num % 10; // Get the last digit
        reversed = (10 * reversed) + lastDigit; // Build the reversed number
        num = Math.floor(num / 10); // Remove the last digit
    }

    // Check if the reversed number exceeds the 32-bit signed integer range
    let limit = Math.pow(2, 31); // Upper limit for 32-bit signed integer
    if(reversed < -limit || reversed > limit) {
        return 0; // Return 0 if the reversed number exceeds the 32-bit signed integer range
    }
    // Check if the reversed number is within the 32-bit signed integer range

    return numCopy < 0 ? -reversed : reversed; // Return the reversed number with the original sign
}

// Example usage:
console.log(reverseInteger(123));    // Output: 321
console.log(reverseInteger(-123));   // Output: -321
console.log(reverseInteger(120));    // Output: 21 (trailing zeros are removed)
console.log(reverseInteger(0));      // Output: 0
console.log(reverseInteger(1534236469)); // Output: 0 (exceeds 32-bit signed integer range)
console.log(reverseInteger(-2147483648)); // Output: 0 (exceeds 32-bit signed integer range)
console.log(reverseInteger(2147483647)); // Output: 0 (exceeds 32-bit signed integer range)