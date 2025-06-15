// Reverse String Arrays

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.



// way 1
function reverseString1(s) {

    let len = s.length; // Get the length of the array
    let halfLen = Math.floor(len / 2); // Calculate the halfway point
    for (let i = 0; i < halfLen; i++) {
        let temp = s[i]; // Store the current character
        s[i] = s[len - 1 - i]; // Swap characters
        s[len - 1 - i] = temp; // Complete the swap
    }
}
// Example usage:
const str = ["h", "e", "l", "l", "o"];
reverseString1(str);
console.log(str); // Output: ["o", "l", "l", "e", "h"]


// way 2
function reverseString(s) {
    let left = 0; // Pointer to the start of the array
    let right = s.length - 1; // Pointer to the end of the array

    while (left < right) {
        // Swap characters at left and right pointers
        [s[left], s[right]] = [s[right], s[left]];
        left++; // Move left pointer forward
        right--; // Move right pointer backward
    }

    return s; // Return the modified array
}

// Example usage:
const str1 = ["h", "e", "l", "l", "o"];
console.log(reverseString(str1)); // Output: ["o", "l", "l", "e", "h"]

// way 3

function reverseString3(s) {
 // using reverse method
  s.reverse();
  return s; // Return the modified array
}
// Example usage:
const str2 = ["h", "e", "l", "l", "o"];
console.log(reverseString3(str2)); // Output: ["o", "l", "l", "e", "h"]