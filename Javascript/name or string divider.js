let a = "Sanam Thanet"
let b = "Ashish Mahato"
let c = "Sanjaya Singh"
function divider(x){
    let index = x.indexOf(" ");
    console.log(`First Name: ${x.slice(0,index)}\nLast Name: ${x.slice(index+1)}`)

}
divider(b)

//short exercise (Kurz Aüfgabe)
str = "Please give me your Rs 50000" //the task is i have to extract the amount
rs_index = str.indexOf("Rs")
console.log(`The amount is Rs ${str.slice(rs_index+3)}`)