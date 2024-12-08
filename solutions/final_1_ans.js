/* Task 1: Calculate the total price and checks if it exceeds the budget. */
let prices = [3.49, 1.80, 1.65, 4, 12.24]
let quantity = [2, 6, 4, 2, 1]
const budget = 40

// Qn 2: Remove detergent from the cart
prices.pop()
quantity.pop()

function calculate_total(prices,quantity){
// Calculate total price
    let total = 0
    for (let i = 0; i < prices.length; i++) {
        total += quantity[i] * prices[i];
    }
// Calculate if total exceeds budget
    let exceeded_amount = total - budget
    exceeded_amount = Math.round(exceeded_amount*100)/100

// If it exceeds, displays the exceeded amount
    if (exceeded_amount > 0){
        console.log(`You have exceeded your budget by $${exceeded_amount}`)
    } else {
    console.log(`Your total is $${total}`)
    }
}
calculate_total(prices,quantity)