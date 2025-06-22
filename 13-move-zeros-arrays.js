
// Code
// Testcase
// Test Result
// Test Result
// 283. Move Zeroes
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?

//Way  1: 

function moveZeroes(nums) {

    let newArr = []; // Array to hold non-zero elements

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element !== 0) {
            newArr.push(element);
        }
    }

    // Fill the remaining positions with zeros
    for (let i = newArr.length; i < nums.length; i++) {
        newArr.push(0);
    }

    // Copy the new array back to the original array
    for (let i = 0; i < nums.length; i++) {
        nums[i] = newArr[i];
    }
}

// Example usage:
const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0] 

//Way 2: Two Pointers Approach
function moveZeroesTwoPointers(nums) {
    let x = 0; // Pointer for the position of the last non-zero element

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) { // If the current element is not zero
            nums[x] = nums[i]; // Move it to the last non-zero position
            x++; // Increment the position for the next non-zero element
        }
    }

    // Fill the remaining positions with zeros
    for (let i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
}

// Example usage:
const nums2 = [0, 1, 0, 3, 12];
moveZeroesTwoPointers(nums2);
console.log(nums2); // Output: [1, 3, 12, 0, 0]
