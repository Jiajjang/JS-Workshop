/* Exercise 3: Write a program to manage student scores */
let scores = [32,76,68,50,82]

// Ex3.1: Add a score of 48
scores.push(48)

//Ex 3.2: Remove 68 from the array 
scores.splice(2,1)

//Ex 3.3: Change 76 to 73
scores[1] = 73

//Ex 3.4: Filter array to only show scores above or equal to 50
let filteredScores = scores.filter(score=> score >=50)

console.log(scores) //Final Output: 32, 73, 50, 82, 48
console.log(filteredScores) //Output: 73, 50, 82



