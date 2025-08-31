let a = 10;
let b = 2;
console.log("The value of A is",a,"B is",b)
console.log("The sum of A and B is",(a+b))
console.log("The subtraction of A and B is",(a-b))
console.log("The Mulitplication of A and B is",(a*b))
console.log("The Divison of A / B is",(a/b))
console.log("A*A  is",(a**b))
{
    console.log("*******************")
    a += 5;
    console.log("a+=5")
    console.log("The value of a is",a)
}
let age = 20;
if(age<18){
    console.log("Your are not allowed")
}
else{
    console.log("You are allowed")
}
let answer = (age<18) ? "you are not allowed":"you are allowed"; //This is the shorthand of the if-elase
console.log(answer);