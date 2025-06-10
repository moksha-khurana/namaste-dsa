// To check if the numer is a palindrome
// Way 1: 

function isPalindrome1(num) {
    if (num < 0) return false; // Negative numbers are not palindromes
    let originalNum = num; // Store the original number
    let rev = 0;
    while (num > 0) {
        const digitRem = num % 10; // Get the last digit
        rev = rev * 10 + digitRem; // Build the reversed number
        num = Math.floor(num / 10); // Remove the last digit
    }
    // if(rev === originalNum){
    //     return true; // The number is a palindrome
    // }
    // return false; // The number is not a palindrome

    // Alternatively, you can use a single return statement
    return rev === originalNum; // Return true if the reversed number is equal to the original
}

// Way 2: Not DSA approach 
function isPalindrome(num) {
  // Convert the number to a string
  const str = num.toString();
  
  // Reverse the string and compare it with the original
  return str === str.split('').reverse().join('');
}   
// Example usage:
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(12345)); // Output: false
console.log(isPalindrome(0));     // Output: true (0 is a palindrome)
console.log(isPalindrome(-121));  // Output: false (negative numbers are not considered palindromes)
console.log(isPalindrome(1001));  // Output: true
console.log(isPalindrome(1234321)); // Output: true
console.log(isPalindrome(123456)); // Output: false
console.log(isPalindrome(1));     // Output: true (single digit numbers are palindromes)