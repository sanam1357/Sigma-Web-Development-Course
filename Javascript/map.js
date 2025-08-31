numbers = [1,2,3,4,5]
console.log("original Number is ",numbers)
// i am to make each number double that can be done by map
//long method
/*
double = []
function dub(x){
    return x*2
}
for (let index = 0; index < numbers.length; index++) {
    double.push(dub(numbers[index]));
    
}
console.log(double)
*/
//We can do that shortly by fuction


// double = numbers.map(
//     function dub(x){
//     return x*2
 
// }
//     )
// console.log(double)

//moreshort using  arrow function
double = numbers.map(x => {
    return x*2
})
console.log("Double number is ",double)

//filter
even_num = numbers.filter(x =>{
    return x%2==0; //this return value true & false , if it is true i will be added
})
console.log("Even number is ",even_num)

//reduce
total_sum = numbers.reduce((a,b) =>{
    return a+b
})
console.log("Total Number sum is ",total_sum)

total_multi = numbers.reduce((a,b) =>{
    return a*b
})
console.log("The total muliplied number is ",total_multi)

