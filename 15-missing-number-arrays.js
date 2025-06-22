// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]

// Output: 8

// Explanation:

// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.


function missingNumber(nums) {
    const n = nums.length;
    let expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    // let actualSum = nums.reduce((acc, num) => acc + num, 0); // Sum of elements in the array
    let actualSum = 0; // Initialize actualSum to 0
    for (let i = 0; i < n; i++) {
        actualSum = actualSum + nums[i]; // Calculate the sum of elements in the array
    }
    return expectedSum - actualSum; // The missing number is the difference
}

// Example usage:
const nums1 = [3, 0, 1];
console.log(missingNumber(nums1)); // Output: 2
const nums2 = [0, 1];
console.log(missingNumber(nums2)); // Output: 2
const nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums3)); // Output: 8
const nums4 = [0]; // Edge case: only one element
console.log(missingNumber(nums4)); // Output: 1 (since 0 is present, 1 is missing)
const nums5 = []; // Edge case: empty array
console.log(missingNumber(nums5)); // Output: 0 (since the only number in   the range [0,0] is 0 itself)  
// const nums6 = [1, 2, 3, 4]; // Edge case: no missing number in a complete range
// console.log(missingNumber(nums6)); // Output: 0 (since 0 is the only missing number in the range [0,4])
// const nums7 = [0, 2, 3, 4]; // Edge case: missing number at the start
// console.log(missingNumber(nums7)); // Output: 1 (since 1 is the missing number in the range [0,4])
const nums8 = [1, 3, 4, 5]; // Edge case: missing number at the start
console.log(missingNumber(nums8)); // Output: 0 (since 0 is the missing number in the range [0,5])
const nums9 = [0, 1, 2, 3]; // Edge case: no missing number in a complete range
console.log(missingNumber(nums9)); // Output: 4 (since 4 is the missing number in the range [0,4])
