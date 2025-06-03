// Even numbers from array arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element % 2 === 0) {
        console.log(element);
    }
}
// Output: 2, 4, 6, 8, 10


// Odd numbers from array arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element % 2 !== 0) {
        console.log(element);
    }
}
// Output: 1, 3, 5, 7, 9

// way2
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element % 2 == 1 ) {
        console.log(element);
    }
}
// Output: 1, 3, 5, 7, 9

let i = 0;
while(i < 5){
    console.log(i);
    i++;
}
// Output: 0, 1, 2, 3, 4


// Write a function which returns seconnd largest number in an array.

function findSecondLargest(arr) {
    if (arr.length < 2) return null; // Handle case with less than 2 elements

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > largest) {
            secondLargest = largest;
            largest = arr[index];
        } else if (arr[index] > secondLargest && arr[index] !== largest) { // Ensure we don't consider the largest number again 
            secondLargest = arr[index];
        }
    }

    return secondLargest === -Infinity ? null : secondLargest; // Return null if no second largest found
}       
// Example usage:
const numbersArray2 = [10, 20, 30, 40, 50];
console.log(findSecondLargest(numbersArray2)); // Output: 40
const mixedNumbers2 = [1, -2, 3, -4, 5, -6];
console.log(findSecondLargest(mixedNumbers2)); // Output: 3

// corner cases
// Edge case: Array with only one element
// Edge case: Array with all elements the same
// Edge case: Array with negative numbers   
// Edge case: Array with negative and positive numbers  
// Edge case: Array with duplicate largest numbers

// Way 2
function findSecondLargest2(arr) {

    let secondLargest = -Infinity;

    if (arr.length < 2) return null; // Handle case with less than 2 elements
    // Check if the array is empty
    let uniqueArr = Array.from(new Set(arr));
    if (uniqueArr.length < 2) return null; // Handle case with less than 2 unique elements
    // Sort the unique array in ascending order
    let sortedArray = uniqueArr.sort((a, b) => a - b);
    secondLargest = sortedArray[sortedArray.length - 2];
    return secondLargest; // Return the second largest number
    
}

const arr1 = [10, 20, 30, 40, 50];
console.log(findSecondLargest2(arr1)); // Output: 40

const mixedNumbers1 = [1, -2, 3, -4, 5, -6];
console.log(findSecondLargest2(mixedNumbers1)); // Output: 3
