// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1

 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

// Way 1
// Approach: Using a Hash Map  (using new Map()) 
// We can use a hash map to count the occurrences of each number in the array.
// After counting, we can iterate through the hash map to find the number that appears only once.
// This approach runs in O(n) time and uses O(n) space.

function singleNumberWithMap(nums) {
    const countMap = new Map(); // Create a hash map to store counts
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1); // Increment the count
        } else {
            countMap.set(num, 1); // Initialize the count to 1
        }
    }
    for (const [key, value] of countMap.entries()) {
        if (value === 1) {
            return key; // Return the number that appears only once
        }
    }
}
// Example usage:  
const nums1 = [2, 2, 1];
console.log(singleNumberWithMap(nums1)); // Output: 1
const nums2 = [4, 1, 2, 1, 2];
console.log(singleNumberWithMap(nums2)); // Output: 4
const nums3 = [1];
console.log(singleNumberWithMap(nums3)); // Output: 1

// Another way to write the same function using a hash map:
function singleNumberWithHashMap(nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }
    // for (let key in hash) {
    //     if (hash[key] === 1) {
    //         return parseInt(key); // Return the number that appears only once
    //     }
    // }
    for(let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === 1) {
            return nums[i]; // Return the number that appears only once
        }
    }
}
// Example usage:
const nums111 = [2, 2, 1];
console.log(singleNumberWithHashMap(nums111)); // Output: 1
const nums112 = [4, 1, 2, 1, 2];
console.log(singleNumberWithHashMap(nums112)); // Output: 4
const nums113 = [1];
console.log(singleNumberWithHashMap(nums113)); // Output: 1




// Way 2
// Approach: Using XOR operation
// The XOR operation has the property that a ^ a = 0 and a ^ 0 = a.
// Therefore, if we XOR all the numbers in the array, the pairs will cancel out
// and we will be left with the single number that appears only once.
// This approach runs in O(n) time and uses O(1) space.
// This is an efficient solution for the problem of finding the single number in an array where every other number appears twice.
// The function iterates through the array and applies the XOR operation to each element.
// The final result will be the single number that does not have a pair.
// This solution is optimal in terms of both time and space complexity.
// Time Complexity: O(n)
// Space Complexity: O(1)


function singleNumber(nums) {
    let xor = 0; // Initialize result to 0

    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i]; // XOR each element with the result
    }

    return xor; // The result will be the single number
}

// Example usage:
const nums11 = [2, 2, 1];
console.log(singleNumber(nums11)); // Output: 1
const nums12 = [4, 1, 2, 1, 2];
console.log(singleNumber(nums12)); // Output: 4
const nums13 = [1];
console.log(singleNumber(nums13)); // Output: 1