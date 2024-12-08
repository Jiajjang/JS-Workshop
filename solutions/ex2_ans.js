/* Exercise 2: Rewrite the function from ex1 into an arrow function */

const even = n => { // Initialise a constant called even that takes in n as a parameter
    let sum = 0
    for (let i = 1;i <= n; i++){ // Loop from 1 to n
        if (i%2 === 0){ //Check if number is even
            sum += i  //Add even numbers to sum
        }
    }
    return sum
}

// Test Cases: Use these to check your answers
console.log(even(1)) //Output: 0
console.log(even(5)) //Output: 6
console.log(even(10)) //Output: 10




