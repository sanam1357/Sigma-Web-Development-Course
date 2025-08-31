const numbers = [10,20,5,5,10]
let sum = 0;
for (const num of numbers) {
    sum += num
    
}
console.log(numbers)
console.log(`The Sum of the number is ${sum}`)
console.log(`The total count number is ${numbers.length}`)
console.log(`The Mean of the Data is `,(sum/numbers.length))

