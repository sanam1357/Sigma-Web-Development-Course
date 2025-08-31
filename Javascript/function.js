//if we have do somthing repeatedly , then we need fuctions
function Greet(name) {
    console.log("Hi " + name + " Welcome To our Website")
    console.log( name + " You are Very Good Person.")
    console.log( name + " Thank for Visit.")
    
}
Greet("sanam")
console.log("****************")
Greet("Ashish")

function sum(a,b,c=5){
    console.log(a,b,c);
    return a + b + c; 
}
x = sum(5,2)
y = sum(10,6)
z = sum(2,6,9)
console.log("The sum of Number is ", x);
console.log("The sum of Number is ", y);
console.log("The sum of Number is ", z);

//Arrow function ( can be said shorthand function)
const add = (m,n) =>{
    console.log("The value you have entered are ",m," & ",n);
    return m + n;

}
let addition1 = add(2,5)
console.log("Sum of Number is ", addition1)