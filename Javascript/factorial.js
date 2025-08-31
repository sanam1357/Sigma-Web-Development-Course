let num = 8;
// let factorial = 1;
// for (let index = num; index > 0; index--) {
//     console.log(index)
//     factorial *= index;
    
    
// }
// console.log(factorial)
const numbers = []
for (let index = num; index > 0 ; index--) {
   numbers.push(index)
    
}
console.log(numbers)
factorial = numbers.reduce((a,b) =>{
    return a*b
    
})
console.log("The Factorial of the number is ", factorial)





