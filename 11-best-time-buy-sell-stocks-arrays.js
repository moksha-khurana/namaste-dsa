// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

function maxProfit(prices) {
    let minPrice =  prices[0]; // Initialize minPrice to the first price
    let maxProfit = 0; // Initialize maxProfit to 0

    for (let i = 0; i < prices.length; i++) {
        if( prices[i] - minPrice > maxProfit) { // Check if current profit is greater than maxProfit
            maxProfit = prices[i] - minPrice; // Update maxProfit if current profit is greater
        }
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // Update minPrice if current price is lower
        } 
    }

    return maxProfit; // Return the maximum profit found
}

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5
const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0
// Edge cases
const prices3 = [1, 2, 3, 4, 5]; // Prices always increasing
console.log(maxProfit(prices3)); // Output: 4 (Buy at 1, sell at 5)
const prices4 = [5, 4, 3, 2, 1]; // Prices always decreasing
console.log(maxProfit(prices4)); // Output: 0 (No profit possible)

