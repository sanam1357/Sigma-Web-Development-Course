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
    let html = `
        <div class="card">
            <div class="part1">
                <div class="thumnail"><img
                        src="${thumnail}"
                        alt="youtube Thumnail"></div>
                <div class="duration">${duration}</div>

            </div>
            <div class="part2">
                <div class="title">
                    <h1>${title}</h1>
                </div>
                <div class="details">
                    <div class="cname">${cname}</div>
                    <div class="views">${viewscalc(views)} </div>
                    <div class="months">${months}</div>

                </div>

            </div>

        </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML+ html ;
}
let card = document.querySelector(".card")
cardmaker("Put Image & Backgorund in HTML","DeutschTechnik",50000,"5 Month Ago","05:30","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg")
cardmaker("Remove Image & Background in HTML","DeutschTechnik",50000,"5 Month Ago","05:30","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg")
