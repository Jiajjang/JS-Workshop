function categoriseTemperature(temp){
    if (temp < 15) {
        return "Cold"
    } else if (15 <= temp && temp <=30) {
        return "Moderate"
    } else {
        return "Hot"
    }
}

//TEST CASES
console.log(categoriseTemperature(9))//Output: Cold
console.log(categoriseTemperature(15)) // Output: Moderate
console.log(categoriseTemperature(36)) // Output: Hot