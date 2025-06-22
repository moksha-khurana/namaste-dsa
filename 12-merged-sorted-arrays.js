// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109
 

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?

// Approach:// 1. Create a copy of the first m elements of nums1.

function mergeSortedArrays(nums1,m,nums2,n) {
    let nums1Copy = nums1.slice(0, m); // Copy the first m elements of nums1
    let p1 = 0; // Pointer for nums1Copy
    let p2 = 0; // Pointer for nums2

    for (let i = 0; i < m + n; i++) {
        // If nums2 is exhausted or current element in nums1Copy is less than or equal to nums2
        if (p2 >= n || (p1 < m && nums1Copy[p1] <= nums2[p2])) {
            nums1[i] = nums1Copy[p1]; // Take from nums1Copy
            p1++;
        } else {
            nums1[i] = nums2[p2]; // Take from nums2
            p2++;
        }
    }
}

// Example usage:
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
mergeSortedArrays(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]   

// Way 2: Two Pointers Approach

function mergeSortedArraysWithoutArrayCopy(nums1, m, nums2, n) {
    let p1 = m - 1; // Pointer for nums1
    let p2 = n - 1; // Pointer for nums2

    for (let i = m+n-1 ; i >= 0; i--) {
        //If p2 breaks, just need to end or break 
        if(p2 < 0){
            break;
        }

        //if p1 ends still need to continue with the else part 
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1]; // Place from nums1  
            p1--;
        } else {
            nums1[i] = nums2[p2]; // Place from nums2
            p2--;
        }
    }
}

const nums3 = [1, 2, 3, 0, 0, 0];
const m1 = 3;
const nums4 = [2, 5, 6];
const n1 = 3;
mergeSortedArraysWithoutArrayCopy(nums3, m1, nums4, n1);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]  

