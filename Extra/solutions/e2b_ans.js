let monthlyBirdCount = [
    [48, 32, 21, 13], //Week 1
    [19, 36, 52, 40], // Week 2
    [26, 43, 56, 29], // Week 3
    [41, 23, 51, 34] // Week 4
];

function totalWeeklyCount(monthlyBirdCount) {
    let weeklyTotals = [];
    for (let week of monthlyBirdCount) { //Iterate through inner arrays
        let weeklyTotal = week.reduce((sum, dailyCount) => sum + dailyCount, 0); // use .reduce to sum the inner arrays
        weeklyTotals.push(weeklyTotal); // Add sum of week to new array
    }
    return weeklyTotals;
}

// DO NOT MODIFY
module.exports = { totalWeeklyCount, monthlyBirdCount }