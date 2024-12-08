/* Task 4: Calculate the final total after a 5% discount */
let prices = [3.49, 1.80, 1.65, 4]
let quantity = [2, 6, 4, 2]


function calculate_total(prices,quantity){
// Calculates total price
    let total_before_discount = 0
    for (let i = 0; i < prices.length; i++) {
        total_before_discount += quantity[i] * prices[i];
    }
    // Apply 5% discount
    let total_after_discount = total_before_discount * 0.95
    // Calculate amount saved
    let amount_saved = total_before_discount - total_after_discount

    // Round values to 2 decimal places
    amount_saved = Math.round(amount_saved*100)/100
    total_after_discount = Math.round(total_after_discount*100)/100
    console.log(`Your total is $${total_after_discount}. You have saved $${amount_saved}` )
}

calculate_total(prices,quantity)