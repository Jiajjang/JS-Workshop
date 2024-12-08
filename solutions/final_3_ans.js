/* Task 2: Find the value of the most expensive item in the cart */
let prices = [3.49, 1.80, 1.65, 4, 12.24]
let quantity = [2, 6, 4, 2, 1]

function calculate_total(prices,quantity){
// Calculates total price
    let current_highest = 0
    let price_of_item = 0
    for (let i = 0; i < prices.length; i++) {
        price_of_item = quantity[i] * prices[i];
        if (price_of_item > current_highest){
            current_highest = price_of_item
        } 
    }
    return current_highest
}

console.log(`The price of the most expensive item is $${calculate_total(prices,quantity)}`)