const myfunc = (x) =>{
    console.log("hero")
    return x*2
}
const a = [1,3,5,"hero",true,"mango",myfunc]
//we can store any time of data combinely here in  array
//arrary is mutable

console.log(a[6](5))
a[6]= "string"
console.log(a[0])
console.log(a)
console.log(typeof(a))

let b = a.toString()
console.log(b,"||Type of b is: ",typeof(b))
c = a.join("-")
console.log(c,"||Type of c is: ",typeof(c))

lst = a.pop() //pop delete the last element of the array and  returns the popped value
console.log(lst)
console.log(a)

a_new_lenth = a.push("gunda") //it add element to the last of array & return the lenth of it
console.log(a_new_lenth)
console.log(a)

first = a.shift() // it returns the first value and remove it from the array
console.log(first,": is the removed element.")
console.log(a)

fst_new = a.unshift("I am first") //it return new lenght & add to the first of array
console.log(fst_new,": this is the new lenth of the array.")
console.log(a)

delete a[3] //detele the item from the array and make it empty 
console.log(a)

const old_list = ["hero: ","gunda: "]
const new_list = [3,7,9,4,10,19,12]
d = old_list.join(new_list) //join array & make string 
console.log(d)

console.log(old_list.concat(new_list,"i am  back")) //join the two array and make one array
console.log("The new list is: ",new_list.sort)
console.log("The sorted list of new_list is: ",new_list.sort((a, b) => a - b)) //may be it's sort from 0 to 9 only

const numbers = [1,2,3,4,5]
// numbers.splice(1,2)  //splice can be used to delte element of arry, first we have to give postion where to start to delete // second we have to give number of element to delete
del_el = numbers.splice(1,2,20,30) // postion to start-1, no.of element to delete- 2 , the element that should be added - 20, 30
console.log(numbers)

new_num = numbers.slice(2) // it will slice elemennt from postion 3 to end
console.log(new_num)
new_num = numbers.slice(1,4) // it will slice number from 1 to 3 (4 is not included)
console.log(new_num)

console.log(numbers.reverse())

//looping in array

//For each
const  loop_list = [10,20,30,40,50]
loop_list.forEach(x => {
    console.log(x*x)
    
});



