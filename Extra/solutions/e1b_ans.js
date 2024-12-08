function categoriseTemperature(temp, adjustment){
    let new_temp = temp + adjustment
    if (new_temp < 15) {
        return `${new_temp}°C, Cold`
    } else if (15 <= new_temp && new_temp <=30) {
        return `${new_temp}°C, Moderate`
    } else {
        return `${new_temp}°C, Hot`
    }
}

console.log(categoriseTemperature(9, 15))//Output: Moderate
console.log(categoriseTemperature(15, -6)) // Output: Cold
console.log(categoriseTemperature(21, 12)) // Output: Hot