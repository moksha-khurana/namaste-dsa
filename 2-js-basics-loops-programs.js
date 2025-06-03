// Write a function that searches for a number in an array and returns its index if found, or -1 if not found.
function findIndex(arr, num){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] === num){
            return index;
        }
    }
    return -1;
}
// Example usage:
const numbers = [10, 20, 30, 40, 50];
console.log(findIndex(numbers, 30)); // Output: 2
console.log(findIndex(numbers, 60)); // Output: -1


// Write a function that returns the number of negative numbers in an array.
function countNegativeNumbers(arr) {
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 0) {
            count++;
        }
    }
    return count;
}
// Example usage:
const mixedNumbers = [1, -2, 3, -4, 5, -6];
console.log(countNegativeNumbers(mixedNumbers)); // Output: 3


//Write function that returns the largest number in an array.
function findLargestNumber(arr) {
    if (arr.length === 0) return null; // Handle empty array case
    let largest = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] > largest) {
            largest = arr[index];
        }
    }
    return largest;
}
// Example usage:
const numbersArray = [10, 20, 30, 40, 50];
console.log(findLargestNumber(numbersArray)); // Output: 50
const negNumbers = [-10, -2, -3, -4, -5, -6];
console.log(findLargestNumber(negNumbers)); // Output: -2


//Way 2 
function findLargestNumberByUsingInfinity(arr) {
    if (arr.length === 0) return null; // Handle empty array case
    let largest =  - Infinity; // Start with the smallest possible number
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] > largest) {
            largest = arr[index];
        }
    }
    return largest;
}
// Example usage:
const numbersArray1 = [10, 20, 30, 40, 50, 0, -10, -20, 100];
console.log(findLargestNumberByUsingInfinity(numbersArray1)); // Output: 100
const negNumbers1 = [-10, -2, -3, -4, -5, -6];
console.log(findLargestNumberByUsingInfinity(negNumbers1)); // Output: -2


// Find the samllest number in an array.
function findSmallest(arr) {
    //let smallest = arr[0];   
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest;
}

const arr = [1, 4, 5, 7, -9, 10, -5, -3]
console.log(findSmallest(arr))
