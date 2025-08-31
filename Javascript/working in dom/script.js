/** @type {HTMLElement} */
// selection by id, class & query
console.log("Hello sanam")
let area = document.getElementsByClassName("area") // we can select the element by id name
console.log(area)
area[2].style.backgroundColor = "green" // here i have changed the backgorund color of the 3rd index area
let area4 = document.getElementById("A4") //here  selected the element by ID
area4.style.backgroundColor = "red" //changed the color of the area

//Query selector //Method 
document.querySelector(".area").style.backgroundColor = "blue" //query selector select the first element only

//if we have to select all elelment then
div_container2 = document.querySelectorAll(".area")
// select all divs in node
//then we can use loop to manupulate all divs
console.log(div_container2)
div_container2.forEach(e => {
    e.style.color = "yellow"
    
});

//Get element by Tag name like p,div,table,span
document.getElementsByTagName("h1")[0].style.backgroundColor = "yellow"



//Get element by Name and it is mostly used for forms
document.getElementsByName("Full_Name")[0].style.backgroundColor = "blue"

//matches
//	If an element matches a selector return	true/false
Area2 = document.body.children[4].children[2]
console.log("The CSS selector of Area2 is .area true or not: ",Area2.matches(".area"))
console.log("The CSS selector of Area2 is .box true or not: ",Area2.matches(".box"))

//closest
//closest()	--Nearest ancestor that matches selector returns Element/null
//It looks upward in the DOM tree until it finds a match.
console.log("The Closest ancestor of Area2 is",Area2.closest(".area"))


//contains
//contains()	If element contains another one	 return true/false
container2 = document.querySelector(".container2")
console.log("Do Container2 Contains Area2",container2.contains(Area2))
console.log("Do Area2 Contains Container2 ",Area2.contains(container2))

