let numbers = [2, 5, 8, 7, 9, 6];

for(let i = 0; i< numbers.length; i++) {
    console.log(`Element at: ${i} is ${numbers[i]}`)
}

for(let element of numbers) {
    console.log(element)
}