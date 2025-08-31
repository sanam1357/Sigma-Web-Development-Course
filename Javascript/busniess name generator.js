let adjective = "Crazy Amazing Fire"
let shop_name = "Engine Food Garment"
let word = "Bros Limited Hub"
function randstr(x) {
    let index1 = x.indexOf(" ");
    let index2 = x.indexOf(" ", index1 + 1);
    // console.log("index :",index1, index2);
    let min = 1;
    let max = 3;
    let ran = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log("random number: ", ran)
    if(ran==1){
        return (x.slice(0,index1))
    }
    else if(ran==2){
        return (x.slice(index1+1,index2))
    }
    else if(ran==3){
        return(x.slice(index2+1))
    }

}
console.log("your Company Name is ",randstr(adjective),randstr(shop_name),randstr(word))