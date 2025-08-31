console.log("Types of Loops in Javascript")
console.log("1.While \n2.Do While\n3.For\n4.For in\nFor of");
//while loop
console.log("While Loop")
let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
    
}
// Do while , it is same as while loop but it's executes at least once regardless what is the condition
console.log("Do While")
let number = 50;
do {
    console.log(number);
    number+=1;
    
} while (number<10);
//For Loop
console.log("For Loop")
let age = 0;
for (let i = 1; i <= 50; i++) {
    age += 1;
    console.log(age);
    
}

//For in loop
console.log("For In Loop")
let person = {
    name: "John",
    "Job Role": "Web Developer",
    city: "New York"
}
for (const key in person) {
        const element = person[key];
        console.log(key, element)
        
}
//For of loop
console.log("For Of Loop")
let arr = [1, 2, 3, 4, 5];
for (const value of arr) {
    console.log(value);
    
}
let fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
    console.log("The name of the fruit is: ", fruit);
}
