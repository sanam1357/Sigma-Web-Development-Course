console.log("JS initalized")
function cardmaker(title="Title", cname="Channel Name", views="Views", months="months", duration="Duration", thumnail="Thumnail") {
  
    function viewscalc(views){
        let len = views.toString().length
        if(views<=0){
            return "No"
        }
        else if(len<=3){
            return views

        }
        else if (len<=6){
            let views1 = (views/1000)
            if((Math.ceil(views1).toString().length<2)){
                return (`${(Math.floor(views1*10)/10)}K`)
            }
            else{
                return (`${Math.floor(views1)}K`)
            }
        }
        else if (len<=9){
            let views1 = (views/1000000)
            if((Math.ceil(views1).toString().length<2)){
                return (`${(Math.floor(views1*10)/10)}M`)
            }
            else{
                return (`${Math.floor(views1)}M`)
            }
        }
        else if (len>9){
              let views1 = (views/1000000000)
            if((Math.ceil(views1).toString().length<2)){
                return (`${(Math.floor(views1*10)/10)}B`)
            }
            else{
                return (`${Math.floor(views1)}B`)
            }
        
        }
        

    }
    document.querySelector(".title").innerHTML = `<h1>${title}</h1>`
    document.querySelector(".cname").innerHTML = cname
    document.querySelector(".views").innerHTML = viewscalc(views)
    document.querySelector(".months").innerHTML = months
    document.querySelector(".duration").innerHTML = duration
    document.querySelector(".thumnail").children[0].setAttribute("src", thumnail)
}
let card = document.querySelector(".card")
// cardmaker("Remove Image & Background in HTML","DeutschTechnik",50000,"5 Month Ago","05:30","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg")
function clonemaker(func){
    const clone = card.cloneNode(true);
    clone.removeAttribute("style")
    card.parentNode.insertBefore(clone, card.nextSibling);
    func
}
// function Entry(){
//     let title = prompt("Enter The Title of The Video: ")
//     let cname = prompt("Enter your channel Name: ")
//     let views = prompt("Enter the Number of Views: ")
//     let months = prompt("Enter the Published Date: ")
//     let duration = prompt("Enter the Duration of the Video")
//     let thumnail = prompt("Enter the Thumnail Link: ")
//     console.log (title,cname,views,months,duration,thumnail)
//     return [title,cname,views,months,duration,thumnail]
  
// }
clonemaker(cardmaker("This is First Hero","DeutschTechnik",50000,"5 Month Ago","05:30","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg"))
clonemaker(cardmaker("This is second HERO","DeutschTechnik",50000,"5 Month Ago","05:30","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg"))
clonemaker(cardmaker("This is third HERO","DeutschTechnik",50000,"5 Month Ago","05:30","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg"))
clonemaker(cardmaker(prompt("Enter The Title of The Video: "),prompt("Enter your channel Name: "),prompt("Enter the Number of Views: "),prompt("Enter the Published Date: "),prompt("Enter the Duration of the Video"),prompt("Enter the Thumnail Link: ")))