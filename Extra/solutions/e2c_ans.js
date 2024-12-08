// Import Function
const { totalWeeklyCount, monthlyBirdCount } = require('./e2b_ans.js');
let weeklyTotal = totalWeeklyCount(monthlyBirdCount)

function busiestWeek(weeklyTotal) {
    let currentHighest = 0;
    let busiestWeekIndex = 0; // Track the week with the highest count

    for (let i = 0; i < weeklyTotal.length; i++) {
        let sum = weeklyTotal[i];
        if (sum > currentHighest) { //Check if current total is higher than exissting highest
            currentHighest = sum;
            busiestWeekIndex = i + 1; // Store the week number (1-indexed)
        }
    }
    return `Week ${busiestWeekIndex} had the highest total number. The total number of birds seen was ${currentHighest}`;
}
console.log(busiestWeek(weeklyTotal))