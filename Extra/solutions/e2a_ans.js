let birdCount = [21, 14, 4, 6, 9, 5, 3]

function totalBirdCount(birdCount) {
    let total = 0
    for (let count of birdCount) {
        total += count
    }
    return total
}

console.log(`The total number of birds seen is ${totalBirdCount(birdCount)}`)