let students = ["ashish","sandip singh","samir","sundar mahato","mina prasad subedi cheetri","sanam hero"]
let gryffindor = [] //lessthan 6
let Hufflepuff = [] //less than 8
let Ravenclaw = [] //less than 12
let Slytherin = [] //greater than und gleich zu 12
students.forEach(student => {
    if(student.length<6){
        gryffindor.push(student)

    }
    else if(student.length<8){
        Hufflepuff.push(student) 
    }
    else if(student.length<12){
        Ravenclaw.push(student) 
    }
    else if(student.length>=12){
        Slytherin.push(student) 
    }
    
    
});

console.log("gryffindor(Lessthan6)",gryffindor)
console.log("Hufflepuff(Lessthan8)",Hufflepuff)
console.log("Ravenclaw(Lessthan12)",Ravenclaw)
console.log("Slytherin(greaterthanequalto12)",Slytherin)