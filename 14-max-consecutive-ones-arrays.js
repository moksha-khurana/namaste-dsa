// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

function findMaxConsecutiveOnes(nums) {
    let maxCount = 0; // Variable to keep track of the maximum count of consecutive 1's
    let currentCount = 0; // Variable to keep track of the current count of consecutive 1's

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) { // If the current element is 1
            currentCount++; // Increment the current count
        } else {
            maxCount = Math.max(maxCount, currentCount); // Update maxCount if currentCount is greater
            currentCount = 0; // Reset currentCount for the next sequence
        }
    }

    // Final check to update maxCount in case the array ends with a sequence of 1's
    return Math.max(maxCount, currentCount);
}

// Example usage:
const nums1 = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums1)); // Output: 3
const nums2 = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums2)); // Output: 2
const nums3 = [0, 0, 0]; // Edge case: no 1's
console.log(findMaxConsecutiveOnes(nums3)); // Output: 0
const nums4 = [1, 1, 1, 1]; // Edge case: all 1's
console.log(findMaxConsecutiveOnes(nums4)); // Output: 4
const nums5 = [0, 1, 1, 0, 1, 1, 1, 0, 1]; // Mixed case
console.log(findMaxConsecutiveOnes(nums5)); // Output: 3
