console.log("Program Starting.....")
var a = 5; //var is a global
let b = 6; // let can be re-declared in bloced scope
const x = 0; //the value of x cannot be changed now because it is constant
{
    var a = 50;
    let b = 60;
    console.log("inside block scope")
    console.log("The value of  a is", a)
    console.log("The value of b is ",b)
    
}
console.log("outside blocked scope")
console.log("The value of  a is", a)
console.log("The value of b is ",b) //here the value of b again come as defined in global
console.log("Types of Variable")
c = 3.55;
d = "sanam";
e = true
f = undefined
g = null
console.log(b,c,d,e,f,g,x)
console.log(typeof b,typeof c,typeof d,typeof e,typeof f,typeof g,typeof x)

// creating object in javascript
const hero = {
    Name : "sanam",
    Age : 22,
    "secret code" : 127

}
console.log(hero)
hero.address = "kawasoti" //adding more details
console.log(hero)
hero.Age = 25
console.log(hero)


