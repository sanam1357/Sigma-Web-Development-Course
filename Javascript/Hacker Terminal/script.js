console.log('Js initialized');
let terminal = document.querySelector(".terminal")
let ul = terminal.querySelector("ul")
let alllist = ul.children
console.log("The lenth is", alllist.length)
async function runinoder() {
    for (let index = 0; index < alllist.length; index++) {
        let ran = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
        console.log("Waiting Time : ", ran * 1000)
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()

            }, ran * 1000);
        })
        ul.children[index].removeAttribute("class")
        
        
    }
    
    

}
runinoder()

async function aniorder() {
    for (let index = 0; index <= 3; index++) {
        await new Promise((resolve) => {
            setTimeout(() => {
                for (let index = 0; index < alllist.length; index++) {
                    alllist[index].insertAdjacentHTML("beforeend", `<span style="font-size: 16px;font-weight: bolder;"> .</span>`)
                    console.log("added")
                }
                resolve()
            }, 500);
            
            
            
        })

    }

     for (let index = 0; index <= 3; index++) {
         await new Promise((resolve) => {
            setTimeout(() => {
                for (let index = 0; index < alllist.length; index++) {
                alllist[index].children[0].remove("span")
                console.log("remove")
                }
                resolve()
            }, 0);
            
        })
        
        

    }
    

}


async function solve() {
    while (true){
        await aniorder()
        
        
    }
    
    
}
solve()

