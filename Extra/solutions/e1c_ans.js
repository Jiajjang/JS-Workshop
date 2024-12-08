function findHeatWave(weeklyTemp) {
    let startDay = 1; // Start of the heatwave
    let heatwaveCount = 0; // Current heatwave duration
    let heatWave = false //Track if heatwave has happened

    for (let i = 0; i <= weeklyTemp.length; i++) {
        if (weeklyTemp[i] > 35) {
            heatwaveCount++; // Increase the current heatwave streak
            if (heatwaveCount == 1) {
                startDay += i; // Mark the starting day
            }
            if (heatwaveCount >= 3) {
                heatWave = true //Mark heatwave happening
            }
        } else {
            // If the streak ends, return the values
            if (heatWave === true){
                return `The heatwave started on day ${startDay} and lasted for ${heatwaveCount} days`
            }
            // reset the counter
            heatwaveCount = 0
        }
    }
    return null
}

// TEST CASES: DO NOT MODIFY
console.log(findHeatWave([37,36,35,40,30,29])) // Output: null
console.log(findHeatWave([27,29,36,38,28])) //Output: null
console.log(findHeatWave([29,39,40,37,36,38])) // Output: Started on day 2, lasted for 5 days
console.log(findHeatWave([36,39,37,35,38,36,29])) //Output: Started on day 1, lasted for 3 days