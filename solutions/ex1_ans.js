/* Exercise 1: Calculate the sum of all even numbers from 0 to n. */

function sumOfEvenNumbers(n) {
    let sum = 0
    for (let i = 1;i <= n; i++){ // Loop from 1 to n
        if (i%2 === 0){ //Check if number is even
            sum += i  //Add even numbers to sum
        }
    }
    return sum
}

// Test Cases: Use these to check your answers
console.log(sumOfEvenNumbers(1)) //Output: 0
console.log(sumOfEvenNumbers(5)) //Output: 6
console.log(sumOfEvenNumbers(10)) //Output: 30




