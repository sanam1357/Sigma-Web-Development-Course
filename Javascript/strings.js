let n = "Sanam"
let a = "ashish"
let nam = "Sita kumari mahato"
console.log(`The length of the n is ${n.length}`) //template literals exmaple for printing the code easily
console.log(`We can put "dobule quote" here easily.`)
console.log("But we have to here put \" for the double quote") // The slash used in it is a escape sequence otherwise we can't print " inside the dobule quote
console.log("hi i am sanam\nthis is another line\t this is space")
console.log("Line 1 \r Line 2")
console.log(n[0]) //index of the character
console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(nam.slice(5,11)) //here 5the index is included but 11 is not included it has printed from 5 to 10 indext character
console.log(n.slice(2))// it will print form 2nd index character to end
console.log(nam.replace("mahato","Thanet"))
console.log(a.concat(n,nam,"hero"))
let hi = ("          hero   ")
console.log(hi)
console.log(hi.trim())
console.log(n.startsWith("Sa"))
console.log(n.endsWith("am"))
n = "Sanam Thanet"
// n = n.toUpperCase()
console.log(n)
console.log(n.indexOf("Th"))
